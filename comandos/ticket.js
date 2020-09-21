const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {//exportando o comando como say
 if(message.author.id == "550387976363048963"|| message.member.permissions.has("ADMINISTRATOR")) {
   message.delete()
    const embed = new Discord.MessageEmbed()
        .setTitle('⭐┃ Suporte')
        .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: "gif", format: "png", size: 32}))
        .setDescription('Antes de Reagir leia!\nCaso Tenha dúvidas ou quiser chamar o suporte reaja ao ticket,Mas Não abra sem motivo,caso abra será sujeito a punição.')
        .setColor('BLUE')
        .setTimestamp()
        message.channel.send(embed);
   
  }
  
}