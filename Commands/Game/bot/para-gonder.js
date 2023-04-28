const {
  EmbedBuilder,
  ChatInputCommandInteraction,
  Client,
} = require("discord.js");

module.exports = {
  subCommand: "bot.para-gonder",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const mongoose = client.database;
    ///////////////////////////////////////////////////////////
    const userbotSchema = new mongoose.Schema({
      id: String,
      money: { type: Number, default: 0 },
      nextPrize: { type: Date, default: Date.now },
      DisplayName: String,
    });
    ///////////////////////////////////////////////////////////
    const { options } = interaction;

    if (mongoose.connection.models["Kullanici-data"]) {
      delete mongoose.connection.models["Kullanici-data"];
    }
    await interaction.deferReply();
    const userid = interaction.member.id;
    const User = mongoose.model("Kullanici-data", userbotSchema);
    const gonderilecekid = options.getUser("hedef").id;
    const gonderileceknesne =
      interaction.guild.members.cache.get(gonderilecekid);
    const miktar = options.getNumber("miktar");
    try {
      let user1 = await User.findOne({ id: userid });
      let user2 = await User.findOne({ id: gonderilecekid });
      if (!user1) {
        const kayitembed1 = new EmbedBuilder()
          .setTitle("Lütfen önce kayıt olunuz.")
          .setColor("LightGrey");
        return interaction.editReply({ embeds: [kayitembed1] });
      }
      if (!user2) {
        const kayitembed2 = new EmbedBuilder()
          .setTitle("Hedeflediğiniz kişi sisteme kayıtlı değil.")
          .setColor("LightGrey");
        return interaction.editReply({ embeds: [kayitembed2] });
      }
      user1.money -= miktar;
      user2.money += miktar;
      const succembed = new EmbedBuilder()
        .setTitle(`İşlem başarılı.`)
        .setFields([
          { name: "Gönderilen tutar:", value: `${miktar}` },
          {
            name: "Gönderilen kişi:",
            value: `${gonderileceknesne.displayName}`,
          },
        ])
        .setColor("DarkGreen");
      user1.save();
      user2.save();
      return interaction.editReply({ embeds: [succembed] });
    } catch (error) {
      console.error(error);
      const errembed = new EmbedBuilder()
        .setTitle(
          "Bir hatayla karşılaşıldı lütfen daha sonra tekrar deneyiniz."
        )
        .setColor("Red");
      interaction.editReply({ embeds: [errembed] });
    }
  },
};
