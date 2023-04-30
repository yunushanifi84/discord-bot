const {
  ChatInputCommandInteraction,
  ContextMenuCommandInteraction,
} = require("discord.js");

module.exports = {
  name: "interactionCreate",
  displayName: "Application Commands",
  /**
   *
   * @param { ContextMenuCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isContextMenuCommand()) return;
    const application = client.applications.get(interaction.commandName);
    if (!application) {
      return interaction.reply({
        content: "Görümüşe göre bu applikasyonun süresi bitmiş.",
        ephemeral: true,
      });
    }
    application.execute(interaction, client);
  },
};
