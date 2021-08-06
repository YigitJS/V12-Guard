const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send("<a:hyr:871163969719631933> Bu Komutu Kullanmak İçin **Yetkiniz** Yok.")

let prefix = ayarlar.prefix
  
  
  if (!args[0]) {
    const Yn3ox = new Discord.MessageEmbed()
    .setDescription(`**<a:evt:871163965558898698> Doğru Kullanımı ・** ${prefix}kanal-koruma aç/kapat`)
    .setColor('#313131')
    return message.channel.send(Yn3ox)
  }
  if (args[0] === 'aç') {
    
    db.set(`kanalk_${message.guild.id}`, "Aktif")
    const Embed = new Discord.MessageEmbed()
    .setDescription('**<a:evt:871163965558898698> Kanal Koruma Sistemi Başarıyla Açıldı.**')
    .setColor('GREEN')
    return message.channel.send(Embed)   
  }
   if (args[0] === 'kapat') {
    
    db.delete(`kanalk_${message.guild.id}`)
    const Yn3oxz = new Discord.MessageEmbed()
    .setDescription('**<a:hyr:871163969719631933> Kanal Koruma Sistemi Başarıyla Kapatıldı.**')
    .setColor('RED')
     return message.channel.send(Yn3oxz)
  }
};
exports.conf = {
  aliases: ["kanal"],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 
