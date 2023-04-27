const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sustur-kaldir")
    .setDescription("Seçtiğiniz kişinin susturmasını kaldırır.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption((option) =>
      option
        .setName("hedef")
        .setDescription(
          "Susturulmasının kaldırılmasını istediğiniz kişiyi seçiniz"
        )
        .setRequired(true)
    ),

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
    }
  },
};
