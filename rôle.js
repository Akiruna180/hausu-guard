const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./config.json')

client.on('message', async message =>{
if(message.content === config.prefix + "captcha"){
    if(message.channel.id == "891239654660145182") {
        let role = message.guild.roles.cache.find(role => role.id === "697136648390967346");
    let role2 = message.guild.roles.cache.find(role => role.id === "816765518387085442");
    //let role3 = message.guild.roles.cache.find(role => role.id === "837064918854271036");
    //let role4 = message.guild.roles.cache.find(role => role.id === "837064868665360404");

    message.member.send(`Vous avez passé la vérification avec succès !\nBienvenue parmi nous ${message.author} !`);
    message.member.roles.add(role);
    //message.member.roles.add(role4);
    //message.member.roles.add(role3);
    message.member.roles.remove(role2);
    message.delete();
        }
        else {
        return
        }
    

}
});



client.login(config.token)