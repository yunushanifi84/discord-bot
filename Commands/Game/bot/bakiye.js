const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  subCommand: "bot.bakiye",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   *
   */
  async execute(interaction, client) {
    const mongoose = client.database;
    ////////////////////////////////////////////////////////////////////////
    const userbotSchema = new mongoose.Schema({
      id: String,
      money: { type: Number, default: 0 },
      nextPrize: { type: Date, default: Date.now },
      DisplayName: String,
    });
    ////////////////////////////////////////////////////////////////////////

    if (mongoose.connection.models["Kullanici-data"]) {
      delete mongoose.connection.models["Kullanici-data"];
    }

    await interaction.deferReply();
    let userid = interaction.options.getUser("hedef")?.id;
    if (!userid) {
      userid = interaction.member.id;
    }
    const usersubject = interaction.guild.members.cache.get(userid);
    const User = mongoose.model("Kullanici-data", userbotSchema);
    const errembed = new EmbedBuilder()
      .setTitle("Bir hatayla karşılaşıldı lütfen daha sonra tekrar deneyiniz.")
      .setColor("Red");
    try {
      let user = await User.findOne({ id: userid });
      const succembed = new EmbedBuilder()
        .setTitle(
          `${usersubject.displayName}  kişisinin Bakiyesi:${user.money}`
        )
        .setColor("DarkGreen");
      const kayitembed = new EmbedBuilder()
        .setTitle("Lütfen önce kayıt olunuz.")
        .setColor("LightGrey");
      if (!user) {
        return interaction.editReply({ embeds: [kayitembed] });
      }
      user.DisplayName = usersubject.nickname;
      user.save();
      return interaction.editReply({ embeds: [succembed] });
    } catch (error) {
      console.error(error);
      interaction.editReply({ embeds: [errembed] });
    }
  },
};
