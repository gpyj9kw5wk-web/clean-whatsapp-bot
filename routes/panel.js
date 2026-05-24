const express = require("express");
const router = express.Router();

let status = "OFFLINE";

router.get("/", (req, res) => {

  res.send(`
  <html>
  <body style="background:#111;color:white;font-family:sans-serif;padding:20px">
    <h1>BOT PANEL</h1>
    <p>Status: ${status}</p>
  </body>
  </html>
  `);

});

function setStatus(s) {
  status = s;
}

module.exports = { router, setStatus };
