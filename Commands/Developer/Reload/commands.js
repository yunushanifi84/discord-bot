const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
} = require("discord.js");
const { loadCommands } = require("../../../handlers/commandHandler");
module.exports = {
  subCommand: "reload.commands",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    try {
      loadCommands(client);
      const succEmbed = new EmbedBuilder()
        .setTitle("Komutlar Yenilendi  ✅")
        .setColor("Green");
      return interaction.reply({ embeds: [succEmbed] });
    } catch (error) {
      console.error(error);
      const errEmbed = new EmbedBuilder()
        .setTitle("Bir hatayla karşılaşıldı.")
        .setColor("Red");
      return interaction.reply({ embeds: [errEmbed] });
    }
  },
};
