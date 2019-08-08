const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("595560808247984144")
setInterval(function() {
channel.send(`عطيينيي كرييدتس هاهاهاها بزز منك`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
