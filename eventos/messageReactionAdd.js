const discord = require('discord.js')
const fs = require('fs')

module.exports = async (bot, messageReaction, user) => { 
  
        const guild = bot.guilds.cache.get('723690948365647929');
     //   const channel = bot.channels.cache.get('733437578065346674');
  
if(guild.channels.cache.find(ch => ch.name.toLowerCase() == (`〘🎫〙${user.username.toLowerCase()}`))) return;
      if(messageReaction.emoji.name === '🎟' && messageReaction.count > 1) {  //bot.user
      //  messageReaction.emoji.name === '🎟' && messageReaction.remove(user.id)

        let bots = guild.roles.cache.find(r => r.id === '723731519314591756')
        let suporte = guild.roles.cache.find(r => r.id === '723691639775690842' , '723691639775690842')
        await guild.channels.create(`〘🎫〙${user.username}`, 
                   { 
                     type: 'text', 
                     permissionOverwrites: [{ 
                       id: guild.id,
                       deny: ['VIEW_CHANNEL']
                     },
                     {
                       id: user.id,
                       allow: ['VIEW_CHANNEL']
                     },
                     {
                       id: suporte,
                       allow: ['VIEW_CHANNEL']       
                     },                   
                     {
                       id: bots,
                       allow: ['VIEW_CHANNEL'],    
                     }]}).then(async c => {             
                if (guild.channels.cache.find(c => c.id === "751941964168953967")) {
                if (guild.channels.cache.find(c => c.id === "751941964168953967").type === 'category') {
                    c.setParent(guild.channels.cache.find(c => c.id == "751941964168953967"))
                } else {
                    c.setParent(guild.channels.cache.find(c => c.id == "751941964168953967"))
                }
        }
          
            await c.send(`<@${user.id}> Bem vindo(a) ao suporte.`)
            await c.send(`Novo ticket aberto: <@&${suporte.id}>`)
            await c.send(new discord.MessageEmbed().setDescription("Obrigado por entrar em contato!\nInforme seu problema e entraremos em contato com você em breve!\n```Comando para ajudantes fecharem os tickets: "+bot.prefixo+"close```").setColor("#800080"))
        })
    /*        
        let embed = new discord.MessageEmbed();
        embed.setTitle('Suporte de tickets');
        embed.setDescription(`Novo ticket de suporte aberto ${user}\nID: ${user.id}`);
        embed.setColor('#F39237');
        channel.send(embed) // Send a message to user.
 */       
}


  
}