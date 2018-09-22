 const TelegramBot = require("node-telegram-bot-api")
 const helper = require("./helpers")
 const config = require("./config")
 const kb = require("./keyboard-buttons")
 const keyboard = require("./keyboard")

const bot = new TelegramBot(config.TOKEN, {
     polling: true
 })
 bot.on("message", msg => {
   bot.sendMessage(helper.getChatId(msg), "text")
 })
