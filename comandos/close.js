const Discord = require('discord.js')
  module.exports.run = async (bot, message, args) => {//exportando o comando como say
  
    if(message.member.roles.cache.has('746395842256306198'+'723691639775690842')
    || message.member.permissions.has("ADMINISTRATOR")) {

      if (message.channel.name.startsWith("〘🎫〙")) {
        message.channel.delete();
      
          let embed = new Discord.MessageEmbed()
             .setColor('#F39237')
               .setTitle(`Ticket fechado`)
               .setDescription(`Fechado por: ${message.author}\nticket: ${message.channel.name}`)
               .setTimestamp()
             .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: "gif", format: "png", size: 32}))
  
           const createD = bot.channels.cache.get('751950579013648395');
          createD.send(embed)
      
        }
    
    }
  
}