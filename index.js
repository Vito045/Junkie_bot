const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '634065729:AAGQ7LB_lSE9JlDYmWVrhvMv7Y5uof2OyBA';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/start/, (msg) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, "text");
});