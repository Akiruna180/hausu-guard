const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('message', async message =>{
if(message.content.startsWith(config.prefix + "sugg")){

    let cmd = message.content.trim().slice(6);
    let embed = new Discord.MessageEmbed()

.setTitle(`**${message.author.username}**`)
.setDescription(`✧──────══幸═══◦ ✦ ◦═══幸══──────✧\n\n\n **__Suggestion de :__** ${message.author.username}\n\n**Suggestion :** ${cmd}\n\n\n✧──────══幸═══◦ ✦ ◦═══幸══──────✧`)
.setColor('RANDOM')
.setImage('https://media.discordapp.net/attachments/679361638104694857/837324737133936660/op1.png')
.setFooter(`Merci de nous avoir suggéré ton idée !`, `${message.author.displayAvatarURL({dynamic: true})}`)
.setTimestamp();

message.delete();
let Embed = await message.channel.send(embed)

Embed.react('👍').then(() => Embed.react('👎'))


}
});

client.login(config.token);