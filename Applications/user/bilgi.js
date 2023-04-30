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
  async execute(interaction, client) {
    const mongoose = client.database;

    ////////////////////////////////////////////////////////////////////////
    const userbotSchema = new mongoose.Schema({
      id: String,
      money: { type: Number, default: 0 },
      nextPrize: { type: Date, default: Date.now },
      DisplayName: String,
    });
    ////////////////////////////////////////////////////////////////////////
    if (mongoose.connection.models["Kullanici-data"]) {
      delete mongoose.connection.models["Kullanici-data"];
    }
    const user = interaction.targetUser;
    const userid = user.id;
    const User = mongoose.model("Kullanici-data", userbotSchema);
    try {
      let kullanici = await User.findOne({ id: userid });

      if (!kullanici) {
        const kayitembed = new EmbedBuilder()
          .setTitle("Lütfen önce kayıt olunuz.")
          .setColor("LightGrey");
        return interaction.reply({ embeds: [kayitembed] });
      }
      const succEmbed = new EmbedBuilder()
        .setTitle("Kullanıcı Bilgisi")
        .setFields([
          { name: "Kullanıcı Adı", value: `${user.username}` },
          { name: "Kullanıcı İd", value: `${user.id}` },
          { name: "Parası", value: `${user.status}` },
        ])
        .setColor("DarkGreen");
      return interaction.reply({ embeds: [succEmbed] });
    } catch (error) {
      console.error(error);
      const errembed = new EmbedBuilder()
        .setTitle(
          "Bir hatayla karşılaşıldı lütfen daha sonra tekrar deneyiniz."
        )
        .setColor("Red");
      interaction.reply({ embeds: [errembed] });
    }
  },
};
