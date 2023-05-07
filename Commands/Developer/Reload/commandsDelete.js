const {
  SlashCommandBuilder,
  EmbedBuilder,
  ChatInputCommandInteraction,
  PermissionFlagsBits,
  Client,
} = require("discord.js");

module.exports = {
  subCommand: "reload.commands-delete",
  hasApp: false,
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   *
   */
  async execute(interaction, client) {
    const {
      deleteCommands,
    } = require("../../../handlers/Delete-command-handler");
    try {
      deleteCommands(client);
      const succEmbed = new EmbedBuilder()
        .setTitle("Komutlar başarıyla silindi")
        .setColor("Green");
      return interaction.reply({ embeds: [succEmbed] });
    } catch (error) {
      console.log(error);
    }
  },
};
