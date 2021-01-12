const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    let RcEmbed = new Discord.MessageEmbed()
    .setColor("#0083FF")
    .setTitle('__**Recrutements staff - Air Publicity**__')
    .addField('Air Publicity :airplane_departure: est heureux de vous annoncer que les recrutements staff 👮‍♂️ sont ouvert !')
    .addField('__**Rendez-vous dans #【👮‍♂️】recrutements !**__');
    .setImage('https://m.imgur.com/a/X5eYu8x')
    .setFooter('Air publicity - Bot')

    message.channel.send(RcEmbed)
}

module.exports.config = {
    name: 'RcON'
}
