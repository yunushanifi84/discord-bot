const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Client,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("test-sayi-arttir"),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {*} client
   */
  async exectue(interaction, client) {},
};
