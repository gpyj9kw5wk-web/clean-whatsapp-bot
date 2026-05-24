const { setStatus, addMessage } =
require("../routes/dashboard");
const {
  default: makeWASocket,
  useMultiFileAuthState
} = require("@whiskeysockets/baileys");

const pino = require("pino");
const config = require("../config");

let sock;

async function startBot() {

  const { state, saveCreds } =
    await useMultiFileAuthState("./session");

  sock = makeWASocket({
    auth: state,
    logger: pino({ level: "silent" })
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (u) => {
    if (u.connection === "open") setStatus("ONLINE 🟢");
addMessage("Bot Connected");
  });

  sock.ev.on("messages.upsert", async ({ messages }) => {

    const m = messages[0];
    if (!m.message) return;

    const text =
      m.message.conversation ||
      m.message.extendedTextMessage?.text || "";

    if (text === ".ping") {
      await sock.sendMessage(m.key.remoteJid, {
        text: "pong 🟢"
      });
    }

    if (text === ".owner") {
      await sock.sendMessage(m.key.remoteJid, {
        text: config.OWNER_NUMBER
      });
    }
if (text === ".ping") {
  addMessage(".ping command used");

  await sock.sendMessage(m.key.remoteJid, {
    text: "pong 🟢"
  });
}
  });
  const { setStatus } = require("../routes/dashboard");if (u.connection === "open") {
  setStatus("ONLINE 🟢");
}

  return sock;
}

module.exports = startBot;
