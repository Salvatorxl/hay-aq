const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
const embed = new Discord.RichEmbed()
.setAuthor("Serenity", client.user.avatarURL)
.setTitle("Serenity")
.setURL("https://discord.com/oauth2/authorize?client_id=741573779175636992&scope=bot&permissions=8")
.setColor("BLUE")
.setTimestamp()
.setFooter("© SAIAN", client.user.avatarURL)
.addField("Serenity", `[Davet Linkim](https://discord.com/oauth2/authorize?client_id=741573779175636992&scope=bot&permissions=8)`)
.addField(">> Serenity Destek <<", `[Destek Sunucum](https://discord.gg/jdeUaT9)`)
.addField(" >>Serenity <<", `[Serenity](https://discord.com/oauth2/authorize?client_id=741573779175636992&scope=bot&permissions=8)`)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};