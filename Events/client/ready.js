const { loadCommands } = require("../../handlers/commandHandler");
const { Client, ActivityType } = require("discord.js");
module.exports = {
  name: "ready",
  displayName: "Ready",
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
    const mongoose = require("mongoose");
    mongoose
      .connect(client.config.databaseUrl, {})
      .then(() => console.log("Veritabanı Bağlantısı Sağlandı"));

    client.database = mongoose;
    //burada şema özelliğini de tanımlıyoruz ki boş değer atamasın
    client.databaseSchemas = {};
  },
};
