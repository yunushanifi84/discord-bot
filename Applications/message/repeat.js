const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  ContextMenuCommandInteraction,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("Tekrarla")
    .setType(ApplicationCommandType.Message),
  hasESub: false,
  hasApp: true,
  displayName: "Tekrarla",
  /**
   *
   * @param {ContextMenuCommandInteraction} interaction
   */
  async execute(interaction) {
    const message = interaction.targetMessage.content;
    return interaction.reply(message);
  },
};
