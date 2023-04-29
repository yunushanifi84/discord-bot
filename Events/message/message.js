const { Message } = require("discord.js");

module.exports = {
  name: "messageCreate",
  displayName: "Message",
  /**
   *
   * @param {Message} message
   */
  async execute(message) {
    if (message.author.bot) return;
    if (message.content.toLowerCase() == "naber aga") {
      message.reply(`İyiyim Senden naber ${message.member.displayName}`);
    }

    if (message.content.toLowerCase() == "sa") {
      message.react("🇦");
      message.react("🇸");
    }
  },
};
