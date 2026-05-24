const express = require("express");
const router = express.Router();

router.get("/restart", (req, res) => {

  console.log("Bot restart requested");

  res.json({ success: true, message: "Restart triggered" });

  process.exit(1); // Render auto-restarts service

});

module.exports = router;
