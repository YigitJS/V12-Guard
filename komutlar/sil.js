const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:hyr:871163969719631933> Bu Komutu Kullanmak İçin **Yetkiniz** Yok.");
if(!args[0]) return message.channel.send("<a:hyr:871163969719631933> Sileceğim Mesaj **Miktarını** Yazmalısının.");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<:846680999580794910:871138242160889917> **・ ${args[0]} Adet Mesajı Sildim.**`).then(a => a.delete({timeout: '2000'}));
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['delete','temizle'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Yn3ox V12 Sil Komutu'
};