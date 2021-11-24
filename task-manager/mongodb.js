const mongodb = require('mongodb');
const client = mongodb.MongoClient;
const conurl = 'mongodb://127.0.0.1:27017/'
const dbname = 'task-manager'
client.connect(conurl, {useNewUrlParser : true},(err, client) => {
    if(err)
    {
        return console.error("error", err)
    }
    console.log('connection sucessfull...')
    const db = client.db(dbname)
    // For insert One document at once.
    // db.collection('test').insertOne({
    //     name : 'test',
    //     language : 'english',
    //     age : '22'
    // })
    //For multiple documents at one.
    // db.collection('users').insertMany([
    // {
    //     name : 'ashish',
    //     age : '22'
    // },
    // {
    //     name : 'pooja',
    //     age : '25'
    // },
    // {
    //     name : 'divya',
    //     age : '25'
    // },
    // {
    //     name : 'axay',
    //     age : "28"
    // }
    // ],(err, result) => {
    //     if(err) {
    //         return console.log("Error : ",err)
    //     }   
    //     console.log(result)
    // })

    //Insertion of New TASK in TASK Collection.
    // db.collection('tasks').insertMany([
    //     {
    //         name : 'task1',
    //         status : 'false'
    //     },
    //     {
    //         name : 'task2',
    //         status : 'true'
    //     },
    //     {
    //         name : 'task3',
    //         status : 'false'
    //     }
    // ],(err, result) => {
    //     if(err){
    //         return console.log("Error while Adding Task : ",err)
    //     }
    //     console.log(result.ops)
    // })
    //  Find Document in collection
    // db.collection('tasks').find({status : 'false'}).toArray((err,user)=>{
    //     if(err){
    //         return console.error('error', err)
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').find({status : 'true'}).count((err,count)=>{
    //     if(err){
    //         return console.error('error', err)
    //     }
    //     console.log(count)
    // })
    // Can Update single doc using UpdateOne else many
    // db.collection('users').updateMany({name: 'puja'},
    // {$set :{ name : 'pooja' }}).then((result) => {
    //     console.log("Updated successfully!")
    // }).catch((err) => {
    //     console.log("Error")
    // })

    //Delete document

    // db.collection('users').deleteOne({ name:'divya'}).then((result) => {
    //     console.log("Deleted successfully!")
    // }).catch((err) => {
    //     console.log("Error while deletingt")
    // })

    // db.collection('users').deleteMany({ name:'divya'}).then((result) => {
    //     console.log("Deleted successfully!")
    // }).catch((err) => {
    //     console.log("Error while deletingt")
    // })
  
  
})