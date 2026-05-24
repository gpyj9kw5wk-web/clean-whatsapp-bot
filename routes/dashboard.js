const express = require("express");
const router = express.Router();

let botStatus = "OFFLINE";

function setStatus(status) {
  botStatus = status;
}

router.get("/", (req, res) => {

  res.send(`
  <html>
  <body style="background:#0f172a;color:white;font-family:sans-serif;padding:20px">

    <h1>BOT DASHBOARD</h1>

    <h3>Status: ${botStatus}</h3>

    <button onclick="fetch('/api/restart')">Restart Bot</button>

  </body>
  </html>
  `);

});

module.exports = { router, setStatus };
