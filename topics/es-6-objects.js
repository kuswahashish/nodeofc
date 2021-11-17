// const name = 'ashish'
// const age = '22'
//shorthand 
// const user = {
//     name,      //here name is same as variable so we can directly use it here not same for age
//     userage : age 

// }
// console.log(user.name)
// console.log(user.userage)

//destruction of object

const user = {
    name : 'test', 
    age : '18',
    email : 'test@example.com'
}

const {name,age,email,address = null} = user //we can take objects properties we want and set their value if not defined in object

console.log(name,age,email,address)