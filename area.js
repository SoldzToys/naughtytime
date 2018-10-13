const Discord = require('discord.js');
const superagent = require("snekfetch");
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');


  client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);
  client.user.setActivity("b!kisshentai");
});

  
client.on('message', async (message) => {
 const superagent = require("snekfetch");
 const Discord = require('discord.js');
  
      if (!message.channel.nsfw)
      return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔")
    superagent.get('https://nekos.life/api/v2/img/anal')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Hentai Anal 💩`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })

  if (message.content.startsWith(`${prefix}kiss`)) {
    let args = message.content.slice(1).split(" ");
  let kissUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kissUser) message.channel.send("You can't kiss me! *Even if I might like it...*")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/kiss`);

  let kissEmbed = new Discord.RichEmbed()
  .setTitle(`Mwah! 😘`)
  .setDescription(`<@${message.author.id}> kissed <@${message.mentions.users.first().id}>!`)
  .setImage(body.url)
  .setColor("#FFFFFF")
  .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(kissEmbed);

}

});
client.login(process.env.BOT_TOKEN); 
