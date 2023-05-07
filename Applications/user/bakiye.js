const {
  ContextMenuCommandBuilder,
  ContextMenuCommandInteraction,
  EmbedBuilder,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("Bakiye bilgi")
    .setType(ApplicationCommandType.User),
  hasESub: false,
  hasApp: true,
  displayName: "Bakiye Göster",
  /**
   *
   * @param {ContextMenuCommandInteraction} interaction
   */
  async execute(interaction, client) {
    const mongoose = client.database;
    const userbotSchema = client.databaseSchemas.userbotSchema;

    if (mongoose.connection.models["Kullanici-data"]) {
      delete mongoose.connection.models["Kullanici-data"];
    }
    let userid = interaction.targetUser.id;
    if (!userid) {
      userid = interaction.member.id;
    }
    const usersubject = interaction.guild.members.cache.get(userid);
    const User = mongoose.model("Kullanici-data", userbotSchema);
    const errembed = new EmbedBuilder()
      .setTitle("Bir hatayla karşılaşıldı lütfen daha sonra tekrar deneyiniz.")
      .setColor("Red");
    try {
      let user = await User.findOne({ id: userid });
      const succembed = new EmbedBuilder()
        .setTitle(
          `${usersubject.displayName}  kişisinin Bakiyesi:${user.money}`
        )
        .setColor("DarkGreen");
      const kayitembed = new EmbedBuilder()
        .setTitle("Lütfen önce kayıt olunuz.")
        .setColor("LightGrey");
      if (!user) {
        return interaction.reply({ embeds: [kayitembed] });
      }
      user.DisplayName = usersubject.nickname;
      user.save();
      await interaction.reply({ embeds: [succembed] });
    } catch (error) {
      console.error(error);
      interaction.reply({ embeds: [errembed] });
    }
  },
};
