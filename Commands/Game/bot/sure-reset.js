const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = {
  subCommand: "bot.sure-reset",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    const mongoose = client.database;
    const adminid = client.config.adminid;

    /////////////////////////////////////////////////////////////
    const userbotSchema = new mongoose.Schema({
      id: String,
      money: { type: Number, default: 0 },
      nextPrize: { type: Date, default: Date.now },
      DisplayName: String,
    });

    /////////////////////////////////////////////////////////////
    const { options } = interaction;
    if (mongoose.connection.models["Kullanici-data"]) {
      delete mongoose.connection.models["Kullanici-data"];
    }
    await interaction.deferReply();
    const userid = interaction.member.id;
    if (!(adminid == userid)) {
      return interaction.editReply("Buna yetkiniz yok.");
    }
    const sifirlanacakid = options.getUser("hedef").id;
    const User = mongoose.model("Kullanici-data", userbotSchema);
    try {
      let user = await User.findOne({ id: sifirlanacakid });
      if (!user) {
        return interaction.editReply("Lütfen önce kayıt olunuz.");
      }
      user.nextPrize = Date.now();
      user.save();
      return interaction.editReply("Süre başarıyla sıfırlandı.");
    } catch (error) {
      console.error(error);
      interaction.editReply("Bir hatayla karşılaşıldı.");
    }
  },
};
