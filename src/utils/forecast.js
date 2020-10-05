const request = require('postman-request')



const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=acff77b625dc95c2b61385d9400fc710&query=${longitude},${latitude}&units=f`;

    request({ url, json: true }, (Error, response, {error, current}) => {
        if (Error) {
            callback("Unable to connect!", null);
        } else if (error) {
            callback('Unable to find the Location!', null);
        } else {
            callback(null, `${current.weather_descriptions[0]}: It's currently ${current.temperature} degress out and it feels like ${current.feelslike}
            Wind speed: ${current.wind_speed}`);
        }
    })
}

module.exports = {
    forecast
}