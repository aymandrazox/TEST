const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608329723247984692")
setInterval(function() {
channel.send(`بلييييز ارجووك ارجوك ابي كريدتس`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
