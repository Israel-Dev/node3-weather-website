const request = require('postman-request')

//Geocoding

const geocode = (address, callback) => {
    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiaXpyYWVsMzciLCJhIjoiY2tmbzdhdmIxMXMyYjMxcWg0ajM4YmxxMCJ9.87sCblBlo2dbBkdg9U79Dg&limit=1`;

    request({ url, json: true}, (Error, response, {features}) => {
        if (Error) {
            callback('Unable to connect!');
        } else if (!features.length) {
            callback('Impossible to find location');
        } else {
            callback(null, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}

module.exports = {
    geocode
}