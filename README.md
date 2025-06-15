# 💬 MERN Real-Time Chat App

A fully functional **Real-Time Chat Application** built with the **MERN Stack (MongoDB, Express, React, Node.js)** and **Socket.IO**. This app features **user registration, login authentication**, **JWT-based authorization**, and **business logic-based role management (Admin, User, etc.)** to control chat permissions and access.

---

## 🚀 Features

- ✅ User Registration & Login (JWT Authentication)
- 🔐 Authorization with Role-Based Access Control
- 💬 Real-Time One-to-One and Group Chat
- 🟢 Online/Offline Status Indicator
- 📨 Typing Indicator using Socket.IO
- 📥 Persisted Chat History (MongoDB)
- 🧠 Business Logic for Roles (e.g., Admin can view all chats, Users can only view their own)
- 🔔 Push Notifications (Socket Events)
- 👥 Search and Add Contacts
- 🧹 Unread Message Count & Auto Scroll
- 🔄 Auto-Reconnect on Socket Disconnection

---

## 📁 Tech Stack

### 🖥️ Frontend:
- React.js (with Context API or Redux)
- Tailwind CSS / Material UI
- Socket.IO Client
- Axios

### 🔧 Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.IO Server
- JSON Web Tokens (JWT)
- Bcrypt for password hashing

---

## 🔐 Authentication & Authorization

### 🔒 Authentication:
- Register users using email & password
- Login system with JWT token generation
- JWT token stored in HTTP-only cookies or localStorage

### 🛂 Authorization:
- Role-Based Access: `admin`, `user`, `moderator` etc.

#### Admins can:
- Monitor all chats
- Ban users

#### Users can:
- Chat with added friends
- Edit their profile

> ⚠️ All protected API routes use middleware to verify tokens and roles.

---

## 🧠 Business Logic Highlights

- **Admins**:
  - View/delete any chat
  - Manage user roles and permissions

- **Users**:
  - Chat only with connected users
  - Cannot access admin APIs

- **Moderators** *(optional)*:
  - Mute/unmute chats
  - Limit spam or flood

---

## 🧱 Folder Structure

```📦 root
├── 📂 backend # Server-side application (Node.js + Express + Socket.IO)
│ ├── 📂 config # Configuration files (e.g., DB connection, constants)
│ ├── 📂 controllers # Request handlers for routes
│ ├── 📂 middleware # Express middleware (e.g., auth, error handling)
│ ├── 📂 models # Mongoose schemas and models
│ ├── 📂 routes # API route definitions
│ ├── 📂 socket # Socket.IO event handling
│ ├── 📁 .env # Environment variables
│ ├── 📄 apiTesting.http # HTTP requests for API testing (REST Client / Thunder Client)
│ ├── 📄 index.js # Server entry point
│ ├── 📄 package.json # Backend dependencies and scripts
│ └── 📄 package-lock.json # Backend dependency lock file
│
├── 📂 frontend # Client-side application (React + Tailwind CSS)
│ ├── 📂 node_modules # Frontend dependencies
│ ├── 📂 public # Static assets like index.html
│ ├── 📂 src # React components, pages, context, utils
│ ├── 📄 package.json # Frontend dependencies and scripts
│ ├── 📄 package-lock.json # Frontend dependency lock file
│ ├── 📄 tailwind.config.js # Tailwind CSS configuration
│
├── 📄 .gitignore # Ignored files and folders for Git
├── 📄 README.md # Project documentation (Root level)

```


## ✨ Acknowledgments

This project was made possible with the help of the following tools, libraries, and documentation:

- 🔌 [Socket.IO](https://socket.io/)  
  Enabling real-time, bi-directional communication between client and server.

- 🖥️ [MERN Stack Documentation](https://www.mongodb.com/mern-stack)  
  Comprehensive guide to building full-stack applications with MongoDB, Express, React, and Node.js.

- 🔐 [JWT Documentation](https://jwt.io/)  
  JSON Web Tokens for secure user authentication and authorization.

---

Thanks to the open-source community for maintaining these powerful tools and frameworks!


