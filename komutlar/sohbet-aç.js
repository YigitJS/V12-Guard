const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let topluluk = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(topluluk, {
    SEND_MESSAGES: null
  });

  message.channel.send("<:841036117834203166:871138241665990687> **Sohbet Kanalı `Yazılabilir` Durumuna Getirildi.**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Sohbet-Aç'],
  permLevel: 3
};

exports.help = {
  name: "sohbet-aç",
  description: "Yn3ox V12 Sohbet Aç Komutu."
};