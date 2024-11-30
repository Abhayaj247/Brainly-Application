import mongoose, { Schema, Types } from "mongoose";

mongoose.connect(
  process.env.MONGODB_URI!
);

const contentTypes = ["youtube","twitter"]; // Extend as needed

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const tagSchema = new Schema({
  title: { type: String, required: true, unique: true },
});

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: "tag" }],
  userId: { type: Types.ObjectId, ref: "user", required: true },
});

const linkSchema = new Schema({
  hash: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true , unique:true},
});

export const UserModel = mongoose.model("user", userSchema);
export const TagModel = mongoose.model("tag", tagSchema);
export const ContentModel = mongoose.model("content", contentSchema);
export const LinkModel = mongoose.model("link", linkSchema);