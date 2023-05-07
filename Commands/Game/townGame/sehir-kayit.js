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
    const { townConvert } = require("../../../functions/townConvert");
    mongoose = client.database;
    townNumber = client.databaseSchemas.townNumber;
    await interaction.deferReply();
    if (interaction.member.id != client.config.adminid) {
      const errembed = new EmbedBuilder()
        .setTitle("Bunu Yapmaya Yetkiniz Yok!")
        .setColor("Red");
      return interaction.editReply({ embeds: [errembed] });
    }
    const sehirPlakasi = interaction.options.getString("sehir");
    const sehirismi = townConvert(sehirPlakasi);
    const ilce_ismi = interaction.options.getString("ilce-ismi");
    const nufus = interaction.options.getNumber("ilce-nufusu");

    const Town = client.databaseModels.Town;
  },
};