const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if(!address){
    console.log(chalk.red.inverse("Please provide an Address to seach for Weather.!"))
}
else{
geocode(address,(error,{latitude,longitude,location} = {}) => {
    if(error) {
        return console.log('Error1')
    }
    forecast(latitude,longitude, (error,ForecastData) => {
        if(error) {
            return console.log('Error2')
        }
        console.log(chalk.green.inverse('Weather Forecast'))
        console.log('Location : ',location)
        console.log('Forecast : ',ForecastData)
    })
})
}


