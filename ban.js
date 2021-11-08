const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')



client.on('message', message => {
    let embed = new Discord.MessageEmbed();
    let cmd = message.content.trim().slice(28);

    if (!message.guild) return;
  
    
    if (message.content.startsWith(config.prefix + 'ban')) {
     
      const user = message.mentions.users.first();
     
      if (user) {
        
        const member = message.guild.members.resolve(user);
        
        if (member) {
         
          member
            .ban({
              reason: `${cmd}`,
            })
            .then(() => {
             
              client.channels.cache.get('837342803012091976').send(embed.setDescription(`${user.tag} a été banni par ${message.author}\n\n**__Raison :__** ${cmd}`).setColor("#ff0707").setImage('https://media.discordapp.net/attachments/679361638104694857/837346050670985276/op16.png'));
            })
            .catch(err => {
              
              message.channel.send('I was unable to ban the member');
             
              console.error(err);
            });
        } else {
         
          message.channel.send("That user isn't in this guild!");
        }
      } else {
        
        message.channel.send("You didn't mention the user to ban!");
      }
    }
});



client.login(config.token)