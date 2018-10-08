const kb = require("./keyboard-buttons")

module.exports = {
    home: [
        [kb.home.goods],
        [kb.home.settings]
    ],
    goods: [
        [kb.back]
    ],
    offices: [
        [kb.offices.Off1, kb.offices.Off2, kb.offices.Off3, kb.offices.Off4],
        [kb.offices.Off5, kb.offices.Off6, kb.offices.Off7, kb.offices.Off8],
        [kb.offices.Off9, kb.offices.Off10, kb.offices.Off11, kb.offices.Off12]
    ],
    KharkivOffices: [
        [kb.offices.Off1, kb.offices.Off2, kb.offices.Off3, kb.offices.Off4],
        [kb.offices.Off5, kb.offices.Off6, kb.offices.Off7, kb.offices.Off8]
    ],
    OdessaOffices: [
        [kb.offices.Off1, kb.offices.Off2, kb.offices.Off3],
        [kb.offices.Off4, kb.offices.Off5]
    ],
    LutskOffices: [
        [kb.offices.Off1, kb.offices.Off2, kb.offices.Off3],
        [kb.offices.Off4, kb.offices.Off5]
    ],
    LvivOffices: [
        [kb.offices.Off1, kb.offices.Off2, kb.offices.Off3],
        [kb.offices.Off4, kb.offices.Off5]
    ],
    settings: [
        [kb.settings.city],
        [kb.back]
    ],
    chose: [
        [kb.office]
    ],
    payment: [
        [kb.payment.BTC, kb.payment.EasyPay],
        [kb.back]
    ],
    cities: [
        [kb.cities.kyiv],
        [kb.cities.lviv, kb.cities.odessa],
        [kb.cities.kharkiv, kb.cities.lutsk]
    ]
}
