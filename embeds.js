const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./config.json')

client.on('message', async message =>{
    if(message.content.startsWith(config.prefix + "rglmt")){
    
        let embed = new Discord.MessageEmbed()
    
    .setTitle(``)
    .setDescription(``)
    .setColor('')
    .setImage('')
    .setFooter(``)
    .setTimestamp();
    
    
    message.delete();
    
    
    
    }
    });
    