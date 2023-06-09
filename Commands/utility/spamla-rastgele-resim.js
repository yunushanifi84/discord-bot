const {
  SlashCommandBuilder,
  Client,
  ChatInputCommandInteraction,
  EmbedBuilder,
} = require("discord.js");
const axios = require("axios");

module.exports = {
  hasESub: false,
  hasApp: false,
  data: new SlashCommandBuilder()
    .setName("spamla-rastgele-resim")
    .setDescription("Rastgele resim üretir.Spamlamak için!")
    .addUserOption((Option) =>
      Option.setName("hedef")
        .setDescription("Hedeflediğiniz kişi.")
        .setRequired(true)
    )
    .addNumberOption((Option) =>
      Option.setName("sayi")
        .setDescription("Üretmek istediğiniz resim sayısı.")
        .setMaxValue(50)
        .setMinValue(0)
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    interaction.deferReply({ ephemeral: true });
    let sayi = 1;
    sayi = interaction.options.getNumber("sayi");
    const user = interaction.options.getUser("hedef");
    const xrapidapiKey = client.config.xrapidApi;
    const settings = {
      method: "GET",
      url: "https://hargrimm-wikihow-v1.p.rapidapi.com/images",
      params: { count: `${sayi}` },
      headers: {
        "X-RapidAPI-Key": xrapidapiKey,
        "X-RapidAPI-Host": "hargrimm-wikihow-v1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(settings);
      const succEmbed = new EmbedBuilder().setTitle("Tamam").setColor("Green");
      await interaction.editReply({ embeds: [succEmbed] });
      for (let i = 1; i <= sayi; i++) {
        await user.send(response.data[`${i}`]);
      }
    } catch (error) {
      console.error(error);
      const errEmbed = new EmbedBuilder()
        .setTitle("Bir sorun ile karşılaşıldı.")
        .setColor("Red");
      await interaction.reply({ embeds: [errEmbed] });
    }
  },
};
