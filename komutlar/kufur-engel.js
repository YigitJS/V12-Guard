const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send("<a:hyr:871163969719631933> Bu Komutu Kullanmak İçin **Yetkiniz** Yok.")
  
  if (!args[0]){
    const Yn3ox = new Discord.MessageEmbed()
    .setDescription(`**<a:evt:871163965558898698> Doğru Kullanımı ・** ${prefix}küfür-engel aç/kapat`)
    .setColor('#313131')
      return message.channel.send(Yn3ox)
      }
  if (args[0] === 'aç'){
    db.set(`kufur_${message.guild.id}`, "acik")

    const Embed = new Discord.MessageEmbed()
    .setDescription('**<a:evt:871163965558898698> Küfür Engeli Sistemi Başarıyla Açıldı.**')
    .setColor('GREEN')
    return message.channel.send(Embed)    
  }
  
  if (args[0] === 'kapat'){
    db.set(`kufur_${message.guild.id}`, "kapali")

    const Yn3oxz = new Discord.MessageEmbed()
    .setDescription('**<a:hyr:871163969719631933> Reklam Engeli Sistemi Başarıyla Kapatıldı.**')
    .setColor('RED')
     return message.channel.send(Yn3oxz)

  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "küfür-engel",
  description: "Yn3ox V12 Küfür Engel Komutu"
}