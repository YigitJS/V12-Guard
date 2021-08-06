const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const Yn3ox = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`<:858867260252356609:871138243054276669> **Ping ・** ${client.ws.ping}ms`)
message.channel.send(Yn3ox)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Ping'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Yn3ox Ping Komutu'
}; 