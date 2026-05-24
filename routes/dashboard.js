const express = require("express");
const router = express.Router();

let botStatus = "OFFLINE";
let messages = [];

function setStatus(status) {
  botStatus = status;
}

function addMessage(msg) {
  messages.push(msg);
  if (messages.length > 50) messages.shift();
}

router.get("/", (req, res) => {

  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>WhatsApp Bot Panel</title>

<style>
body {
  margin: 0;
  font-family: Arial;
  background: #0b141a;
  color: white;
  display: flex;
  height: 100vh;
}

/* SIDEBAR */
.sidebar {
  width: 25%;
  background: #111b21;
  padding: 15px;
}

/* MAIN CHAT AREA */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* HEADER */
.header {
  background: #202c33;
  padding: 15px;
  font-weight: bold;
}

/* STATUS CARD */
.card {
  background: #1f2c33;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

/* CHAT BOX */
.chat {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
}

/* MESSAGE */
.msg {
  background: #005c4b;
  padding: 8px 10px;
  margin: 5px 0;
  border-radius: 8px;
  width: fit-content;
}

/* FOOTER */
.footer {
  padding: 10px;
  background: #202c33;
  text-align: center;
}
</style>

</head>

<body>

<!-- SIDEBAR -->
<div class="sidebar">

  <div class="card">
    <h3>Bot Status</h3>
    <p>${botStatus}</p>
  </div>

  <div class="card">
    <h3>Controls</h3>
    <button onclick="location.reload()">Refresh</button>
  </div>

</div>

<!-- MAIN -->
<div class="main">

  <div class="header">
    WHATSAPP BOT DASHBOARD
  </div>

  <div class="chat">

    ${messages.map(m => `<div class="msg">${m}</div>`).join("")}

  </div>

  <div class="footer">
    Live Bot Panel • Render Hosting
  </div>

</div>

</body>
</html>
  `);

});

module.exports = { router, setStatus, addMessage };
