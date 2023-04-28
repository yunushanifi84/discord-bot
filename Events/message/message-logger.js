const { Message, Client, EmbedBuilder } = require("discord.js");
const { logchannelid, loggerstate } = require("../../config.json");
module.exports = {
  name: "messageCreate",
  displayName: "MLogger",
  /**
   *
   * @param {Message} message
   * @param {Client} client
   */
  async execute(message, client) {
    if (message.author.bot) return;
    if (message.guild.id == "787718450206343218") return;
    if (loggerstate == "1") {
      const logchannel = client.channels.cache.get(logchannelid);
      const messageEmbed = new EmbedBuilder()
        .setTitle(`${message.guild.name}`)
        .addFields([
          { name: "Kanal", value: `${message.channel.name}` },
          { name: "Söyleyen kişi:", value: `${message.author.username}` },
          { name: "Söylenen Mesaj:", value: `${message.content}` },
        ]);
      logchannel.send({ embeds: [messageEmbed] });
    }
  },
};
