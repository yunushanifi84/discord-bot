const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
  Client,
} = require("discord.js");

const { loadCommands } = require("../../handlers/commandHandler");
const { loadEvents } = require("../../handlers/eventHandler");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Botu yeniler")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) =>
      options.setName("events").setDescription("Eventleri yeniler")
    )
    .addSubcommand((options) =>
      options.setName("commands").setDescription("Komutları yeniler")
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    const subCommand = interaction.options.getSubcommand();

    switch (subCommand) {
      case "event":
        {
          for (const [key, value] of client.events)
            client.removeListener(`${key}`, value, true);
          loadEvents(client);
          interaction.reply("Eventler yenilendi.");
        }
        break;

      case "command":
        {
          loadCommands(client);
          interaction.reply("Komutlar yenilendi");
        }
        break;
    }
  },
};
