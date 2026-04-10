# 💬 Socket Chat App

A simple **real-time chat application** built with Node.js, Express, and Socket.IO. Multiple clients can connect and exchange messages instantly through a clean browser-based UI.

---

## 🚀 Features

- 🔗 Supports multiple client connections
- ⚡ Real-time bidirectional messaging via WebSockets
- 🧵 Event-driven, non-blocking architecture
- 🖥️ Browser-based frontend — no installation needed for clients
- 📡 Powered by Socket.IO over HTTP

---

## 🛠️ Technologies Used

- **Runtime**: Node.js
- **Server framework**: Express
- **WebSocket library**: Socket.IO
- **Frontend**: Vanilla HTML, CSS, JavaScript

---

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/RajdeepChoudhury/Socket-Chat-App.git
cd Socket-Chat-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npm run start
```

### 4. Open the app

Navigate to `http://localhost:3000` in your browser. Open multiple tabs to simulate multiple users.

---

## 📌 Code Overview

1. The Express server serves the frontend from the `public/` directory.
2. On page load, the client connects to the server via Socket.IO.
3. When a user sends a message, it's emitted to the server as a `chatMessage` event.
4. The server broadcasts the message to all other connected clients.
5. Each client renders incoming messages in real time.

---

## ⚠️ Limitations

- No persistent usernames or authentication
- No encryption (not secure for production)
- No message history
- Single chat room only

---

## 🔮 Future Improvements

- ✅ Persistent usernames / user sessions
- 🔐 Implement encryption (SSL/TLS)
- 💬 Private messaging support
- 📁 Store chat history
- 🏠 Multiple chat rooms

---

## 🤝 Contributing

Feel free to fork this project and improve it. Pull requests are welcome!

---

## 👨‍💻 Author

Built as a lightweight real-time chat server using Node.js and Socket.IO.
