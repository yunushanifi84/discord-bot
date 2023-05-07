const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Client,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test-sayi-arttir")
    .setDescription("Test town count arttırıcı."),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const mongoose = client.database;
    const TownNumberSchema = client.databaseSchemas.townNumber;
    const TownNumber = mongoose.model("Town-Count", TownNumberSchema);
    let townNumber = TownNumber.findOne({ id: "Main" });
    townNumber.TotalTowns += 1;
    townNumber.save();
    interaction.reply("Arttırıldı.");
  },
};
