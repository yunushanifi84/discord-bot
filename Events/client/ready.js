const { loadCommands } = require("../../handlers/commandHandler");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log("Bot başarıyla bağlandı");

    loadCommands(client);
  },
};
