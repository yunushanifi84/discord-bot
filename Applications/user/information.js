const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  ContextMenuCommandInteraction,
  EmbedBuilder,
  User,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("Kullanıcı Bilgisi")
    .setType(ApplicationCommandType.User),
  hasESub: false,
  hasApp: true,
  displayName: "Kullanıcı bilgisi",
  /**
   *
   * @param {ContextMenuCommandInteraction} interaction
   */
  async execute(interaction) {
    const user = interaction.targetUser;
    const succEmbed = new EmbedBuilder()
      .setTitle("KUllanıcı Bilgisi")
      .setFields([
        { name: "Kullanıcı Adı", value: `${user.username}` },
        { name: "Kullanıcı İd", value: `${user.id}` },
        { name: "Durumu", value: `${user.status}` },
      ])
      .setColor("DarkGreen");
    return interaction.reply({ embeds: [succEmbed] });
  },
};
