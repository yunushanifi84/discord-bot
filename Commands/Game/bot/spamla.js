const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = {
  subCommand: "bot.spamla",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
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

    //Model kontorlü
    if (mongoose.connection.models["Kullanici-data"]) {
      delete mongoose.connection.models["Kullanici-data"];
    }
    //etkileşimin başarız olmasını engelleme
    await interaction.deferReply();
    //çıktıları almak için methodu aktarma
    const { options, guild } = interaction;
    const hedef = options.getUser("hedef");
    const mesaj = options.getString("mesaj");
    const miktar = options.getNumber("miktar");
    const hedefnesne = guild.members.cache.get(hedef.id);
    const User = mongoose.model("Kullanici-data", userbotSchema);
    //db kontrolü
    const userid = interaction.member.id;
    try {
      const user = await User.findOne({ id: userid });
      if (!user) {
        const kayitembed = new EmbedBuilder()
          .setTitle("Lütfen önce kayıt olunuz.")
          .setColor("LightGrey");
        return interaction.editReply({ embeds: [kayitembed] });
      }
      //para kontrolü
      const ucret = miktar * 100;
      if (ucret > user.money) {
        const parayok = new EmbedBuilder()
          .setTitle("Yeterli paranız bulunmamakta...")
          .setColor("Orange");
        return interaction.editReply({ embeds: [parayok] });
      }
      user.money -= ucret;

      const succembed = new EmbedBuilder()
        .setTitle("Mesaj gönderiliyor....")
        .setFields([
          { name: "Mesajın içeriği", value: `${mesaj}` },
          { name: "Mesaj adeti", value: `${miktar}` },
          { name: "Bedeli", value: `${ucret} puan kullanıldı.` },
          { name: "Kalan para", value: `${user.money}` },
        ])
        .setColor("Green");
      await interaction.editReply({ embeds: [succembed], ephemeral: true });
      //mesaj gönderimi..
      for (let i = 0; i < miktar; i++) {
        await hedefnesne.send(mesaj);
      }
      await user.save();
    } catch (err) {
      console.log(err);
      const errEmbed = new EmbedBuilder()
        .setTitle("Bir hatayla karşılaşıldı..")
        .setColor("Red");
      await interaction.editReply({ embeds: [errEmbed], ephemeral: true });
    }
  },
};
