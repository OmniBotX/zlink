# Z-Link Chat Application 🚀

A feature-rich real-time chat application built with MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO. Experience seamless communication with modern UI and robust functionality.

![Z-Link Preview](preview.png)

## ✨ Key Features

### 🔒 Authentication & Authorization

- **Secure User Registration**: Email and password-based signup with validation
- **JWT Authentication**: Secure token-based authentication system
- **Protected Routes**: Authorized access to chat features
- **Remember Me**: Persistent login sessions
- **Password Security**: Encrypted storage using bcrypt

### 💬 Real-time Messaging

- **Instant Chat**: Real-time message delivery using Socket.IO
- **Message Status**: Read/unread indicators
- **Typing Indicators**: See when others are typing
- **Online Status**: Real-time user presence detection
- **Message History**: Persistent chat history with pagination
- **Media Sharing**: Support for images and emojis
- **Message Actions**: Edit, delete, and react to messages

### 👤 User Profile Features

- **Custom Avatars**: Upload and manage profile pictures
- **Profile Customization**: Edit username, bio, and status
- **Cloud Storage**: Cloudinary integration for media storage
- **User Settings**: Customize notification preferences
- **User Search**: Find and connect with other users

### 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly on desktop and mobile
- **Theme Options**:
  - Light/Dark mode toggle
  - Custom color schemes
  - Persistent theme preferences
- **Modern Interface**:
  - Clean and intuitive design
  - Smooth animations
  - Loading states and skeletons
  - Toast notifications

## 🛠️ Technical Implementation

### Frontend Architecture

- **React.js + Vite**: Lightning-fast development and build times
- **State Management**:
  - Zustand for global state
  - Context API for theme management
- **Styling**:
  - Tailwind CSS for utility-first styling
  - DaisyUI for pre-built components
- **Real-time Updates**: Socket.IO client integration
- **API Integration**: Axios for RESTful requests
- **Routing**: React Router v7 with protected routes

### Backend Infrastructure

- **Node.js & Express**: RESTful API architecture
- **Database**:
  - MongoDB with Mongoose ODM
  - Efficient data modeling
  - Indexed queries for performance
- **Real-time Engine**:
  - Socket.IO for bi-directional communication
  - Event-based message handling
- **Security**:
  - JWT token authentication
  - HTTP-only cookies
  - CORS protection
  - Rate limiting
- **File Handling**:
  - Cloudinary integration
  - Image optimization
  - Secure file uploads

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Cloudinary account

### Environment Setup

Create `.env` file in backend directory:

```env
PORT=5001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Installation Steps

1. **Clone and Install**

```sh
git clone https://github.com/yourusername/zlink.git
cd zlink

# Backend setup
cd backend
npm install

# Frontend setup
cd ../frontend
npm install
```

2. **Start Development Servers**

```sh
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

## 📱 Usage Examples

### Authentication Flow

1. Register with email/password
2. Login with credentials
3. Access protected chat features

### Messaging

1. Select a contact
2. Type message in chat input
3. Send text or upload images
4. View message status
5. React to messages

### Profile Management

1. Upload profile picture
2. Edit profile information
3. Set online/offline status
4. Customize app settings

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Contact & Support

- Creator: [Your Name]
- Email: [your.email@example.com]
- Twitter: [@yourusername]
- Project Link: [https://github.com/yourusername/zlink]

---

Made with ❤️ by OmniBotX
