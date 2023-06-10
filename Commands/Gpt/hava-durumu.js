const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
} = require("discord.js");
const axios = require("axios");
const { TurkishTranslate } = require("../../functions/Translate");
module.exports = {
  hasESub: false,
  hasApp: false,
  data: new SlashCommandBuilder()
    .setName("hava-durumu")
    .setDescription("Belirttiğiniz şehirdeki hava durumu bilgisini verir.")
    .addStringOption((Options) =>
      Options.setName("hedef-sehir")
        .setDescription("Hava durumunu öğrenmek istediğiniz şehir.")
        .setRequired(true)
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    await interaction.deferReply();
    const text = interaction.options.getString("hedef-sehir");

    const xrapidapiKey = client.config.xrapidApi;

    const settings = {
      method: "GET",
      url: `https://open-weather13.p.rapidapi.com/city/${text}`,
      headers: {
        "X-RapidAPI-Key": xrapidapiKey,
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(settings);
      console.log(response.data);

      const weatherMain = await TurkishTranslate(response.data.weather[0].main);
      const weatherDescription = await TurkishTranslate(
        response.data.weather[0].description
      );
      const temp = ((response.data.main.temp - 32) / 1.8).toFixed(2);
      const feels_like = ((response.data.name - 32) / 1.8).toFixed(2);

      const succEmbed = new EmbedBuilder()
        .setTitle(`Şehir bilgisi ${response.data.name}`)
        .addFields([
          {
            name: `${weatherMain}`,
            value: `${weatherDescription}`,
          },
          { name: "Sıcaklık", value: `${temp}` },
        ])
        .setColor("Blue");
      await interaction.editReply({ embeds: [succEmbed] });
    } catch (error) {
      console.log(error);
      const errEmbed = new EmbedBuilder()
        .setTitle("Bir sorun oluştu")
        .setColor("Red");
      interaction.editReply({ embeds: [errEmbed] });
    }
  },
};
