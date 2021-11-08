const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json')

client.on('message', message =>{
let embed = new Discord.MessageEmbed();

if (message.content.startsWith(config.prefix + 'clear')) {
        message.delete();
    
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
    
          let args = message.content.trim().split(/ +/g);
    
          if (args[1]) {
    
            if (!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99) {
    
              message.channel.bulkDelete(args[1])
              message.channel.send(embed.setDescription(`Les ${args[1]} messages ont bien été spprimés !`).setColor("RANDOM").setImage("https://media.discordapp.net/attachments/679361638104694857/837329777768529920/op13.png").setFooter(`Clear effectué par ${message.author.username} le`, `${message.author.displayAvatarURL({dynamic: true})}`).setTimestamp());
    
    
            }
    
            else {
    
              message.channel.send(embed.setDescription(`Vous devez indiquer une valeur entre 1 et 99 !`).setColor("RANDOM").setImage("https://media.discordapp.net/attachments/679361638104694857/837331499375263784/op14.png").setFooter(`Indique une bonne valeur !`, `${message.author.displayAvatarURL({dynamic: true})}`));
            }
    
          }
          else {
    
            message.channel.send(`Vous devez indiquer un nombre de message à supprimer !`);
          }
    
        }
        else {
    
          message.channel.send(`Vous devez avoir la permission de gérer les messages pour éxécuter cette commande ! !`);
    
    
        }
    
    }



});



client.login(config.token)