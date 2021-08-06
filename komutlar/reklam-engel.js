const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`<a:hyr:871163969719631933> Bu Komutu Kullanmak İçin **Yetkiniz** Yok.`)
if (!args[0])  {
    const Yn3oxWasToken = new Discord.MessageEmbed()
    .setDescription(`**<a:evt:871163965558898698> Doğru Kullanımı ・** ${prefix}reklam-engel aç/kapat`)
    .setColor('#313131')
      return message.channel.send(Yn3oxWasToken)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, '**<a:evt:871163965558898698> Reklam Engel Sistem Aktif.**')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const Embed = new Discord.MessageEmbed()
    .setDescription('**<a:evt:871163965558898698> Reklam Engeli Sistemi Başarıyla Açıldı.**')
    .setColor('GREEN')
    return message.channel.send(Embed)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`reklamengel_${message.guild.id}`)

   const Yn3ox = new Discord.MessageEmbed()
   .setDescription('**<a:hyr:871163969719631933> Reklam Engeli Sistemi Başarıyla Kapatıldı.**')
   .setColor('RED')
    return message.channel.send(Yn3ox)
  }

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam-engel'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engelle',
 description: "Yn3ox V12 Reklam Engel Komutu"
};