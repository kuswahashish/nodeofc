// const nfnc = function(x){
//     return x*x
// }
//👆 Normal function below is arrow function
// const afnc = (x) => {
//     return x*x
// }

//for single line return can be written as 
// const square =  (x) => x*x;

// console.log(square(3))
// arrow function for object cz they not creating own this object 
// const event = {
//     name  : 'Birthday Party',
//     guestList : ['ashish', 'mike','joe'],
//     printGuestList() {
//             console.log("Guest List for "+this.name)
//             this.guestList.forEach((guest) => {
//                 console.log(guest + "is attending "+this.name)
//             })
//       }
// }

// event.printGuestList()

//Challenge arrow-3 vid-9

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTaskToDo(){
        return this.tasks.filter((task) => task.completed === false)
        
    }
}

console.log(tasks.getTaskToDo())