const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = {
  subCommand: "bot.odul-al",
  hasApp: false,
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    const mongoose = client.database;
    const userbotSchema = client.databaseSchemas.userbotSchema;
    const { randomint, sleep } = require("../../../functions/basic_functions");

    if (mongoose.connection.models["Kullanici-data"]) {
      delete mongoose.connection.models["Kullanici-data"];
    }
    const userid = interaction.member.id;
    const User = mongoose.model("Kullanici-data", userbotSchema);
    try {
      let user = await User.findOne({ id: userid });
      if (!user) {
        const kayitembed = new EmbedBuilder()
          .setTitle("Lütfen önce kayıt olunuz.")
          .setColor("LightGrey");
        return interaction.editReply({ embeds: [kayitembed] });
      }
      const now = Date.now();
      if (user.nextPrize > now) {
        const reamingtime = user.nextPrize - now;
        const minutesRemaining = Math.floor(reamingtime / 60000);

        if (minutesRemaining > 0) {
          const waittime = new EmbedBuilder()
            .setTitle("Zarlarınızı zaten attınız.")
            .setFields([
              { name: "Kalan zaman", value: `${minutesRemaining} dakika.` },
            ])
            .setColor("Blue");
          return interaction.reply({ embeds: [waittime] });
        }
      }
      const atma = new EmbedBuilder()
        .setColor("Aqua")
        .setTitle("Zar atılıyor..")
        .setImage("https://media.giphy.com/media/f73urdknsWliIEZiDw/giphy.gif");
      await interaction.reply({ embeds: [atma] });
      await sleep(3000);
      const firstdice = randomint(1, 6);
      const seconddice = randomint(1, 6);
      let miktar = (firstdice + seconddice) * 10;
      user.money += miktar;

      user.nextPrize = now + 900000;
      const basariliatim = new EmbedBuilder()
        .setTitle("Zarlar başarıyla atıldı.")
        .setFields([
          { name: "İlk zar", value: `${firstdice}` },
          { name: "İkinci zar", value: `${seconddice}` },
          { name: "Kazanılan para", value: `${miktar}` },
          { name: "Paranız", value: `${user.money}` },
        ])
        .setColor("Green");

      await user.save();
      interaction.editReply({ embeds: [basariliatim] });
    } catch (error) {
      const errembed = new EmbedBuilder()
        .setTitle(
          "Bir hatayla karşılaşıldı lütfen daha sonra tekrar deneyiniz."
        )
        .setColor("Red");
      console.error(error);
      interaction.editReply({ embeds: [errembed] });
    }
  },
};
