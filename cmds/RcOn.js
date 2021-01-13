const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {
    if(message.content == '+RcON') {
    message.delete();
    let RcEmbed = new Discord.MessageEmbed()
    .setColor("#0083FF")
    .setTitle('__**Recrutements staff - Air Publicity**__')
    .addField('__**Air Publicity :airplane_departure: est heureux de vous annoncer que les recrutements staff 👮‍♂️ sont ouvert !**__', '__**Rendez-vous dans #【👮‍♂️】recrutements !**__')
    .setFooter('Air publicity - Bot')

    message.channel.send(RcEmbed)

}}

module.exports.config = {
    name: 'RcON'
}
