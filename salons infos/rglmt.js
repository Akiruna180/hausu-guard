const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('°');
const token = "ODkxMDc4MjU2MjM5OTcyNDQy.YU5HSw.TPecjU-s4ZnBO6GD0F4fS4nXFxc";
const config = require('./config.json')

client.on('message', async message =>{
if(message.content === "°rglmt"){

    let serveur = client.guilds.cache.get('836622952333574216')
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**Règlement**\n")
    .setDescription(`✧──────══幸═══◦ ✦ ◦═══幸══──────✧\n\n**Tout d'abord, nous précisons que les [Terms Discord](https://dfr.gd/terms ) ainsi que les [Guidelines Discord](https://dfr.gd/guidelines) sont à respecter ici !**\n\n**__Voici notre règlement :__**\n\n🔹- I - Ce serveur est à l'encontre du non-respect, veillez donc à adopter une attitude respectueuse en toute circonstance !\n\n🔹- II - La diffusion d'images et/ou de texte pouvant choquer autrui tels que la (pédo)pornographie, NSFW, ou tenir des propos racistes, xénophobes... En bref, tout propos ou image visant à blesser ou discriminer autrui sera gravement sactionné.\n\n🔹- III - Les actions visant à flood, spam, troll un salon sont passibles d'un bannissement.\n\n🔹- IV - Le staff se réserve le droit d'appliquer une sanction sans qu'une règle corresponde à la faute décrite, car tout ne peut être rédigé.\n\n🔹- V - Contourner une sanction, de quelque moyen que ce soit, entrainera une sanction plus grave.\n\n🔹- VI - Abuser des mentions, majuscules, émojis/émotes, réactions etc... est considéré comme du spam. Ils ne sont pas interdits, mais une utilisation abusive sera sanctionnée.\n\n🔹- VII - Le doxx, autrement dit le partage d'informations personnelles d'autres personnes est formellement interdit !\n\n🔹- VIII - Le spoil, sur tout sujet, est défendu.\n\n🔹- IX - La publicité sous toutes ses formes est strictement interdite (cela comprend évidemment la publicité en messages privés)\n\n✧──────══幸═══◦ ✦ ◦═══幸══──────✧`)
    .setImage("https://fr.techtribune.net/wp-content/uploads/2020/08/noragamifuni-1597282104665.jpg")
    .setFooter(`Hausu* 2021`)
    .setTimestamp();

   message.channel.send(embed)

}
});




client.login(token)