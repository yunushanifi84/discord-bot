const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = {
  subCommand: "bot.mesaj",
  hasApp: false,
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    const mongoose = client.database;
    const userbotSchema = client.databaseSchemas.userbotSchema;

    const ucret = 200;
    if (mongoose.connection.models["Kullanici-data"]) {
      delete mongoose.connection.models["Kullanici-data"];
    }
    await interaction.deferReply();
    const { options, guild } = interaction;
    const hedef = options.getUser("hedef");
    const member = guild.members.cache.get(hedef.id);
    const gonderilecekmesaj = options.getString("mesaj");
    const User = mongoose.model("Kullanici-data", userbotSchema);
    const userid = interaction.member.id;

    try {
      let user = await User.findOne({ id: userid });
      if (!user) {
        const kayitembed = new EmbedBuilder()
          .setTitle("Lütfen önce kayıt olunuz.")
          .setColor("LightGrey");
        return interaction.editReply({ embeds: [kayitembed] });
      }
      if (ucret > user.money) {
        const parayok = new EmbedBuilder()
          .setTitle("Yeterli paranız bulunmamakta...")
          .setColor("Orange");
        return interaction.editReply({ embeds: [parayok] });
      }
      user.money -= ucret;
      await member.send(gonderilecekmesaj);
      await user.save();
      const sucEmbed = new EmbedBuilder()
        .setTitle("**İŞLEM BAŞARILI**")
        .addFields([
          { name: "Gönderilen mesaj", value: `${gonderilecekmesaj}` },
          { name: "gönderilen kişi", value: `${member.displayName}` },
          { name: "Kalan para", value: `200 ücret alındı.. [${user.money}]` },
        ])
        .setColor("Green");
      interaction.editReply({ embeds: [sucEmbed], ephemeral: true });
    } catch (err) {
      console.log(err);
      await interaction.editReply({
        content: "Bir hatayla karşılaşıldı",
        ephemeral: true,
      });
    }
  },
};
