const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')



client.on('message', message =>{
let embed = new Discord.MessageEmbed();

    if (message.content.startsWith(config.prefix + 'kick ')) {

        const args = message.content.slice(prefix.length).trim().split(' ');
        const user = message.mentions.users.first();
        let cmd = message.content.trim().slice(28); 
        
        if (user) {
    
          const member = message.guild.member(user);
    
          if (member) {
    
            member
              .kick('Optional reason that will display in the audit logs')
              .then(() => {
    
                client.channels.cache.get('837342803012091976').send(embed.setDescription(`${user.tag} a été expulsé par ${message.author}\n\n**__Raison :__** ${cmd}`).setColor("#ff0707").setImage('https://media.discordapp.net/attachments/679361638104694857/837344151221305374/op15.png'));
              })
              .catch(err => {
    
                message.reply(embed.setDescription("I was unable to kick"));
    
                console.error(err);
              });
          } else {
    
            message.reply("Cet utilisateur n'est pas dans notre serveur !!");
          }
    
        } else {
          message.reply("Vous devez mentionner un utilisateur à expulser !");
        }
      }

});


client.login(config.token)