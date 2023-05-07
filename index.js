const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { User, Message, GuildMember, ThreadMember } = Partials;
const {
  Guilds,
  GuildMessages,
  MessageContent,
  GuildMessageReactions,
  GuildVoiceStates,
} = GatewayIntentBits;
const client = new Client({
  intents: [
    Guilds,
    GuildMessages,
    MessageContent,
    GuildMessageReactions,
    GuildVoiceStates,
  ],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./handlers/eventHandler");
client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();
client.applications = new Collection();

loadEvents(client);
client.login(client.config.token);
