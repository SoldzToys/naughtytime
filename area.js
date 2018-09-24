const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');


client.on(`ready`, () => {
  console.log(`I am ready!`);
client.user.setActivity('with a toy ;)');
  
});

client.on('message', message => {
  
    if (message.content === `${prefix}hello`) {
    message.reply(`Hey there darling.~`);
      
    }
  
});     
client.login(process.env.BOT_TOKEN);
