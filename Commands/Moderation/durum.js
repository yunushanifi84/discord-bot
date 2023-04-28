const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  Client,
  EmbedBuilder,
  ActivityType,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("durum")
    .setDescription("Botun Durum özelliklerini değiştirebilmenizi sağlar.")
    .addStringOption((option) =>
      option
        .setName("durum-mesaji")
        .setDescription("Durumda gözükecek mesaj")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("durum-modu")
        .setDescription("Durumların modları")
        .setRequired(true)
        .addChoices(
          { name: "Çevrimiçi", value: "cevirimici" },
          { name: "Boşta", value: "bosta" },
          { name: "Meşgul etmeyin", value: "mesgul" },
          { name: "Görünmez", value: "gorunmez" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("aktivite-modu")
        .setDescription("Aktivite durum şekli.")
        .setRequired(true)
        .addChoices(
          { name: "Rekabet", value: "Competing" },
          { name: "Dinliyor", value: "Listening" },
          { name: "Oynuyor", value: "Playing" },
          { name: "İzliyor", value: "Watching" }
        )
    ),
  hasESub: false,
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */

  async execute(interaction, client) {
    const { options } = interaction;
    const yenidurum = options.getString("durum-mesaji");
    const durum_modu = options.getString("durum-modu");
    const aktivite_modu = options.getString("aktivite-modu");

    if (interaction.user.id != client.config.adminid) {
      return interaction.reply("Bu komutu kullanma yetkiniz yok.");
    }

    let durum_modu_converted = durum_modu;
    if (durum_modu == "cevirimici") {
      durum_modu_converted = "online";
    }
    if (durum_modu == "bosta") {
      durum_modu_converted = "idle";
    }
    if (durum_modu == "mesgul") {
      durum_modu_converted = "dnd";
    }
    if (durum_modu == "gorunmez") {
      durum_modu_converted = "invisible";
    }
    const errEmbed = new EmbedBuilder()
      .setDescription(
        "Birşeyler yanlış gitti. Lütfen daha sonra tekrar deneyiniz."
      )
      .setColor("Red");
    const succEmbed = new EmbedBuilder()
      .setTitle("Başarılı")
      .setFields(
        { name: "Durum:", value: yenidurum },
        { name: "Yeni Durum modu:", value: durum_modu },
        { name: "Yeni Aktivite modu:", value: aktivite_modu }
      )
      .setColor("Green")
      .setTimestamp();

    if (aktivite_modu == "Competing") {
      try {
        client.user.setPresence({
          activities: [{ name: yenidurum, type: ActivityType.Competing }],
          status: durum_modu_converted,
        });
        return interaction.reply({ embeds: [succEmbed] });
      } catch (err) {
        console.log(err);
        return interaction.reply({ embeds: [errEmbed] });
      }
    }
    if (aktivite_modu == "Listening") {
      try {
        client.user.setPresence({
          activities: [{ name: yenidurum, type: ActivityType.Listening }],
          status: durum_modu_converted,
        });
        return interaction.reply({ embeds: [succEmbed] });
      } catch (err) {
        console.log(err);
        return interaction.reply({ embeds: [errEmbed] });
      }
    }
    if (aktivite_modu == "Playing") {
      try {
        client.user.setPresence({
          activities: [{ name: yenidurum, type: ActivityType.Playing }],
          status: durum_modu_converted,
        });
        return interaction.reply({ embeds: [succEmbed] });
      } catch (err) {
        console.log(err);
        return interaction.reply({ embeds: [errEmbed] });
      }
    }
    if (aktivite_modu == "Watching") {
      try {
        client.user.setPresence({
          activities: [{ name: yenidurum, type: ActivityType.Watching }],
          status: durum_modu_converted,
        });
        return interaction.reply({ embeds: [succEmbed] });
      } catch (err) {
        console.log(err);
        return interaction.reply({ embeds: [errEmbed] });
      }
    }
  },
};
