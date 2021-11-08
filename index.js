const Discord = require('discord.js')
//const Canvas = require('canvas');

const client = new Discord.Client();
require('discord-buttons')(client);
const { MessageButton, MessageActionRow } = require('discord-buttons')

const help = require('./help');
const test1 = require('./test1');
const sugg = require('./sugg');
const clear = require('./clear');
const kick = require('./kick');
const ban = require('./ban');
const messagebot = require('./messagebot');
const roleverif = require('./rôle');
const embeds = require('./embeds');
const config = require('./config.json')

//login/
client.on("ready", () => {
  console.log("Salut je suis connecté");
  
  client.user.setActivity("Osu", {type: "PLAYING"});
});

//arrivée membres (2)
client.on("guildMemberAdd", member => {

  member.roles.add('888829781666316399');
  client.channels.cache.get('888557480249012248').send(`Bienvenue ${member} !`)

});

client.on("guildMemberAdd", member => {
  
  

});

/* client.on("guildMemberAdd", async member => {

  const canvas = Canvas.createCanvas(1920, 1080);
                    const ctx = canvas.getContext('2d');
          
                    const background = await Canvas.loadImage('https://pbs.twimg.com/media/EdTs3HcXkAAwoJ3.jpg');
                    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                
                   ctx.font = '108px Arial Black';
                   ctx.fillStyle = 'blue';
                   ctx.fillText(`Bienvenue à toi ${member.displayName}! `, canvas.width /5.50, canvas.height /1.27);
          
                   ctx.font = '97px Arial'; 
                   ctx.fillStyle = 'red';
                   ctx.fillText(`Nous sommes maintenant à ${member.guild.memberCount} membres.`, canvas.width /13, canvas.height /1.12);

                   
                    ctx.beginPath();
                    ctx.arc(978.125, 518.125, 223,0, Math.PI *2, true);
                    ctx.strokeStyle = '#04CB40';
                    ctx.lineWidth = 30;
                    ctx.stroke();
                    ctx.save();
                    ctx.closePath();
                    ctx.clip();
                
                     
                      
             
                    
                    
                  
                    const avatar = await Canvas.loadImage(
                      member.user.displayAvatarURL({format: 'jpg'}),
                    );
                    ctx.strokeStyle = '#11FE7D';
                    ctx.strokeRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(avatar, 741.125 , 280.625, 460, 460);
               
                    
                    const attachment = new Discord.MessageAttachment(canvas.toBuffer(),('walppaper.jpg'));


  let embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .attachFiles(attachment)
  .setImage('attachment://walppaper.jpg');

  //client.channels.cache.get('836670529707442177').send(embed);
}); */


client.login(config.token);