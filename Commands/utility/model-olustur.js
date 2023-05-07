const {
  SlashCommandBuilder,
  EmbedBuilder,
  ChatInputCommandInteraction,
  Client,
} = require("discord.js");

module.exports = {
  hasESub: false,
  hasApp: false,
  data: new SlashCommandBuilder()
    .setName("model-olustur")
    .setDescription("mongoose için manuel model oluşturma komutu."),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const mongoose = client.database;
    const TownNumberSchema = client.databaseSchemas.townNumber;
    const TownNumber = mongoose.model("Town-Count", TownNumberSchema);
    let town = await new townNumber();
    town.save();

    const succEmbed = new EmbedBuilder()
      .setTitle("Model oluşumu Başarılı!!")
      .setColor("Blue");

    return interaction.reply({ embeds: [succEmbed] });
  },
};
