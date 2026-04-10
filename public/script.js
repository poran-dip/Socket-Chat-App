const socket = io();

const nameInput = document.getElementById("name");
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");

function sendMessage() {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  if (!name || !message) return;

  displayMessage("You", message);
  socket.emit("chatMessage", { name, message });

  messageInput.value = "";
}

socket.on("chatMessage", ({ name, message }) => {
  displayMessage(name, message);
});

function displayMessage(sender, message) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${message}`;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

messageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
