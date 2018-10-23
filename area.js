const Discord = require('discord.js');
const superagent = require("snekfetch");
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const moment = require('moment');
require('moment-duration-format');

  client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);
  client.user.setActivity("b!kisshentai (b!help)");
});

  
client.on('message', async (message) => {
 const superagent = require("snekfetch");
 const Discord = require('discord.js');
  
    if (message.content.startsWith(`${prefix}anal`)) {
      if (!message.channel.nsfw)
      return message.channel.send("⛔ YOU AREN'T IN A NSFW CHANNEL! YOU CANNOT USE THIS! ⛔");
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
    }
  
    if (message.content.startsWith(`${prefix}avatar`)) {
    superagent.get('https://nekos.life/api/v2/img/avatar')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Anime Avatar! 👍`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
     if (message.content.startsWith(`${prefix}baka`)) {
     superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`B-Baka! 😶`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
      if (message.content.startsWith(`${prefix}bjgif`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/bj')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Blowjob 😮 🍆`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  if (message.content.startsWith(`${prefix}blowjob`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/blowjob')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Blowjob 😮 🍆`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
    if (message.content.startsWith(`${prefix}boobs`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/boobs')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Anime Boobies 😫`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
      if (message.content.startsWith(`${prefix}sex`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/classic')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Classic Sex~! 😀`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
    if (message.content.startsWith(`${prefix}cuddle`)) {
    let args = message.content.slice(1).split(" ");
    let cuddleUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!cuddleUser) return message.channel.send("You can't cuddle with me! *Even if I might need some cuddles about now...*")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/cuddle`);

  let cuddleEmbed = new Discord.RichEmbed()
  .setTitle(`Cuddles! 😌`)
  .setDescription(`${message.author} cuddled ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("#FFFFFF")
  .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
  .setTimestamp();
 message.channel.send(cuddleEmbed)

}
      if (message.content.startsWith(`${prefix}cum`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/cum')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`*cums* 💦💦💦`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
      if (message.content.startsWith(`${prefix}erotease`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/ero')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Erotic Tease 😉`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
        if (message.content.startsWith(`${prefix}erokemo1`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/erokemo')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Erotic Kemonomimi (Neko) Tease 😉`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
      if (message.content.startsWith(`${prefix}erokemo2`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/erok')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Erotic Kemonomimi (Neko) More Tease 😉`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
 if (message.content.startsWith(`${prefix}eroyuri`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/eroyuri')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Erotic Yuri 😉`)
                .setImage(response.body.url)
                .setColor(`#FFFFFF`)
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
    if (message.content.startsWith(`${prefix}feed`)) {
    let args = message.content.slice(1).split(" ");
  let feedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!feedUser) return message.channel.send("You can't feed me! I have to keep my thin figure!")
  const { body } = await superagent
.get('https://nekos.life/api/v2/img/feed')
        
            let feedembed = new Discord.RichEmbed()
                .setTitle(`Feeding Time! 🍽`)
               .setDescription(`${message.author} cuddled ${message.mentions.users.first()}!`)
                .setImage(body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                 .setTimestamp();
            message.channel.send(feedembed);
        
}
   if (message.content.startsWith(`${prefix}feet`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");    
  superagent.get('https://nekos.life/api/v2/img/feet')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Feet 🐾`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                 .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
   if (message.content.startsWith(`${prefix}footjob`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");    
    superagent.get('https://nekos.life/api/v2/img/feetg')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Footjob 🤞`)
	        .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                 .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
   if (message.content.startsWith(`${prefix}femdom`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");    
    superagent.get('https://nekos.life/api/v2/img/femdom')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Female Domination 🎗`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                 .setTimestamp();
            message.channel.send(lewdembed);
        })
}
            if (message.content.startsWith(`${prefix}foxgirl`)) {
             const { body } = await superagent
             .get('https://nekos.life/api/v2/img/fox_girl')
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Fox Girl 💗`)
                .setImage(body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
}
  
   if (message.content.startsWith(`${prefix}futa`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");    
    superagent.get('https://nekos.life/api/v2/img/futanari')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Futanari 👀`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
    if (message.content.startsWith(`${prefix}donate`)) {
	        const { body } = await superagent
        .get('https://nekos.life/api/v2/img/gecg')
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Every Dollar Spent... 😭`)
                .setImage(body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
}
      if (message.content.startsWith(`${prefix}help`)) {
  let helpEmbed = new Discord.RichEmbed()
.setTitle("😩 NSFW/SFW Command Menu 👌")
.setDescription(`These are the comamnds for this bot, ones with the label SFW mean they can be used outside of NSFW while NSFW can only be used in NSFW channels. Also if you have never used bots like **Senpai**, **Miki** or **Naughty Time~**, when using most of the fun commands you must mention a user to use the command. Example: https://imgur.com/a/FeAsJzO`)
.setColor("#b70000") 
.addField("❔Information Commands", "botinfo, serverinfo, useravatar, whois.")
.addField("📘 Fun SFW Commands", "avatar, baka, cuddle, donate, feed, foxgirl, hug, kiss, lizard, meow, neko, pat, poke, slap, smug, tickle, waifu, wallpaper.")
.addField("🔞 NSFW Commands", "anal, bjgif, blowjob, cum, eroticholo, erotease, erokemo1, erokemo2, eroyuri, feet, footjob, femdom, futa(futanari), hentai, hgif, hgirl, holoneko, kemo, lewdkemo, lewdnekogif, lewdmoji nsfwavatar, ngif, pussy, pussylick, randomhentai, smallboobs, sologirl, sologif, spank, trap, tits, yuri.");
message.channel.send(helpEmbed);

}
  
   if (message.content.startsWith(`${prefix}hgif`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");    
    superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Hentai Gif 😳`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
   if (message.content.startsWith(`${prefix}hentai`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");    
    superagent.get('https://nekos.life/api/v2/img/hentai')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Hentai 🍑`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
   if (message.content.startsWith(`${prefix}eroticholo`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");   
    superagent.get('https://nekos.life/api/v2/img/holo')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Holo Erotic 😗`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
   if (message.content.startsWith(`${prefix}holoneko`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");   
    superagent.get('https://nekos.life/api/v2/img/hololewd')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Holo N-Neko! 😩`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
            
  if (message.content.startsWith(`${prefix}hug`)) {
    let args = message.content.slice(1).split(" ");
  let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!hugUser) return message.channel.send("You can't hug me! I get nervous when h-hugged, I m-might just start licking you. 😳")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/hug`);

  let hugEmbed = new Discord.RichEmbed()
  .setTitle(`Hug Time! 🤗`)
  .setDescription(`${message.author} hugged ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("#FFFFFF")
  .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(hugEmbed)

}
   if (message.content.startsWith(`${prefix}kemo`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");   
    superagent.get('https://nekos.life/api/v2/img/kemonomimi')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Kemonomimi! 😼`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}


          
  if (message.content.startsWith(`${prefix}kiss`)) {
    let args = message.content.slice(1).split(" ");
  let kissUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kissUser) return message.channel.send("You can't kiss me! *Even if I might like it...*")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/kiss`);

  let kissEmbed = new Discord.RichEmbed()
  .setTitle(`Mwah! 😘`)
  .setDescription(`${message.author} kissed ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("#FFFFFF")
  .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(kissEmbed);

}
   if (message.content.startsWith(`${prefix}pussylick`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");   
    superagent.get('https://nekos.life/api/v2/img/kuni')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Pussy Licking 👅`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
   if (message.content.startsWith(`${prefix}hgirl`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");   
    superagent.get('https://nekos.life/api/v2/img/les')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`A-Ah! 🍑💦`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
   if (message.content.startsWith(`${prefix}lewdkemo`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");  
    superagent.get('https://nekos.life/api/v2/img/lewdkemo')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`L-Lewd Kemonomimi! 😼`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
     if (message.content.startsWith(`${prefix}lizard`)) {
	    const { body } = await superagent
        .get('https://nekos.life/api/v2/img/lizard')
            const sfwembed = new Discord.RichEmbed()
                .setTitle(`Lizard 🦎`)
                .setImage(body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(sfwembed);
}
          
     if (message.content.startsWith(`${prefix}meow`)) {
	       const { body } = await superagent
	       .get('https://nekos.life/api/v2/img/meow')
            const sfwembed = new Discord.RichEmbed()
                .setTitle(`Meow! 😺`)
                .setImage(body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(sfwembed);
}
     if (message.content.startsWith(`${prefix}neko`)) {
	     const { body } = await superagent
        .get('https://nekos.life/api/v2/img/neko')
            const sfwembed = new Discord.RichEmbed()
                .setTitle(`Neko 🐱`)
                .setImage(body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(sfwembed);
}
       if (message.content.startsWith(`${prefix}ngif`)) {
	    if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");  
	     const { body } = await superagent
         .get('https://nekos.life/api/v2/img/ngif')
            const sfwembed = new Discord.RichEmbed()
                .setTitle(`Neko Gif 😸`)
                .setImage(body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(sfwembed);
}
  
   if (message.content.startsWith(`${prefix}lewdnekogif`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");  
    superagent.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Lewd Neko Gif 😻`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
   if (message.content.startsWith(`${prefix}nsfwavatar`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");  
    superagent.get('https://nekos.life/api/v2/img/nsfw_avatar')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Lewd Avatar! 😱`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
   if (message.content.startsWith(`${prefix}lewdmoji`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");  
    superagent.get('https://nekos.life/api/v2/img/gasm')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Lewd Emoji 😈`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
    if (message.content.startsWith(`${prefix}pat`)) {
    let args = message.content.slice(1).split(" ");
    let patUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!patUser) return message.channel.send("You can't pat me! I'm not a loli.")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/pat`);

  let patEmbed = new Discord.RichEmbed()
  .setTitle(`Pat pat! 😊`)
.setDescription(`${message.author} patted ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("#FFFFFF")
  .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(patEmbed)

}
      if (message.content.startsWith(`${prefix}poke`)) {
    let args = message.content.slice(1).split(" ");
    let pokeUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!pokeUser) message.channel.send("You can't poke me! I only poke, *boops you*.")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/poke`);

  let pokeEmbed = new Discord.RichEmbed()
  .setTitle(`Boop! 😜`)
  .setDescription(`${message.author} poked ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("#FFFFFF")
  .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(pokeEmbed)

}
   if (message.content.startsWith(`${prefix}clit`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔"); 
    superagent.get('https://nekos.life/api/v2/img/pussy')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Anime Clit 😫`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
   if (message.content.startsWith(`${prefix}randomhentai`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/pwankg')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`RANDOM`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
   }
  
        if (message.content.startsWith(`${prefix}slap`)) {
    let args = message.content.slice(1).split(" ");
    let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!slapUser) return message.channel.send("SERIUOSLY?! TRYING TO HIT THE WAIFU-BOT OF THE SERVER?! **SLAPS**!")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/slap`);

  let slapEmbed = new Discord.RichEmbed()
  .setTitle(`Wack! 🖐`)
  .setDescription(`${message.author} slapped ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("#FFFFFF")
  .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(slapEmbed)

}
  
   if (message.content.startsWith(`${prefix}smallboobs`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/smallboobs')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`**"FBI, OPEN UP!"** 🏃`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
       if (message.content.startsWith(`${prefix}smug`)) {
	        const { body } = await superagent
   .get('https://nekos.life/api/v2/img/smug')
            const sfwembed = new Discord.RichEmbed()
                .setTitle(`SMUG 😏`)
                .setImage(body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(sfwembed);
}
  
   if (message.content.startsWith(`${prefix}sologirl`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/solo')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`🍑`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
   if (message.content.startsWith(`${prefix}sologif`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/solog')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`💦`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
  if (message.content.startsWith(`${prefix}spank`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
       let args = message.content.slice(1).split(" ");
  let spankUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!spankUser) message.channel.send("You can't s-spank me! You pervert!")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/spank`);

  let spankEmbed = new Discord.RichEmbed()
  .setTitle(`O-Oh my gosh! 😵`)
  .setDescription(`${message.author} spanked ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("#FFFFFF")
  .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(spankEmbed)

}
          if (message.content.startsWith(`${prefix}tickle`)) {
    let args = message.content.slice(1).split(" ");
  let tickleUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tickleUser) return message.channel.send("You can't tickle me! I'm not even ticklish anyways.").catch(err => console.log(err));
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/tickle`);

  let pokeEmbed = new Discord.RichEmbed()
  .setTitle(`Ticklish Tummy! 🤣`)
.setDescription(`${message.author} tickled ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("#FFFFFF")
  .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(pokeEmbed)
}
     if (message.content.startsWith(`${prefix}tits`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/tits')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Anime Titties 😫`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
  
     if (message.content.startsWith(`${prefix}trap`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/trap')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Trap 🍆`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}
       if (message.content.startsWith(`${prefix}waifu`)) {
	      const { body } = await superagent
        .get('https://nekos.life/api/v2/img/waifu')
            const sfwembed = new Discord.RichEmbed()
                .setTitle(`And you get a waifu!`)
                .setImage(body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
	        .setTimestamp();
            message.channel.send(sfwembed);
}
       if (message.content.startsWith(`${prefix}wallpaper`)) {
	       	        const { body } = await superagent
          .get('https://nekos.life/api/v2/img/wallpaper')

            const sfwembed = new Discord.RichEmbed()
                .setTitle(`Wallpaper 😎`)
                .setImage(body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
	        .setTimestamp();
            message.channel.send(sfwembed);
}
     if (message.content.startsWith(`${prefix}yuri`)) {
      if (!message.channel.nsfw) 
        return message.channel.send("⛔THIS CHANNEL IS NOT MARKED AS NSFW, DARLING! GET TO ONE!⛔");
    superagent.get('https://nekos.life/api/v2/img/yuri')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle(`Yuri 💋`)
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Bot Version: 1.2.3", client.user.displayAvatarURL)
	        .setTimestamp();
            message.channel.send(lewdembed);
        })
     }
	
	if (message.content.startsWith(`${prefix}whois`)) {

 let member = message.mentions.users.first() || message.author
            let player = message.mentions.members.first() || message.member
            let user = message.mentions.users.first();
            let iicon = player.user.displayAvatarURL;
            let roles = message.mentions.members.first().roles.map(role => role).join(" ");
        if(!user) return message.channel.send("You haven't selected/mentioned a user whose info you want to see.");
            let userEmbed = new Discord.RichEmbed()
            .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
            .setThumbnail(user.displayAvatarURL)
            .setColor('#b70000')
            .addField('ID', user.id, true)
            .addField('Current Tag', user.tag, true)
            .addField('Server Nickname', `${player.displayName}`, true) 
            .addField('Highest Member Role', `${player.highestRole.name}`, true)
            .addField('Roles', `${roles}`, true)
            .addField('Game/Playing', `${(user.presence.game && user.presence.game && user.presence.game.name) || 'None'}`, true)
            .addField('Status', user.presence.status, true)
            .addField('Bot', user.bot, true)
            .addField('Joined At:', `${player.joinedAt}`)
            .addField('Account Created:', `${player.user.createdAt}`, true)
            .setThumbnail(iicon)
            .setTimestamp();
         return message.channel.send(userEmbed)
	}
	
	if (message.content.startsWith(`${prefix}botinfo`)) {

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setDescription(`Information on LewdTime:`)
    .setColor("#b70000")
    .setThumbnail(bicon)
    .addField("Name", client.user.username, true)
    .addField("Tag", client.user.tag, true)
    .addField("ID", client.user.id, true)
    .addField("Last Update", `${moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]')} ago`, true)
    .addField("Date Of Creation", client.user.createdAt.toLocaleDateString(), true)
    .addField("Guilds", client.guilds.size, true)
    .addField("Users", client.users.size, true)
    .addField("Invite Me!~", "https://bit.ly/2AbmU0S", true)
    .setFooter("Created By @Dawn.Bots.INC", "https://i.imgur.com/kQodEGp.png") 
    .setTimestamp();
    return message.channel.send(botembed);
  }
  
	if (message.content.startsWith(`${prefix}serverinfo`)) {
		
    let sicon = message.guild.iconURL;
    let server = message.guild.name;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setDescription(`Information on ${server}:`)
    .setThumbnail() 
    .setColor("#b70000")
    .addField('Server ID', message.guild.id, true)
    .addField('Server Name', message.guild.name, true)
    .addField('Channel Count', message.guild.channels.size, true)
    .addField('Member Count', message.guild.memberCount, true)
    .addField('Role Count', message.guild.roles.size, true)
    .addField('Region', message.guild.region, true)
    .addField('Server Created On', message.guild.createdAt.toLocaleDateString(), true)
    .addField('Server Owner', message.guild.owner, true)
    .setThumbnail(sicon) 
    .setFooter(`${server}`, sicon)
    .setTimestamp();
   return message.channel.send(serverembed);
  }
  
  	  if (message.content.startsWith(`${prefix}useravatar`)) { 
      let player = message.mentions.members.first() || message.member
	   let user = player.user
if(!user) return message.channel.send("You haven't selected/mentioned a user whose avatar you want to see."); 
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`, `${user.displayAvatarURL}`)
    .setTitle("Avatar")
    .setImage(user.displayAvatarURL)
    .setColor("#b70000");
    return message.channel.send(avatarEmbed);
     }
});
	
	client.on('guildCreate', guild => {
  let channel = client.channels.get("499832353544470539");

  const embed = new Discord.RichEmbed()
      .setColor("#b70000")
      .setAuthor(`Joined ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Owner", guild.owner.user.tag)
      .addField("ID", guild.id, true)
      .addField("Users", guild.memberCount, true)
      .addField("Channels", guild.channels.size, true)
  return channel.send(embed);
});

client.on("guildUpdate", function (oldGuild, newGuild) {
         let channel = client.channels.get("499832353544470539");
	 let gicon = newGuild.iconURL;
        const eeembed = new Discord.RichEmbed()
            .setColor("#7289da")
            .setThumbnail(gicon)
            .setAuthor(`A Guild Has been Updated`, gicon)
            .addField(`Old Guild Name:`, `${oldGuild}`)
            .addField(`New Guild Name:`, `${newGuild}`)
        return channel.send(eeembed);
}); 

client.on('guildDelete', guild => {
  let channel = client.channels.get("499832353544470539");

  const embed = new Discord.RichEmbed()
      .setColor("#b70000")
      .setAuthor(`Left ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Owner", guild.owner.user.tag)
      .addField("ID", guild.id, true)
      .addField("Users", guild.memberCount, true)
      .addField("Channels", guild.channels.size, true)
  return channel.send(embed);
});

client.login(process.env.BOT_TOKEN); 
