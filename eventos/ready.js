module.exports = async (bot) => { //faz algo qdo o bot liga
  console.log('!!! estou pronto para ser usado !!!\n  To de olho em '+bot.channels.cache.size+' canais (chats + calss)');
  
  
  
  const status = [
    "dnd",
  ]
  
  const atividades = [
     ["Criado Por Lucifer", "LISTENING"],
     ["Entre No Rede Alcateia: https://discord.gg/EGhzdez", "PLAYING"],
     ["Logo Logo teremos atualizações", "WATCHING"]//bot adicionar quantos quiser :V
    ];
  setInterval(async () => { // controlar o intervalo
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
      await bot.user.setActivity(atividades[i][0], { type: atividades [i][1] });
  }, 10000); // intervalo

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
      await bot.user.setStatus(status[b])
  }, 20000)

  setInterval(async () => {
    let c = Math.floor(Math.random() * avatares.length + 1) - 1
      await bot.user.setAvatar(avatares[c])
  }, 400000)

}