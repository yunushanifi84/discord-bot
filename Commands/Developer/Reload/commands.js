const { ChatInputCommandInteraction, Client } = require("discord.js");
const { loadCommands } = require("../../../handlers/commandHandler");
module.exports = {
  subCommand: "reload.commands",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    loadCommands(client);
    interaction.reply("Komutlar yenilendi");
  },
};
