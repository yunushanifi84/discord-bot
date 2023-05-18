const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  displayName: "Slash Commands",
  /**
   *
   * @param { ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    try {
      const command = client.commands.get(interaction.commandName);
      if (!command) {
        return interaction.reply({
          content: "Görümüşe göre bu komutun süresi bitmiş.",
          ephemeral: true,
        });
      }
      if (command.developer && interaction.user.id !== client.config.adminid)
        return interaction.reply("Bu komut Sadece Geliştiriciye özel.");

      const subCommand = interaction.options.getSubcommand(false);
      if (subCommand && command.hasESub) {
        const subCommandFile = client.subCommands.get(
          `${interaction.commandName}.${subCommand}`
        );
        if (!subCommandFile)
          return interaction.reply({
            content: "Görümüşe göre bu alt komutun süresi bitmiş.",
            ephemeral: true,
          });
        else subCommandFile.execute(interaction, client);
      } else command.execute(interaction, client);
    } catch (error) {
      console.log(error);
      interaction.reply("Bu komutun süresi bitmiş");
    }
  },
};
