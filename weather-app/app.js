const request = require('request')


// to get weather forcast from weatherstack 
const forcasturl = 'http://api.weatherstack.com/current?access_key=440517e0775b4a6828414dfa7c48d676&query=23.0830,72.5463&unit=f'
request({url:forcasturl , json:true},(error,response) => {
    if(error){
        console.log("Error : Connectivity Error") 
    }
   else if(response.body.error){
        console.log("Error : Location Not Found")  
    }else{
        console.log("Today's Temperature is "+response.body.current.temperature)  
        console.log("its "+response.body.current.weather_descriptions)
    }

})


 // to get coordinator from mapbox geocoding to use in weatherstack 
 geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chandlodiya.json?access_token=pk.eyJ1IjoiYXNoaXNoa3Vzd2FoIiwiYSI6ImNrdzIzbDZyZDFmMHUycG5vd3ZjMTRlNzkifQ.0YMDGUpA9ME2Wc6p4OP0yQ&limit=1'
 request({url:geocodeurl , json:true},(error,response) => {
    if(error){
        console.log("Error : Connectivity Error") 
    }
   else if(response.body.error){
        console.log("Error : Location Not Found")  
    }
    else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude,longitude)
    }
  
})

