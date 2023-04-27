const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
  ],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./handlers/eventHandler");
client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
loadEvents(client);

client.login(client.config.token);
