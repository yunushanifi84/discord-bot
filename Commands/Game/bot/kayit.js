const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  subCommand: "bot.kayit",
  hasApp: false,
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   *
   */
  async execute(interaction, client) {
    const mongoose = client.database;
    ///////////////////////////////////////////////////////////////
    const userbotSchema = new mongoose.Schema({
      id: String,
      money: { type: Number, default: 0 },
      nextPrize: { type: Date, default: Date.now },
      DisplayName: String,
    });
    //////////////////////////////////////////////////////////////
    if (mongoose.connection.models["Kullanici-data"]) {
      delete mongoose.connection.models["Kullanici-data"];
    }
    await interaction.deferReply();
    const userid = interaction.member.id;
    const User = mongoose.model("Kullanici-data", userbotSchema);
    try {
      let user = await User.findOne({ id: userid });
      if (!user) {
        user = new User({ id: userid });
        user.save();
        return interaction.editReply("Başarıyla kayıt oldunuz.");
      }
      return interaction.editReply("Zaten bir hesabınız var.");
    } catch (error) {
      console.error(error);
      return interaction.editReply(
        "Bir hata oluştu lütfen daha sonra tekrar deneyiniz."
      );
    }
  },
};
