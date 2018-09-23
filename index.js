const TelegramBot = require("node-telegram-bot-api")

const TOKEN = "634065729:AAGQ7LB_lSE9JlDYmWVrhvMv7Y5uof2OyBA"

const bot = new TelegramBot(TOKEN, {
    polling: true
})

function getChatId(msg){
    return msg.chat.id
}

bot.onText(/\/start/, msg => {
    bot.sendMessage(getChatId(msg), "kill")
})