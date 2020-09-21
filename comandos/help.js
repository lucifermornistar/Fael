const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif','https://i.pinimg.com/originals/a7/4a/bf/a74abfc0fa25c35353066b37443e74ae.gif',
  'https://78.media.tumblr.com/258150e0ec251466cc845a258bce892f/tumblr_p6gnlhHm021v6bs4yo4_500.gif'
];


/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Comandos')
        .setColor('#FF002C')
        .setDescription(`Pediu pelos comandos? Aqui está!
help
close
ping
ticket
uptime
`)
        .setTimestamp()
        .setFooter('Bot está em beta')
  await message.channel.send(embed);
}