const Telegraf = require('telegraf');
const config = require("./src/config");
const weather = require('./src/weather');
const geocode = require('./src/geocode');
const {
    Markup
} = require('telegraf');
const countryjs = require('countryjs');
const request = require('request');

const bot = new Telegraf(config.TOKEN);

var NodeGeocoder = require('node-geocoder');

const request = require('request');

var temperature = (value) => {
    return Math.round((value - 32) * 5 / 9)
};

const request = require('request')

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: 'https://maps.google.com/maps/api/geocode/json?address=' + encodedAddress + '&key=AIzaSyBgbHO1L9600MkQEghUkA9Y_AzFTWF8yio&language=uk',
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Goggle servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            console.log(body.results[0].address_components[0].long_name)
            console.log(body.results[0])
            callback(undefined, {
                result: body,
                location: body.results[0].formatted_address,
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
}

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/6c93799f8e694b731ab0490b3d1e1987/${lat},${lng}?lang=uk`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: temperature(body.currently.temperature),
                apparentTemperature: temperature(body.currently.apparentTemperature),
                pressure: Math.round(body.currently.pressure),
                humidity: Math.round(body.currently.humidity * 100),
                windSpeed: Math.round(body.currently.windSpeed)
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

var options = {
    provider: 'google',

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyBgbHO1L9600MkQEghUkA9Y_AzFTWF8yio', // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
};

var text = () => {
    return `<strong>${address}</strong>
Currently temperature: ${result.temperature}
feels like: ${result.apparentTemperature}
pressure: ${result.pressure}
humidity: ${result.humidity}
windSpeed: ${result.windSpeed}`;
}

var geocoder = NodeGeocoder(options);
var address

bot.start(ctx => {
    ctx.reply('Custom buttons keyboard', Markup
        .keyboard([
            ['Search', Markup.locationRequestButton('😎 Send location')] // Row1 with 2 buttons
        ])
        .oneTime()
        .resize()
        .extra()
    );
});
bot.hears('Search', (ctx) => {
    ctx.reply('Pls. write city you want to find');
    bot.on('text', (ctx) => {
        geocodeAddress(ctx.message.text, (errorMessage, result) => {
            if (errorMessage) {
                ctx.reply(errorMessage);
            } else {
                address = result.address
                getWeather(result.lat, result.lng, (errorMessage, result) => {
                    if (errorMessage) {
                        ctx.reply(errorMessage);
                    } else {
                        var text = `<strong>${address}</strong>
Currently temperature: ${result.temperature}
feels like: ${result.apparentTemperature}
pressure: ${result.pressure}
humidity: ${result.humidity}
windSpeed: ${result.windSpeed}`;
                        ctx.reply(text, {
                            parse_mode: 'HTML'
                        });
                    }
                });
                // geocoder.reverse({lat:result.lat, lon:result.lng}, function(err, res) {
                //     console.log(res[0].city);
                //     request({
                //         url: 'https://maps.google.com/maps/api/geocode/json?address=' + res[0].city + '&key=AIzaSyBgbHO1L9600MkQEghUkA9Y_AzFTWF8yio&language=uk',
                //         json: true
                //     }, (error, response, body) => {
                //         if(error){
                //             console.log('Unable to connect to Goggle servers');
                //         }else if(body.status === 'ZERO_RESULTS'){
                //             console.log('Unable to find that address');
                //         }else if(body.status === 'OK'){
                //             address = body.results[0].formatted_address
                //             console.log(body.results[0].formatted_address);
                //         }
                //     });
                //   });


            }
        })
    });
})
bot.on('location', ctx => {
    geocoder.reverse({
        lat: ctx.message.location.latitude,
        lon: ctx.message.location.longitude
    }, function(err, res) {
        console.log(res[0].city);
        request({
            url: 'https://maps.google.com/maps/api/geocode/json?address=' + res[0].city + '&key=AIzaSyBgbHO1L9600MkQEghUkA9Y_AzFTWF8yio&language=uk',
            json: true
        }, (error, response, body) => {
            if (error) {
                console.log('Unable to connect to Goggle servers');
            } else if (body.status === 'ZERO_RESULTS') {
                console.log('Unable to find that address');
            } else if (body.status === 'OK') {
                console.log(body.results[0].address_components[0].long_name)
                address = body.results[0].formatted_address
            }
        });
    });
    getWeather(ctx.message.location.latitude, ctx.message.location.longitude, (errorMessage, result) => {
        if (errorMessage) {
            ctx.reply(errorMessage);
        } else {
            var text = `<strong>${address}</strong>
Currently temperature: ${result.temperature}
feels like: ${result.apparentTemperature}
pressure: ${result.pressure}
humidity: ${result.humidity}
windSpeed: ${result.windSpeed}`;
            ctx.reply(text, {
                parse_mode: 'HTML'
            })
        }
    });
});


bot.startPolling();
