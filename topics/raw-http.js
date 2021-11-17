const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=440517e0775b4a6828414dfa7c48d676&query=23.0830,72.5463&unit=f'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) =>{
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error',(error)=> {
    console.log('Error : ' ,error)
})
request.end()