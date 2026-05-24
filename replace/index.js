const express = require("express");
const bodyParser = require("body-parser");

const startBot = require("./lib/bot");

const auth = require("./routes/auth");
const api = require("./routes/api");
const { router: dashboard, setStatus } =
  require("./routes/dashboard");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/auth", auth);
app.use("/api", api);
app.use("/", dashboard);

app.listen(PORT, () => {
  console.log("DASHBOARD RUNNING");
});

async function init() {

  const sock = await startBot();

  setStatus("ONLINE 🟢");

}

init();
