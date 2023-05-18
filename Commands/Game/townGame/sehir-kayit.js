const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  subCommand: "towngame.sehir-ekle",
  hasApp: false,
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    //Model kontrolü Açık modelleri sıfırlama
    mongoose = client.database;
    if (mongoose.connection.models["Towns"]) {
      delete mongoose.connection.models["Towns"];
    }

    if (mongoose.connection.models["Town-counts"]) {
      delete mongoose.connection.models["Town-counts"];
    }

    //gerekli fonksiyonların alımı
    const { townConvert } = require("../../../functions/townConvert");

    //gerekli metodların atanması

    const Towns = client.databaseSchemas.Towns;
    const townNumber = client.databaseSchemas.townNumber;
    await interaction.deferReply();
    //Yetki kontrolü
    if (interaction.member.id != client.config.adminid) {
      const errembed = new EmbedBuilder()
        .setTitle("Bunu Yapmaya Yetkiniz Yok!")
        .setColor("Red");
      return interaction.editReply({ embeds: [errembed] });
    }

    //gerekli verilerin çevirimi

    try {
      const sehirPlakasi = interaction.options.getString("sehir");
      const sehirismi = townConvert(sehirPlakasi);
      const ilce_ismi = interaction.options.getString("ilce-ismi");
      const nufusu = interaction.options.getNumber("ilce-nufusu");
      let townCounts = mongoose.model("Town-counts", townNumber);
      let townCount = await townCounts.findOne({ id: "Main" });

      townCount.TotalTowns++;
      console.log(townCount.TotalTowns);
      townCount.save();
      const Town = mongoose.model("Towns", Towns);
      let town = new Town({
        sehirId: sehirPlakasi,
        Sehir: sehirismi,
        isim: ilce_ismi,
        nufus: nufusu,
        TownRegID: townCount.TotalTowns,
      });
      town.save();

      const succEmbed = new EmbedBuilder()
        .setTitle("---Şehir Eklendi!---")
        .setColor("Blue")
        .setFields([
          { name: "Şehir ismi", value: `${sehirismi}` },
          { name: "İlçe ismi", value: `${ilce_ismi}` },
          { name: "Nüfusu", value: `${nufusu}` },
        ]);
      return interaction.editReply({ embeds: [succEmbed] });
    } catch (error) {
      const errEmbed = new EmbedBuilder()
        .setTitle("Bir hata oluştu konsola bakın..")
        .setColor("Red");
      return interaction.editReply({ embeds: [errEmbed] });
    }
  },
};
