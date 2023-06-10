const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  MessageContextMenuCommandInteraction,
  EmbedBuilder,
} = require("discord.js");

const axios = require("axios");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("Türkçeye Çevir")
    .setType(ApplicationCommandType.Message),
  hasESub: false,
  hasApp: true,
  displayName: "Çevir |tr|",
  /**
   *
   * @param {MessageContextMenuCommandInteraction} interaction
   */
  async execute(interaction, client) {
    await interaction.deferReply();
    let text = interaction.targetMessage.content;

    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", "auto");
    encodedParams.set("target_language", "tr");
    encodedParams.set("text", text);

    const rapidApiKey = client.config.xrapidApi;

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: encodedParams,
    };
    try {
      const response = await axios.request(options);
      const translation = response.data.data.translatedText;
      const succEmbed = new EmbedBuilder()
        .addFields([
          {
            name: "çevirisi",
            value: translation,
          },
        ])
        .setColor("Green");
      await interaction.editReply({ embeds: [succEmbed] });
    } catch (error) {
      console.log(error);
      const errEmbed = new EmbedBuilder()
        .setTitle("Bir hatayla karşılaşıldı.")
        .setColor("Red");
      interaction.editReply({ embeds: [errEmbed] });
    }
  },
};
