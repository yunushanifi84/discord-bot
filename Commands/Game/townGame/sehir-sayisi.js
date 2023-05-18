const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  subCommand: "towngame.sehir-sayisi",
  hasApp: false,
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const mongoose = client.database;
    //Model kontrolü Açık modelleri sıfırlama
    if (mongoose.connection.models["Town-counts"]) {
      delete mongoose.connection.models["Town-counts"];
    }
    //Schema tanımlama
    try {
      const townNumber = client.databaseSchemas.townNumber;
      const Towns = client.databaseSchemas.Towns;
      //Model tanımlama
      const townCounts = mongoose.model("Town-counts", townNumber);
      const Town = mongoose.model("Towns", Towns);
      let townCount = await townCounts.findOne({ id: "Main" });
      let town = await Town.findOne({ TownRegID: townCount.TotalTowns });
      if (!town) {
        const errembed = new EmbedBuilder()
          .setTitle("Boş şehir nesnesi döndü.")
          .setColor("Red");
        return interaction.reply({ embeds: [errembed], ephemeral: true });
      }
      const succEmbed = new EmbedBuilder()
        .setTitle(`Kayıt edilen şehir sayısı : ${townCount.TotalTowns}`)
        .setFields([
          { name: "Son kayıt edilen şehir", value: `${town.Sehir}` },
          { name: "İlçe ismi", value: `${town.isim}` },
          { name: "Nüfüsu", value: `${town.nufus}` },
        ])
        .setColor("Blue");
      return interaction.reply({ embeds: [succEmbed] });
    } catch (err) {
      console.log(err);
      const errembed = new EmbedBuilder()
        .setTitle("Bir hata ile karşılaşıldı bot konsoluna bakın.")
        .setColor("Red");
      return interaction.reply({ embeds: [errembed], ephemeral: true });
    }
  },
};
