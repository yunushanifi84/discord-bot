const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  subCommand: "towngame.tum-sehirler",
  hasApp: false,
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    await interaction.deferReply();
    //database tanımlama
    mongoose = client.database;
    //modelleri tanımlama
    const Towns = client.databaseSchemas.Towns;
    const townNumber = client.databaseSchemas.townNumber;
    //modelleri sıfırlama
    if (mongoose.connection.models["Towns"])
      delete mongoose.connection.models["Towns"];

    if (mongoose.connection.models["Town-counts"])
      delete mongoose.connection.models["Town-counts"];
    //model kullanımı
    const townCounts = mongoose.model("Town-counts", townNumber);
    const townCount = await townCounts.findOne({ id: "Main" });
    const Town = mongoose.model("Towns", Towns);
    //Değişken atama
    const sehir_ismi = interaction.options.getString("sehir");
    let townlist = new EmbedBuilder()
      .setTitle(`---Şehir listesi ----|${sehir_ismi}|`)
      .setColor("DarkGold");
    if (!townCount)
      return interaction.editReply("Bir hata ile karşılaşıldı konsola bakın.");

    let towns = await Town.find({ Sehir: sehir_ismi });

    towns.forEach((town) => {
      townlist.addFields([
        { name: "ismi", value: `${town.isim}`, inline: true },
      ]);
      if (!town) {
        const errEmbed = new EmbedBuilder()
          .setTitle("Şehir ismi bulunamadı!")
          .setColor("Red");
        return interaction.editReply({ embeds: [errEmbed] });
      }
    });
    console.log(townlist);
    return interaction.editReply({ embeds: [townlist] });
  },
};
