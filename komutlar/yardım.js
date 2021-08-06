const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#313131')
.setDescription(`
<:830580890097680464:871138239937904680> **・ Yn3ox V12 Guard Komutları**

<:852328813149159464:871138242739728426>  **・**  \`!kanal-koruma\`  **Kanal Koruma Aç/Kapat**
<:852328813149159464:871138242739728426>  **・**  \`!rol-koruma\`  **Rol Koruma Aç/Kapat**
<:852328813149159464:871138242739728426>  **・**  \`!küfür-engel\`  **Küfür Engel Aç/Kapat**
<:852328813149159464:871138242739728426>  **・**  \`!reklam-engel\`   **Reklam Engel Aç/Kapat**
<:852328813149159464:871138242739728426>  **・**  \`!sohbet aç\`   **Sohbeti Açarsınız**
<:852328813149159464:871138242739728426>  **・**  \`!sohbet kapat\`   **Sohbeti Kapatırsıbız**
<:852328813149159464:871138242739728426>  **・**  \`!ban\` **Kişiyi Sunucudan Yasaklarsınız.**
<:852328813149159464:871138242739728426>  **・**  \`!istatistik\`  **Botun İstatistiklerini Atar**
<:852328813149159464:871138242739728426>  **・**  \`!sil\`  **Belirttiğiniz Sayıda Mesajı Siler**
<:852328813149159464:871138242739728426>  **・**  \`!ping\`  **Pinginizi Ölçüp Atar**
`)
.setImage('https://cdn.discordapp.com/attachments/871133646856269885/871160598992400384/Adsz.png')
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)


  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};