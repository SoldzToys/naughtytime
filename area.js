const Discord = require('discord.js');
const client = new Dicord.Client();


client.on(`ready`, () => {
  console.log(`I am ready!`);

});


client.on("message", message => {
if (message.content === `${prefix}ping`) {
message.reply(`Hey there darling.~`);
}
});

client.login(process.env.BOT_TOKEN);
