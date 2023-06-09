const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  hasESub: true,
  hasApp: false,
  data: new SlashCommandBuilder()
    .setName("towngame")
    .setDescription("Bir şehir oyunu tasarlamak için adımlar!!")
    .addSubcommand((options) =>
      options
        .setName("sehir-ekle")
        .setDescription("Veritabanına şehir kaydı..")
        .addStringOption((option) =>
          option
            .setName("sehir")
            .setDescription("İlçenin bulunduğu şehir")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("ilce-ismi")
            .setDescription("Kaydedeceğiniz ilçenin ismi")
            .setRequired(true)
        )
        .addNumberOption((option) =>
          option
            .setName("ilce-nufusu")
            .setDescription("Kaydeteceğiniz ilçenin nufusu")
            .setRequired(true)
        )
    )
    .addSubcommand((options) =>
      options
        .setName("sehir-sayisi")
        .setDescription("Veritabanındaki şehir sayısı hakkında bilgi verir.")
    )
    .addSubcommand((options) =>
      options
        .setName("tum-sehirler")
        .setDescription("Tüm şehirleri gösteren bir liste")
        .addStringOption((option) =>
          option
            .setName("sehir")
            .setDescription("Hedef Şehir")
            .setRequired(true)
        )
    ),
};
