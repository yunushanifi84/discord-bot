const {
  SlashCommandBuilder,
  Client,
  ChatInputCommandInteraction,
  EmbedBuilder,
} = require("discord.js");
const axios = require("axios");

module.exports = {
  hasApp: false,
  hasESub: false,
  data: new SlashCommandBuilder()
    .setName("resim-olustur")
    .setDescription("Dall-e yi kullanarak bir resim oluştur!")
    .addStringOption((Option) =>
      Option.setName("text")
        .setDescription("Oluşturmak istediğiniz şeyi betimleyin")
        .setRequired(true)
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    await interaction.deferReply();
    const text = interaction.options.getString("text");
    const rapidapiKey = client.config.xrapidApi;

    const settings = {
      method: "POST",
      url: "https://openai80.p.rapidapi.com/images/generations",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "371dbb5856msh8799b40005cac1dp1a7ebajsn9f713b0ad6c9",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
      data: {
        prompt: text,
        n: 1,
        size: "1024x1024",
      },
    };
    try {
      const response = await axios.request(settings);
      console.log(response.data["0"]);
      await interaction.editReply(response.data["0"]);
    } catch (error) {
      console.log(error);
      console.log(rapidapiKey);
      interaction.editReply("Bir hata ile karşılaşıldı.");
    }
  },
};
