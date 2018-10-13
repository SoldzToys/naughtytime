const Discord = require('discord.js');
const superagent = require("snekfetch");
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');


  client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);
  client.user.setActivity("h!kisshentai");
});

client.on('message', async (client, message, args, level) => {
 const superagent = require("snekfetch");
 const Discord = require('discord.js');
 if (message.content ===(`${prefix}anal`)) {
    if (!message.channel.nsfw) return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔")
    superagent.get('https://nekos.life/api/v2/img/anal')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Hentai Anal 💩`)
                .setImage(response.body.url)
                .setColor(`#b70000`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp(new Date());
            message.channel.send(lewdembed);
        })
}

});
client.login(process.env.BOT_TOKEN);
