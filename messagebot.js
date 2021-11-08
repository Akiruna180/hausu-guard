const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('message', message =>{
if(message.content.startsWith(config.prefix + "verif")){
    
    let rglmt = client.channels.cache.get('757631245311148142');
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**__Vérification__**\n')
    .setDescription(`✧──────══幸═══◦ ✦ ◦═══幸══──────✧\n\n**Hey ! Bienvenue à toi cher utilisateur !**\nTu es ici dans le salon de la vérification.\n\n__Voici les étapes de notre vérification :__\n\n- Valide le ${rglmt}\n- Ecris **°captcha** ci-dessous !\n\n✧──────══幸═══◦ ✦ ◦═══幸══──────✧`)
    .setImage("https://media.discordapp.net/attachments/679361638104694857/837384143557886003/op17.png")
    
message.channel.send(embed);

}
});

client.login(config.token)