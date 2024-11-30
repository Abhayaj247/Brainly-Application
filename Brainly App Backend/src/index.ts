import express from "express";
import { ContentModel, LinkModel, UserModel } from "./db";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { userMiddleware } from "./middleware";
import { random } from "./utils";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    await UserModel.create({
      username: username,
      password: password,
    });
    res.status(200).json({
      message: "You are signed up",
    });
  } catch (error) {
    res.status(411).json({
      message: "Error while signing up",
    });
  }
});
app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await UserModel.findOne({
    username,
    password,
  });
  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_SECRET
    );
    res.status(200).json({
      token,
    });
  } else {
    res.status(401).json({
      message: "Invalid username or password",
    });
  }
});
app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;
  await ContentModel.create({
    link,
    type,
    title: req.body.title,
    userId: req.userId,
    tags: [],
  });

  res.json({
    message: "Content added",
  });
});

app.get("/api/v1/content", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const content = await ContentModel.find({
    userId: userId,
  }).populate("userId", "username");
  res.json({
    content,
  });
});
app.delete("/api/v1/content", async (req, res) => {
  const contentId = req.body.contentId;
  await ContentModel.deleteOne({
    contentId,
    userId: req.userId,
  });
  res.json({
    message: "Content deleted",
  });
});
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
  const share = req.body.share;

  if (share) {
    const existingLink = await LinkModel.findOne({
        userId: req.userId
    })
    if (existingLink) {
        res.json({ 
            hash: existingLink.hash 
        });
        return;
    }
    const hash = random(10)
    await LinkModel.create({
      userId: req.userId,
      hash: hash,
    });
    res.json({
        message: "/share/" + hash,
    })
  } else {
    await LinkModel.deleteOne({
      userId: req.userId,
    });
  }
  res.json({
    message: "Removed link",
  });
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;

  const link = await LinkModel.findOne({
    hash,
  });
  if (!link) {
    res.status(404).json({
      message: "Sorry incorrect input",
    });
    return;
  }
  const content = await ContentModel.find({
    userId: link.userId,
  });
  const user = await UserModel.findOne({
    _id: link.userId,
  });
  if (!user) {
    res.status(404).json({
      message: "user not found, error should ideally not happen",
    });
    return;
  }
  res.json({
    username: user.username,
    content,
  });
});

app.listen(3000);
