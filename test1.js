const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./config.json')

client.on('message', message =>{
if(message.content.startsWith(config.prefix + `test1` )){

    let embed = new Discord.MessageEmbed()

    .setDescription("Test 1 okay")
    .setColor('RANDOM');

    message.channel.send(embed);
}
});


client.login(config.token);