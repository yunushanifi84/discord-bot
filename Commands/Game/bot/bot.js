const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bot")
    .setDescription("Bakiyesel işlemler")
    .addSubcommand((options) =>
      options
        .setName("bakiye")
        .setDescription("Bot içi bakiyenizi görmenizi sağlar")
        .addUserOption((option) =>
          option
            .setName("hedef")
            .setDescription("Bakiyesini görmek istediğiniz kişi")
        )
    )
    .addSubcommand((options) =>
      options
        .setName("para-gonder")
        .setDescription("Seçtiğiniz kişiye istediğiniz kadar para gönderin!")
        .addUserOption((option) =>
          option
            .setName("hedef")
            .setDescription("Para göndermek istediğiniz kişi")
            .setRequired(true)
        )
        .addNumberOption((option) =>
          option
            .setName("miktar")
            .setDescription("Göndermek istediğiniz tutar.")
            .setRequired(true)
        )
    )
    .addSubcommand((options) =>
      options.setName("kayit").setDescription("Bota kayıt olmanızı sağlar.")
    )
    .addSubcommand((options) =>
      options
        .setName("mesaj")
        .setDescription("Para karşılığı belirtilen kişiye mesaj gönderir")
        .addUserOption((option) =>
          option
            .setName("hedef")
            .setDescription("Mesajı göndermek istediğiniz kişi")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("mesaj")
            .setDescription("Göndermek istediğiniz mesaj.")
            .setRequired(true)
        )
    )
    .addSubcommand((options) =>
      options
        .setName("odul-al")
        .setDescription("yarım saatte bir rastgele para kazanırsınız.")
    )
    .addSubcommand((options) =>
      options
        .setName("soyle")
        .setDescription("Botun söylemesini istediğiniz şeyi yazın.")
        .addStringOption((option) =>
          option
            .setName("mesaj")
            .setDescription("Söylenmesini istediğiniz mesaj.")
            .setRequired(true)
        )
    )
    .addSubcommand((options) =>
      options
        .setName("spamla")
        .setDescription("Belirttiğiniz kişiye belirttiğiniz kadar mesaj yollar")
        .addUserOption((option) =>
          option
            .setName("hedef")
            .setDescription("Mesaj göndermek istediğiniz kişi.")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("mesaj")
            .setDescription("Göndereceğiniz mesaj")
            .setRequired(true)
        )
        .addNumberOption((option) =>
          option
            .setName("miktar")
            .setDescription("Gönderteceğinz mesaj sayısı.")
            .setRequired(true)
        )
    )
    .addSubcommand((options) =>
      options
        .setName("sure-reset")
        .setDescription("Admin Komutudur ödül süresini resetler")
        .addUserOption((option) =>
          option
            .setName("hedef")
            .setDescription("Süresini sıfırlamak istediğiniz kişi.")
            .setRequired(true)
        )
    ),
  hasESub: true,
};
