const { Client } = require("discord.js");
const db = require("mongoose");
const { sleep } = require("../../functions/basic_functions");
module.exports = {
  name: "ready",
  displayName: "Mongoose Listener",
  once: true,
  /**
   *
   * @param {Client} client
   * @param {db} mongoose
   */
  async execute(client) {
    const mongoose = client.database;

    const userbotSchema = new mongoose.Schema({
      id: String,
      money: { type: Number, default: 0 },
      nextPrize: { type: Date, default: Date.now },
      DisplayName: String,
    });

    const townNumber = new mongoose.Schema({
      id: { type: String, default: "Main" },
      TotalTowns: { type: Number, default: 0 },
    });
    const UserTowns = new mongoose.Schema({
      Sehirid: String,
      ilceisim: String,
      ownrate: Number,
    });
    const Towns = new mongoose.Schema({
      sehirId: Number,
      Sehir: String,
      isim: String,
      nufus: Number,
      MiktarBasinaUcret: Number,
      parsel1: { type: String, default: "Unowned" },
      parsel2: { type: String, default: "Unowned" },
      parsel3: { type: String, default: "Unowned" },
      parsel4: { type: String, default: "Unowned" },
      parsel5: { type: String, default: "Unowned" },
      parsel6: { type: String, default: "Unowned" },
      parsel7: { type: String, default: "Unowned" },
      parsel8: { type: String, default: "Unowned" },
      parsel9: { type: String, default: "Unowned" },
      parsel10: { type: String, default: "Unowned" },
      parsel11: { type: String, default: "Unowned" },
      parsel12: { type: String, default: "Unowned" },
      parsel13: { type: String, default: "Unowned" },
      parsel14: { type: String, default: "Unowned" },
      parsel15: { type: String, default: "Unowned" },
      parsel16: { type: String, default: "Unowned" },
      parsel17: { type: String, default: "Unowned" },
      parsel18: { type: String, default: "Unowned" },
      parsel19: { type: String, default: "Unowned" },
      parsel20: { type: String, default: "Unowned" },
      parsel21: { type: String, default: "Unowned" },
      parsel22: { type: String, default: "Unowned" },
      parsel23: { type: String, default: "Unowned" },
      parsel24: { type: String, default: "Unowned" },
      parsel25: { type: String, default: "Unowned" },
      parsel26: { type: String, default: "Unowned" },
      parsel27: { type: String, default: "Unowned" },
      parsel28: { type: String, default: "Unowned" },
      parsel29: { type: String, default: "Unowned" },
      parsel30: { type: String, default: "Unowned" },
      parsel31: { type: String, default: "Unowned" },
      parsel32: { type: String, default: "Unowned" },
      parsel33: { type: String, default: "Unowned" },
      parsel34: { type: String, default: "Unowned" },
      parsel35: { type: String, default: "Unowned" },
      parsel36: { type: String, default: "Unowned" },
      parsel37: { type: String, default: "Unowned" },
      parsel38: { type: String, default: "Unowned" },
      parsel39: { type: String, default: "Unowned" },
      parsel40: { type: String, default: "Unowned" },
      parsel41: { type: String, default: "Unowned" },
      parsel42: { type: String, default: "Unowned" },
      parsel43: { type: String, default: "Unowned" },
      parsel44: { type: String, default: "Unowned" },
      parsel45: { type: String, default: "Unowned" },
      parsel46: { type: String, default: "Unowned" },
      parsel47: { type: String, default: "Unowned" },
      parsel48: { type: String, default: "Unowned" },
      parsel49: { type: String, default: "Unowned" },
      parsel50: { type: String, default: "Unowned" },
      parsel51: { type: String, default: "Unowned" },
      parsel52: { type: String, default: "Unowned" },
      parsel53: { type: String, default: "Unowned" },
      parsel54: { type: String, default: "Unowned" },
      parsel55: { type: String, default: "Unowned" },
      parsel56: { type: String, default: "Unowned" },
      parsel57: { type: String, default: "Unowned" },
      parsel58: { type: String, default: "Unowned" },
      parsel59: { type: String, default: "Unowned" },
      parsel60: { type: String, default: "Unowned" },
      parsel61: { type: String, default: "Unowned" },
      parsel62: { type: String, default: "Unowned" },
      parsel63: { type: String, default: "Unowned" },
      parsel64: { type: String, default: "Unowned" },
      parsel65: { type: String, default: "Unowned" },
      parsel66: { type: String, default: "Unowned" },
      parsel67: { type: String, default: "Unowned" },
      parsel68: { type: String, default: "Unowned" },
      parsel69: { type: String, default: "Unowned" },
      parsel70: { type: String, default: "Unowned" },
      parsel71: { type: String, default: "Unowned" },
      parsel72: { type: String, default: "Unowned" },
      parsel73: { type: String, default: "Unowned" },
      parsel74: { type: String, default: "Unowned" },
      parsel75: { type: String, default: "Unowned" },
      parsel76: { type: String, default: "Unowned" },
      parsel77: { type: String, default: "Unowned" },
      parsel78: { type: String, default: "Unowned" },
      parsel79: { type: String, default: "Unowned" },
      parsel80: { type: String, default: "Unowned" },
      parsel81: { type: String, default: "Unowned" },
      parsel82: { type: String, default: "Unowned" },
      parsel83: { type: String, default: "Unowned" },
      parsel84: { type: String, default: "Unowned" },
      parsel85: { type: String, default: "Unowned" },
      parsel86: { type: String, default: "Unowned" },
      parsel87: { type: String, default: "Unowned" },
      parsel88: { type: String, default: "Unowned" },
      parsel89: { type: String, default: "Unowned" },
      parsel90: { type: String, default: "Unowned" },
      parsel91: { type: String, default: "Unowned" },
      parsel92: { type: String, default: "Unowned" },
      parsel93: { type: String, default: "Unowned" },
      parsel94: { type: String, default: "Unowned" },
      parsel95: { type: String, default: "Unowned" },
      parsel96: { type: String, default: "Unowned" },
      parsel97: { type: String, default: "Unowned" },
      parsel98: { type: String, default: "Unowned" },
      parsel99: { type: String, default: "Unowned" },
      parsel100: { type: String, default: "Unowned" },
    });
    const TownGameUser = new mongoose.Schema({
      userid: String,
      username: String,
      Money: Number,
      OwnedSites: [UserTowns],
    });
    //////////////////////////////////////////////////////////////7
    client.databaseSchemas.userbotSchema = userbotSchema;

    client.databaseSchemas.townNumber = townNumber;
    client.databaseSchemas.Towns = Towns;
    client.databaseSchemas.TownGameUser = TownGameUser;

    //////////////////////////////////////////////////////////////////
    // MOdel isimleri ataması
    // Town-Game
  },
};
