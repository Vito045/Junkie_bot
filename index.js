 const TelegramBot = require("node-telegram-bot-api")
 const helper = require("./helpers")
 const config = require("./config")
 const kb = require("./keyboard-buttons")
 const keyboard = require("./keyboard")
 const mongoose = require("mongoose")

 const EasyPayWallet = "28828833"
 const BitcoinWallet = "680769754:AAFvusu4UO0LBQ8i5dYhZ4vbsw0JCpDr9RU"

 helper.logStart()
const bot = new TelegramBot(config.TOKEN, {
     polling: true
 })
 bot.on("message", msg => {
   bot.sendMessage(helper.getChatId(msg), "text")
 })
