const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = "Splat!"

bot.login("INSERER CHAINE DE CARACTERES GENERE ALEATOIREMENT PTN")

bot.on("ready", () => {
  //ce code se lancera dès que le bot est lancé
  bot.user.setPresence({ game: { name: "liquidé des gens !", type: 0 } });
})
