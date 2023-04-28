const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");
const ms = require("ms");
module.exports = {
  subCommand: "sustur.susturma",

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const { guild, options } = interaction;
    const user = options.getUser("hedef");
    const member = guild.members.cache.get(user.id);
    const time = options.getString("sure");
    const convertedTime = ms(time);
    const reason =
      options.getString("sebep") || "Herhangi bir sebep belirtilmedi";

    const errEmbed = new EmbedBuilder()
      .setDescription(
        "Birşeyler yanlış gitti. Lütfen daha sonra tekrar deneyiniz."
      )
      .setColor("Red");

    const succEmbed = new EmbedBuilder()
      .setTitle("***SUSTURULDU****")
      .setDescription(`Başarıyla ${user} susturuldu!`)
      .addFields(
        { name: "Sebep", value: `${reason}` || "none", inline: true },
        { name: "Süre", value: `${time}` || "none", inline: true }
      )
      .setColor("Green")
      .setTimestamp();

    if (!convertedTime)
      return interaction.reply({ embeds: [errEmbed], ephemeral: true });

    try {
      await member.timeout(convertedTime, reason);

      interaction.reply({ embeds: [succEmbed], ephemeral: true });
    } catch (err) {
      console.log(err);
    }
  },
};
