const express = require("express");
const router = express.Router();
const config = require("../config");

router.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (
    username === config.ADMIN_USERNAME &&
    password === config.ADMIN_PASSWORD
  ) {
    return res.json({ success: true });
  }

  res.json({ success: false });

});

module.exports = router;
