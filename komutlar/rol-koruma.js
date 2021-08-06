const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

  if (!args[0]) {
    const Yn3ox = new Discord.MessageEmbed()
    .setDescription(`**<a:evt:871163965558898698> Doğru Kullanımı ・** ${prefix}rol-koruma aç/kapat`)
    .setColor('#313131');
    message.channel.send(Yn3ox);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
        const Yn3ox = new Discord.MessageEmbed()
        .setDescription(`<a:evt:871163965558898698> Rol Koruma Sistemi Zaten Aktif.`)
        .setColor('#313131');
     message.channel.send(Yn3ox);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const Embed = new Discord.MessageEmbed()
      .setDescription('**<a:evt:871163965558898698> Rol Koruma Sistemi Başarıyla Açıldı.**')
      .setColor('GREEN');
      return message.channel.send(Embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const Yn3oxz = new Discord.MessageEmbed()
    .setDescription('**<a:hyr:871163969719631933> Rol Koruma Sistemi Başarıyla Kapatıldı.**')
    .setColor('RED');
     return message.channel.send(Yn3oxz);
  }
};
exports.conf = {
  aliases: ["rol-k"],
  permLevel: 3
};

exports.help = {
  name: "rol-koruma"
}; 