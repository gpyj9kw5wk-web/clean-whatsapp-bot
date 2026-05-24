const express = require("express");
const startBot = require("./lib/bot");
const { router, setStatus } = require("./routes/panel");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log("WEB PANEL RUNNING");
});

async function init() {
  const sock = await startBot();
  setStatus("ONLINE 🟢");
}

init();
