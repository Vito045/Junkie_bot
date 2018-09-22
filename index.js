 const TelegramBot = require("node-telegram-bot-api")
 const helper = require("./helpers")
 const config = require("./config")
 const kb = require("./keyboard-buttons")
 const keyboard = require("./keyboard")
 const mongoose = require("mongoose")

 const EasyPayWallet = "28828833"
 const BitcoinWallet = "13Bi9FsmcFJnFtPJSCkAyXB2cy85YAnrPw"

 helper.logStart()

 /*mongoose.Promise = global.Promise
 mongoose.connect(config.DB_URL, {
     useMongoClient: true
 })
     .then(() => console.log('MongoDB connected'))
     .catch((err) => console.log(err))

 const Schema = mongoose.Schema
 const  GoodSchema = new Schema({
     name: {
         type: String,
         required:  true
     },
     description: {
         type: String,
         required:  true
     },
     price: {
         type: Number,
         required:  true
     }
 })
 mongoose.model("good", GoodSchema )
 const Good = mongoose.model("good")
 //database.goods.forEach(g => new Good(g).save())*/

 //====================================

 var Office;
 var Buy;
 var datum = new Date()
 var random = getRndInteger(+(datum.getDate() + "0"), 1000);
 var callbackData;
 const bot = new TelegramBot(config.TOKEN, {
     polling: true
 })
 bot.onText(/\/start/,  msg => {
     const text = "Добро пожалувать в PcyX \n\n" +
         "Для получения помощи нажмите ➡️ /help\n" +
         "\n" +
         "🏘Выберите район:\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Берестейская\n" +
         "[ Нажмите 1️⃣ ]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Дорогожычи\n" +
         "[ Нажмите 2️⃣]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Дружбы Народов\n" +
         "[ Нажмите 3️⃣ ]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Нивки\n" +
         "[ Нажмите 4️⃣ ]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Сырец\n" +
         "[ Нажмите 5️⃣ ]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Черниговская\n" +
         "[ Нажмите 6️⃣ ]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Дарница\n" +
         "[ Нажмите 7️⃣ ]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Золотые ворота\n" +
         "[ Нажмите 8️⃣ ]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Дворец - Украина\n" +
         "[ Нажмите 9️⃣ ]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Лыбидськая\n" +
         "[ Нажмите 🔟 ]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Олимпийская\n" +
         "[ Нажмите 1️⃣1️⃣]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "☑️ Київ, м.Оболонь\n" +
         "[ Нажмите 1️⃣2️⃣ ]\n" +
         "➖➖➖➖➖➖➖➖➖➖\n" +
         "\n" +
         "♦️В случае ненахода - перезаклад ГАРАНТИРОВАН ♦️"
     const moronText = "Вы не выбрали район, пожалуйста сделайте это"
     bot.sendMessage(helper.getChatId(msg), text, {
         reply_markup: {
             keyboard: keyboard.offices,
             one_time_keyboard: true,
             resize_keyboard: true
         }
     }).then(() => {
         /*bot.on("message", msg => {
             if(!(Office > 0)){
                 bot.sendMessage(helper.getChatId(msg), moronText, {
                     reply_markup: {
                         keyboard: keyboard.offices,
                         one_time_keyboard: true,
                         resize_keyboard: true
                     }
                 })
             }
         })*/

     })
 })
 bot.on('message', msg => {
     console.log('Working', msg.from.first_name)
     const chatId =  helper.getChatId(msg)


     switch(msg.text) {
         case kb.offices.Off1:
             Office = 1
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off2:
             Office = 2
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off3:
             Office = 3
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off4:
             Office = 4
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off5:
             Office = 5
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off5:
             Office = 5
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off6:
             Office = 6
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off7:
             Office = 7
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off8:
             Office = 8
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off9:
             Office = 9
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off10:
             Office = 10
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off11:
             Office = 11
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off12:
             Office = 12
             bot.sendMessage(msg.chat.id,"Ви вибрали район номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         /*case kb.offices.Off13:
             Office = 13
             bot.sendMessage(msg.chat.id,"Ви вибрали відділення номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off14:
             Office = 14
             bot.sendMessage(msg.chat.id,"Ви вибрали відділення номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.offices.Off15:
             Office = 15
             bot.sendMessage(msg.chat.id,"Ви вибрали відділення номер " + Office)
             bot.sendMessage(chatId,"Меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break*/

     }
     switch(msg.text) {
         case kb.home.goods:
             if(!(Office > 0)){
                 bot.sendMessage(helper.getChatId(msg), moronText, {
                     reply_markup: {
                         keyboard: keyboard.offices,
                         one_time_keyboard: true,
                         resize_keyboard: true
                     }
                 })
             }else {
                 bot.sendMessage(chatId, "Товары", {
                     reply_markup: {
                         keyboard: keyboard.goods,
                         one_time_keyboard: true,
                         resize_keyboard: true
                     }
                 })
                 var campare
                 bot.sendMessage(chatId, GoodsName("🍚 Амфетамин Фосфат 1гр.,"), GoodsPrice(350, 1))
                 bot.sendMessage(chatId, GoodsName("🌳 Шишки Serious 1 гр.,"), GoodsPrice(400, 2))
                 bot.sendMessage(chatId, GoodsName("🌳🌳Шишки Serious 6 - 90% Sat / 10% Ind - 5гр,"), GoodsPrice(1600, 3))
                 bot.sendMessage(chatId, GoodsName("🌳Шишки WW 1 гр.,"), GoodsPrice(300, 4))
                 bot.sendMessage(chatId, GoodsName("🌳🌳Шишки WW - 5гр,\n" +
                     "🎉🎉Акция для ЧИЛЛ-тусы!"), GoodsPrice(1300, 5))
                 bot.sendMessage(chatId, GoodsName("🍚🍚Амфетамин Фосфат 3гр.,"), GoodsPrice(850, 6))
                 bot.sendMessage(chatId, GoodsName("🌈 MDMA M&Ms - 230 mg - 2шт,"), GoodsPrice(750, 7))
                 bot.sendMessage(chatId, GoodsName("🌈MDMA Qdance - 230 mg - 2шт,"), GoodsPrice(750, 8))
                 bot.sendMessage(chatId, GoodsName("🍄Грибы Pink Buffalo 1гр,"), GoodsPrice(300, 9))
                 bot.sendMessage(chatId, GoodsName("🍄🍄Грибы Pink Buffalo 3гр,"), GoodsPrice(850, 10))
                 bot.sendMessage(chatId, GoodsName("♦️👁‍🗨♦️LSD-25 160 mkg -1 шт"), GoodsPrice(850, 11))
                 bot.sendMessage(chatId, GoodsName("👁‍🗨♦️👁‍🗨LSD-25 160 mkg -5 шт"), GoodsPrice(900, 12))
                 bot.on('callback_query', function (data) {
                     var answer = data.data

                     console.log(answer)
                     if(answer > 0) {
                         console.log("11")
                         compare = answer
                         console.log(compare)
                     }

                 })
                 bot.on('callback_query', function (data) {
                     if(data.data > 0){
                         bot.sendMessage(chatId, "Выберите способ оплаты", {
                             reply_markup: {
                                 inline_keyboard: [
                                     [   {
                                         text: "EasyPay",
                                         callback_data: "Easy"
                                     },
                                         {
                                             text:"Bitcoin",
                                             callback_data: "BTC"
                                         }
                                     ]
                                 ]
                             }
                         })
                     }
                 })
                 bot.on("callback_query", function (data) {
                     var money
                     if(data.data == "Easy") money = 1
                     else if(data.data == "BTC") money = 2
                     console.log(data.data)
                     if((money == 1) || (money == 2)){
                         if(compare == 1 ) bot.sendMessage(chatId, Buying("🍚 Амфетамин Фосфат 1гр.,", 350, money), {parse_mode: "HTML"})
                         else if(compare == 2 ) bot.sendMessage(chatId, Buying("🌳 Шишки Serious 1 гр.,", 400, money), {parse_mode: "HTML"})
                         else if(compare == 3 ) bot.sendMessage(chatId, Buying("🌳🌳Шишки Serious 6 - 90% Sat / 10% Ind - 5гр,", 1600, money), {parse_mode: "HTML"})
                         else if(compare == 4 ) bot.sendMessage(chatId, Buying("🌳Шишки WW 1 гр.,", 300, money), {parse_mode: "HTML"})
                         else if(compare == 5 ) bot.sendMessage(chatId, Buying("🌳🌳Шишки WW - 5гр,\n", 1300, money), {parse_mode: "HTML"})
                         else if(compare == 6 ) bot.sendMessage(chatId, Buying("🍚🍚Амфетамин Фосфат 3гр.,", 850, money), {parse_mode: "HTML"})
                         else if(compare == 7 ) bot.sendMessage(chatId, Buying("🌈 MDMA M&Ms - 230 mg - 2шт,", 750, money), {parse_mode: "HTML"})
                         else if(compare == 8 ) bot.sendMessage(chatId, Buying("🌈MDMA Qdance - 230 mg - 2шт,", 750, money), {parse_mode: "HTML"})
                         else if(compare == 9 ) bot.sendMessage(chatId, Buying("🍄Грибы Pink Buffalo 1гр,", 300, money), {parse_mode: "HTML"})
                         else if(compare == 10 ) bot.sendMessage(chatId, Buying("🍄🍄Грибы Pink Buffalo 3гр,", 850, money), {parse_mode: "HTML"})
                         else if(compare == 11 ) bot.sendMessage(chatId, Buying("♦️👁‍🗨♦️LSD-25 160 mkg -1 шт", 850, money), {parse_mode: "HTML"})
                         else if(compare == 12 ) bot.sendMessage(chatId, Buying("👁‍🗨♦️👁‍🗨LSD-25 160 mkg -5 шт", 900, money), {parse_mode: "HTML"})
                     }
                     /*if(compare == 1 ) bot.sendMessage(chatId, Buying("Кокс", 105, money), {parse_mode: "HTML"})
                     else if(compare == 2 ) bot.sendMessage(chatId, Buying("ЛСД", 150, money), {parse_mode: "HTML"})
                     else if(compare == 3 ) bot.sendMessage(chatId, Buying("Неідомо", 125, money), {parse_mode: "HTML"})*/
                 })
                 //bot.action("2")
                 //bot.on("callback_query", data => {
                 //cosole.log(data.data)
                 /* var callback = data.data
                  if(callback == 1) {
                      comparedator = 1
                      console.log(comparedator)
                  }else if(data.data == 2)   {
                      comparedator = 2;
                  console.log(comparedator)
                  }else if(data.data == 3)    {
                      comparedator = 3;
                      console.log(comparedator)
                  }
                  bot.sendMessage(chatId, "Выбирите способ оплаты", {
                      reply_markup: {
                          inline_keyboard: [
                              [   {
                                  text: "EasyPay",
                                  callback_data: "Easy"
                              },
                                  {
                                      text:"Bitcoin",
                                      callback_data: "BTC"
                                  }
                              ]
                          ]
                      }
                  }).then(() =>{bot.on("callback_query", datas => {console.log(datas.data)})})/*

                  /*bot.on("callback_query", data => {
                      callbackData = data.data
                      console.log(data.data)
                      if(data.data == "Easy") Buy = 1
                      else if(data.data == "BTC") Buy = 2
                      if(comparedator == 1 ) bot.sendMessage(chatId, Buying("Кокс", 105, Buy), {parse_mode: "HTML"})
                      else if(comparedator == 2 ) bot.sendMessage(chatId, Buying("ЛСД", 150, Buy), {parse_mode: "HTML"})
                      else if(comparedator == 3 ) bot.sendMessage(chatId, Buying("Неідомо", 125, Buy), {parse_mode: "HTML"})
                  })*/
                 /*switch (callback) {
                     case "1":
                         bot.sendMessage(chatId, "Выбирите способ оплаты", {
                             reply_markup: {
                                 inline_keyboard: [
                                     [   {
                                         text: "EasyPay",
                                         callback_data: "Easy"
                                     },
                                         {
                                             text:"Bitcoin",
                                             callback_data: "BTC"
                                         }
                                     ]
                                 ]
                             }
                         })
                         comparedator = 1;
                         console.log(1)
                         break
                     case "2":
                         bot.sendMessage(chatId, "Выбирите способ оплаты", {
                             reply_markup: {
                                 inline_keyboard: [
                                     [   {
                                         text: "EasyPay",
                                         callback_data: "Easy"
                                     },
                                         {
                                             text:"Bitcoin",
                                             callback_data: "BTC"
                                         }
                                     ]
                                 ]
                             }
                         })
                         comparedator = 2;
                         console.log(2)
                         break
                     case "3":
                         bot.sendMessage(chatId, "Выбирите способ оплаты", {
                             reply_markup: {
                                 inline_keyboard: [
                                     [   {
                                            text: "EasyPay",
                                            callback_data: "Easy"
                                         },
                                         {
                                             text:"Bitcoin",
                                             callback_data: "BTC"
                                         }
                                     ]
                                 ]
                             }
                         })
                         comparedator = 3;
                         console.log(3)
                         break
                 }
                 bot.on("callback_query", function (datas){
                     callbackData = datas.data
                     if(callbackData == "Easy") Buy = 1
                     else if(callbackData == "BTC") Buy = 2
                     if(comparedator == 1 ) bot.sendMessage(chatId, Buying("Кокс", 105, Buy), {parse_mode: "HTML"})
                     else if(comparedator == 2 ) bot.sendMessage(chatId, Buying("ЛСД", 150, Buy), {parse_mode: "HTML"})
                     else if(comparedator == 3 ) bot.sendMessage(chatId, Buying("Неідомо", 125, Buy), {parse_mode: "HTML"})
                 })*/
                 //})
                 /*sendGoodsByQuery(chatId)*/}
             break
         case kb.back:
             bot.sendMessage(chatId, "Головне меню", {
                 reply_markup: {
                     keyboard: keyboard.home,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.home.settings:
             bot.sendMessage(chatId, "Настройки", {
                 reply_markup: {
                     keyboard: keyboard.settings,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.settings.office:
             bot.sendMessage(chatId, "Вибор района", {
                 reply_markup: {
                     keyboard: keyboard.offices,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
         case kb.office:
             bot.sendMessage(chatId, "Вибор района", {
                 reply_markup: {
                     keyboard: keyboard.offices,
                     one_time_keyboard: true,
                     resize_keyboard: true
                 }
             })
             break
     }

     //if(Office > 0 && Office < 15) bot.sendMessage(msg.chat.id,"Ви вибрали відділення номер " + Office)
 })

bot.onText(/\/check/, msg =>{
    const text = "К сожалению, платеж не найден. Если вы произвели оплату, но видите это сообщение, подождите 5 минут и проверьте оплату еще раз  \n" +
        "\n" +
        "♦️ВНИМАТЕЛЬНО читайте инструкцию по оплате на вкладке /help♦️\n" +
        "\n" +
        "Для того, чтобы вернуться к выбору городов нажмите \n" +
        "➡️ /start, либо напишите любое сообщение."
    bot.sendMessage(helper.getChatId(msg), text)
})
 bot.onText(/\/lastorder/, msg =>{
     const text = "У вас нет заказов.\n" +
         "Нажмите 👉 /start для того, чтобы вернуться к выбору отделения."
     bot.sendMessage(helper.getChatId(msg), text)
 })
 bot.onText(/\/settings/, msg =>{
     bot.sendMessage(helper.getChatId(msg), "Настройки", {
         reply_markup: {
             keyboard: keyboard.settings,
             one_time_keyboard: true,
             resize_keyboard: true
         }
     })
 })
 bot.onText(/\/office/, msg =>{
     bot.sendMessage(helper.getChatId(msg), "Вибор района", {
         reply_markup: {
             keyboard: keyboard.offices,
             one_time_keyboard: true,
             resize_keyboard: true
         }
     })
 })
 bot.onText(/\/help/, msg =>{
     bot.sendMessage(helper.getChatId(msg), "Добро пожаловать! \n" +
         "Уважаемый клиент, будьте внимательны при оплате💰 и выборе✔️ товара.\n" +
         "Перед покупкой товара, бот предложит Вам город, товар и удобный для Вас район, после чего, выдаст реквизиты для оплаты.\n" +
         "Внимательно перед покупкой проверяйте товар и выбранный район. Обязательно записывайте реквизиты для оплаты (номер кошелька и комментарий).\n" +
         "\n" +
         "При оплате, Вам необходимо обязательно указать  комментарий, который выдал Вам бот, иначе оплата не будет засчитана в автоматическом режиме и Вы не получите адрес.\n" +
         "Всегда записывайте номер заказа и комментарий, с помощью них, вы сможете узнать статус заказа (получить адрес) в любой момент и с любого устройства. Сохраняйте чек до тех пор, пока не получили адрес. Присутствует возможность производить несколько платежей с одним комментарием. Платежи суммируются и в случае, если сумма полная - Вы получаете свой адрес.\n" +
         "Будьте внимательны, кошелек, комментарий и сумма должны быть точными. Если возникли какие-либо проблемы - обращайтесь к оператору.\n" +
         "\n" +
         "После внесения оплаты, нажмите кнопку проверки платежа и если Ваша оплата будет найдена - Вы получите адрес в автоматическом режиме.\n" +
         "\n" +
         "Для того, чтобы вернуться на стартовую страницу к выбору городов, просто нажмите /start или напишите любое сообщение.\n" +
         "\n" +
         "Приятных покупок!🚀🚀🚀", {
         reply_markup: {
             keyboard: keyboard.home,
             one_time_keyboard: true,
             resize_keyboard: true
         }
     })
 })
 /*function sendGoodsByQuery(chatId, query) {
     Good.find(query).then(goods => {
         const html = goods.map((g, i) => {
             return g.name + "\n"+
                    g.description + "\n"
         }).join("\n")

         bot.sendMessage(chatId, html, {
                 parse_mode: "HTML"
         })
     })
 }*/
 function GoodsName(Name) {
     var texts = "<strong> " + Name + " </strong>"
     return texts
 }
 function GoodsPrice(Price, data) {
     var price = {
         reply_markup: {
             inline_keyboard: [
                 [{
                     text: Price + " грн.",
                     callback_data: data
                 }]
             ]
         },
         parse_mode: "HTML"
     }
     return price
 }
 function Buying(Name, price, value) {
     const Easy = "<strong>Вы приобретаете</strong>\n" +
     Name +
     "\n💰 Стоимость " + price + " грн. 💰\n" +
     "🏠 района номер " + Office + "\n" +
     "( для смены товара нажмите 👉 /shop ) \n"+
     "( для смены района нажмите 👉 /settings ) \n\n"+
     "Для приобретения выбранного товара,\n" +
     "оплатите <strong>" + price + "</strong> грн на счет EasyPay:\n <strong>" +
     EasyPayWallet + "</strong>\n\n"+
         "Заказ <strong>№" + random + "</strong> запомните его.\n" +
     "\n" +
     "После оплаты нажмите \n" +
         "👉 /check_" + random +", бот проверит оплату, подтвердит заказ и сразу и выдаст адрес. \n" +
     "\n" +
     "Чтобы отказаться от заказа, нажмите 👉 /start\n" +
     "\n" +
     "Для того, чтобы посмотреть последний Ваш заказ\n" +
     "нажмите 👉 /lastorder"
     const BTC = "<strong>Вы приобретаете</strong>\n" +
         Name +
         "\n💰 Стоимость " + price + " грн. 💰\n" +
         "🏠 район номер " + Office + "\n" +
         "( для смены товара нажмите 👉 /shop ) \n"+
         "( для смены района нажмите 👉 /settings ) \n\n"+
         "Для приобретения выбранного товара,\n" +
         "оплатите <strong>" + (price * 0.0000055) + "</strong> на Bitcoin кошелек:\n" +
         "<strong>" + BitcoinWallet + "</strong>\n" +
         "\n" +
         "Заказ <strong>№" + random + "</strong> запомните его.\n" +
         "\n" +
         "После оплаты нажмите \n" +
         "👉 /check_" + random +", бот проверит оплату, подтвердит заказ и сразу и выдаст адрес. \n" +
         "\n" +
         "Чтобы отказаться от заказа, нажмите 👉 /start\n" +
         "\n" +
         "Для того, чтобы посмотреть последний Ваш заказ\n" +
         "нажмите 👉 /lastorder"
     if(value === 1) return Easy
     else if(value === 2)return BTC

 }
 function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
