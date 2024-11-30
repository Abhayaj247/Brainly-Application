# Brainly App

Your digital memory vault built with React and TypeScript. Brainly helps you store and retrieve important content you don't want to forget - like interesting tweets, useful articles, or valuable videos. Think of it as your second brain where you can easily save and find content when you need it.Not just a personal tool, Brainly allows you to share your entire collection (your "brain") with others, making knowledge sharing effortless.

## 📚 Project Overview

Brainly App is your personal content storage and sharing solution that offers:
- Personal dashboard to organize your saved content
- Quick saving of content you want to remember for later
- Easy retrieval when you need to find something
- Secure user authentication (Sign up/Sign in)
- Share your entire "brain" collection with others
- Individual content sharing through unique links
- Clean, intuitive interface for effortless content management
- Instant access to your and shared digital memory vaults

## 🚀 Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- Axios

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. Clone the repository
```bash
git clone <your-repository-url>
cd "Brainly App"
```

2. Install Frontend Dependencies
```bash
cd "Brainly frontend"
npm install
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
This will start the development server at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## 🧪 Code Quality

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
Brainly frontend/
├── src/                    # Source files
│   ├── components/         # Reusable React components
│   │   ├── Button.tsx     # Custom button component
│   │   ├── Card.tsx       # Content card component
│   │   ├── CreateContentModel.tsx  # Content creation modal
│   │   ├── Input.tsx      # Custom input component
│   │   ├── Sidebar.tsx    # Navigation sidebar
│   │   └── SidebarItem.tsx # Sidebar menu item
│   │
│   ├── pages/             # Application pages
│   │   ├── Dashboard.tsx  # Main user dashboard
│   │   ├── Home.tsx      # Landing page
│   │   ├── SharedBrain.tsx # Shared brain view
│   │   ├── Signin.tsx    # Login page
│   │   └── Signup.tsx    # Registration page
│   │
│   ├── icons/            # SVG icons and visual assets
│   ├── hooks/            # Custom React hooks
│   ├── assets/           # Static assets
│   ├── App.tsx          # Main application component
│   ├── config.ts        # Application configuration
│   └── main.tsx         # Application entry point
│
├── public/              # Public static files
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # TailwindCSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## ⚙️ Configuration Files

- `vite.config.ts` - Vite bundler configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - TailwindCSS styling configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint code quality rules

## 🔧 Environment Setup

1. Create a `.env` file in the frontend directory
2. Add necessary environment variables:


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add YourFeature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 🐛 Bug Reports

If you find a bug, please create an issue with:
- Detailed description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
