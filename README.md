# 🚀 Z-Link Chat Application

A **feature-rich real-time chat application** built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Socket.IO**. Z-Link offers seamless communication, modern UI, and robust functionality for personal and professional messaging.

![Z-Link Preview](preview-image-url) <!-- Replace with actual image URL -->

---

## ✨ Key Features

### 🔐 Authentication & Security

- **Secure Signup/Login**: Email & password authentication with validation
- **JWT Authentication**: Token-based system with HTTP-only cookies
- **Protected Routes**: Only authorized users can access chats
- **Persistent Sessions**: "Remember Me" functionality
- **Password Encryption**: Secure with bcrypt

### 💬 Real-time Messaging

- **Instant Chat**: Real-time delivery with Socket.IO
- **Typing Indicators**: See when others are typing
- **Online Status**: Live user presence updates
- **Read Receipts**: Message status (read/unread)
- **Message History**: Persistent, paginated conversations
- **Media Sharing**: Images, emojis, and attachments
- **Message Actions**: Edit, delete, and react to messages

### 👤 User Profiles

- **Custom Avatars**: Upload/manage profile pictures
- **Profile Info**: Username, bio, and status
- **Cloud Storage**: Media storage via Cloudinary
- **User Settings**: Notification and theme preferences
- **User Search**: Find and connect with others

### 🎨 UI/UX

- **Responsive Design**: Optimized for desktop & mobile
- **Themes**:
  - Light/Dark Mode
  - Custom color palettes
  - Theme preferences saved across sessions
- **Modern Interface**:
  - Smooth animations
  - Loading skeletons
  - Toast notifications

---

## 🛠️ Tech Stack & Architecture

### 📦 Frontend

- **React.js + Vite**: Fast and lightweight development
- **State Management**:
  - Zustand (global state)
  - Context API (theme)
- **Styling**:
  - Tailwind CSS (utility-first)
  - DaisyUI (component library)
- **Routing**: React Router v7 (with protection)
- **API Handling**: Axios
- **Real-time**: Socket.IO client

### 🌐 Backend

- **Node.js + Express**: REST API setup
- **Database**:
  - MongoDB with Mongoose
  - Efficient schemas and indexed queries
- **Socket.IO**: Event-based real-time engine
- **Security**:
  - JWT Auth
  - CORS protection
  - Rate limiting
- **File Uploads**:
  - Cloudinary integration
  - Image optimization
  - Secure media handling

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v14+)
- MongoDB
- Cloudinary account

### ⚙️ Environment Setup

Create a `.env` file inside the `backend/` directory:

```env
PORT=5001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 📥 Installation

```bash
# Clone the repo
git clone https://github.com/OmniBotX/zlink.git
cd zlink

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### ▶️ Run Development Servers

```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd ../frontend
npm run dev
```

---

## 📱 Usage Examples

### 🔑 Authentication Flow

1. Register with email and password
2. Login to get secure access
3. Stay logged in across sessions

### 💬 Chatting

1. Select a contact
2. Send text or media
3. See read status and typing indicator
4. Edit, delete, or react to messages

### 👤 Profile Management

1. Upload profile picture
2. Update username, bio, and status
3. Change theme preferences and notifications

---

## 🤝 Contributing

We welcome community contributions! Here's how to get started:

```bash
# Fork the repo
# Create a branch
git checkout -b feature/YourFeature

# Make changes and commit
git commit -m "Add YourFeature"

# Push to your branch
git push origin feature/YourFeature

# Open a pull request
```

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👥 Contact & Support

- **Creator**: OmniBotX
- **GitHub**: [OmniBotX](https://github.com/OmniBotX)
- **Project Link**: [Z-Link on GitHub](https://github.com/OmniBotX/zlink)

Made with ❤️ by OmniBotX
