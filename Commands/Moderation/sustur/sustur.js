const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sustur")
    .setDescription("Klasik susturma komutu")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addSubcommand((options) =>
      options
        .setName("susturma")
        .setDescription("Belirtiğiiz kişiyi susturur")
        .addUserOption((option) =>
          option
            .setName("hedef")
            .setDescription("Susturmak istediğiniz kişi")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("sure")
            .setDescription("Susturulacağı süre")
            .setRequired(true)
        )

        .addStringOption((option) =>
          option.setName("sebep").setDescription("Susturulma nedeni.")
        )
    )
    .addSubcommand((options) =>
      options
        .setName("susturma-kaldir")
        .setDescription("Susturmayı Kaldırır.")
        .addUserOption((option) =>
          option
            .setName("hedef")
            .setDescription("Susturulmasının kaldırılmasını istediğiniz kişi.")
            .setRequired(true)
        )
    ),
  hasESub: true,
};
