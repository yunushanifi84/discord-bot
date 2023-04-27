const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");

const ms = require("ms");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("sustur")
    .setDescription("Belirtilen kişiyi susturur")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption((option) =>
      option
        .setName("hedef")
        .setDescription("Susturmak istediğiniz kişiyi seçiniz.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("zaman")
        .setDescription("Ne kadar süre susturulacağı")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("sebep").setDescription("Susturulma sebebi.")
    ),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const { guild, options } = interaction;
    const user = options.getUser("hedef");
    const member = guild.members.cache.get(user.id);
    const time = options.getString("zaman");
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
