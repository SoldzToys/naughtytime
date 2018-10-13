const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');


  client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);
  client.user.setActivity("h!kisshentai");
});

client.login(process.env.BOT_TOKEN);
