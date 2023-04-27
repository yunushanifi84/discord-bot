const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param { ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: "Görümüşe göre bu komutun süresi bitmiş.",
        ephemeral: true,
      });
    if (command.developer && interaction.user.id !== "718497288963620904")
      return interaction.reply("Bu komut Sadece Geliştiriciye özel.");
    command.execute(interaction, client);
  },
};
