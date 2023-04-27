const { loadCommands } = require("../../handlers/commandHandler");
const { Client, ActivityType } = require("discord.js");
module.exports = {
  name: "ready",
  once: true,
  /**
   *
   * @param {Client} client
   */
  execute(client) {
    console.log("Bot başarıyla bağlandı");
    loadCommands(client);

    ////////////////////////////////////////////////////////////////////////////////////
    //Bot aktivitesi ayarı
    client.user.setPresence({
      activities: [
        { name: "Aga Test Ediliyor...", type: ActivityType.Listening },
      ],
      status: "online",
    });
    ////////////////////////////////////////////////////////////////////////////////////
  },
};
