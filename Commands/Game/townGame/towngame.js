const { SlashCommandBuilder } = require("discord.js");

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
            .addChoices(
              { name: "Adana", value: "01" },
              { name: "Adıyaman", value: "02" },
              { name: "Afyon", value: "03" },
              { name: "Ağrı", value: "04" },
              { name: "Amasya", value: "05" },
              { name: "Ankara", value: "06" }
            )
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
    ),
};
