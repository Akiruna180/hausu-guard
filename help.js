const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./config.json')

client.on('message', message =>{
if(message.content.startsWith(config.prefix + `help` )){

    let embed = new Discord.MessageEmbed()

    .setDescription("*╭┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ₊˚⊹ .*\n\n    **__Page d'aide En Développement__**\n\n    **préfixe : °**\n\n*╰┈┈┈┈┈┈┈┈┈┈┈┈✦ ₊˚⊹ .*")
    .setColor('RANDOM')
    .setImage('https://media.discordapp.net/attachments/679361638104694857/837326161108664350/op11.png')
    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic: true})}`)
    .setTimestamp();

    message.channel.send(embed);
}
});



client.login(config.token);