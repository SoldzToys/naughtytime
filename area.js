const Discord = require('discord.js');
const superagent = require("snekfetch");
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');


  client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);
  client.user.setActivity("h!kisshentai");
});

  
client.on('message', async (client, message) => {
 const superagent = require("snekfetch");
 const Discord = require('discord.js');

  if (message.content.startsWith(`${prefix}kiss`)) {
  let kissUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kissUser) message.channel.send("You can't kiss me! *Even if I might like it...*")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/kiss`);

  let kissEmbed = new Discord.RichEmbed()
  .setTitle(`Mwah! 😘`)
  .setDescription(`<@${message.author.id}> kissed <@${message.mentions.users.first().id}>!`)
  .setImage(body.url)
  .setColor("#b70000")
  .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
  .setTimestamp(new Date());
  message.channel.send(kissEmbed);

}

});
client.login(process.env.BOT_TOKEN);
