const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("A ping command for bot."),
  hasESub: false,
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction) {
    interaction.reply("Pong!");
  },
};
