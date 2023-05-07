const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
} = require("discord.js");
const { loadEvents } = require("../../../handlers/eventHandler");
module.exports = {
  subCommand: "reload.events",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    for (const [key, value] of client.events)
      client.removeListener(`${key}`, value, true);
    loadEvents(client);
    const succEmbed = new EmbedBuilder().setTitle("Eventler Yenilendi.  ✅");
    return interaction.reply({ embeds: [succEmbed] });
  },
};
