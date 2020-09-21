/*const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`Por Favor Utilize os seguintes metodos: h!sorteio (tempo) (chat) (premio);`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Você não usou a formatação correta para o tempo!`
      );
    if (isNaN(args[0][0])) return message.channel.send(` Isto não é um número.`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        ` Eu não achei esse canal na guilda.`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(` Não tem um prêmio especificado!`);
    message.channel.send(`* Sorteio criado em ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(` Novo Sorteio!`)
      .setDescription(
        `Reaja com 🎉 para entrar
Hospedado por ${message.author} 
Prêmio: **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(` Reações: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Not enough people reacted for me to start draw a winner!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `O Ganhador do sorteio por **${prize}** is... ${winner}`
      );
    }, ms(args[0]));
  },
};*/
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`**__🎉|Comando de sorteio
    ⛑ Como usar?
     a!sorteio (tempo) (chat) (Prêmio)
    Por exemplo: a!sorteio 1h #sorteios 1 Vip tan tan tan.
    obs: tem os seguintes formatos de tempo: s (segundos), M (minutos),H (horas), D (dias)
    espero ter ajudado! Com grande amor: ! ŁỮĆI₣€Ř ŦҜ 🔥#0001 __**`)
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )
      return message.channel.send(
        `Você não usou a formatação correta para o tempo!`
      );
    if (isNaN(args[0][0])) return message.channel.send(` Isto não é um número.`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        ` Eu não achei esse canal na guilda.`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(` Não tem um prêmio especificado!`);
    message.channel.send(`* Sorteio criado em ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(` Novo Sorteio!`)
      .setDescription(
        `Reaja com 🎉 para entrar
Hospedado por ${message.author} 
Prêmio: **${prize}**`)
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(` Reações: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Então,suave? tenho uma menssagem para te entregar: Infelzimente ninguém reagiu menssagem
          ... Então não tem ganhadores.`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `O Ganhador do sorteio por **${prize}** is... ${winner}`
      );
    }, ms(args[0]));
  },
};