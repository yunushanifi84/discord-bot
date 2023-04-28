const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = {
  subCommand: "sustur.susturma-kaldir",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const { guild, options } = interaction;

    const user = options.getUser("hedef");
    const member = guild.members.cache.get(user.id);
    const errEmbed = new EmbedBuilder()
      .setDescription(
        "Birşeyler yanlış gitti. Lütfen daha sonra tekrar deneyiniz."
      )
      .setColor("Red");

    const succEmbed = new EmbedBuilder()
      .setTitle("***SUSTURULMA BAŞARIYLA AÇILDI****")
      .setDescription(`Başarıyla ${user} susturuldu!`)
      .setColor("Green")
      .setTimestamp();

    //if(member.roles.highest.position >= interaction.member.roles.highest.position)
    //  return interaction.reply({ embeds: [errEmbed], ephemeral: true});
    try {
      await member.timeout(null);

      interaction.reply({ embeds: [succEmbed], ephemeral: true });
    } catch (err) {
      console.log(err);
      interaction.reply({ embeds: [errEmbed], ephemeral: true });
    }
  },
};
