const Discord = require('discord.js');
const client = new Dicord.Client();


client.on(`ready`, () => {
  console.log(`I am ready!`);
client.user.setActivity('with a toy ;)');
});

client.on('message', async (message) => {
  
    if (message.content === `${prefix}hello`) {
    message.reply(`Bark!`);
    }

client.login(process.env.BOT_TOKEN);
