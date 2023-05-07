const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

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
    )
    .addSubcommand((options) =>
      options.setName("commands-delete").setDescription("Komutları siler.")
    ),
  hasESub: true,
};
