const Discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')

module.exports = {
    execute: (client, message, args) => {
        const Bouton1 = new MessageButton()
        .setStyle('blurple')
        .setLabel('coucou')
        .setID('test1')
        .setEmoji('😎')

        message.channel.send('coucou1', Bouton1)
    }
}