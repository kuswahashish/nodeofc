// showing asynchronous thing
setTimeout(() => {
    console.log('2 second timeout')
}, 2000);
//it will print name first then timeout message
const names = ['ashish','aakash','jay','cat']

const shortname = names.filter((name) => {
    return name.length <= 4
})

console.log(shortname)
// sync thing where it will use callback and now here it will wait timout then print 
const geocode = (address,callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        console.log('time out of 2 sec')
        callback(data)
    },2000)
}

geocode('ahmedabad',(data) => {
    console.log(data)
})

// Callback challange 

const add = (x,y,callback) => {
    setTimeout(() =>{
        sum = x+y
    callback(sum)
    },2000)
}
add(5,5,(sum)=> {
    console.log(sum)
})