const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes =  require('./notes.js')

yargs.command({
    command: 'add', 
    describe: 'adding the notes',
    builder: {
        title : {
            describe : "Note Title",
            demandOption: true,
            type: 'string'
        },
        body : {
            describe : "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body) 
    }
})

yargs.command({
    command: 'remove', 
    describe: 'Removing the notes',
    builder: {
        title : {
            describe : "Note Title",
            demandOption: true,
            type: 'string'
        },
        body : {
            describe : "Note body",
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv){
           notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'search', 
    describe: 'Updating the notes',
    builder: {
        title : {
            describe : "search Title",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
           notes.readNote(argv.title)
    }
})
yargs.command({
    command: 'list', 
    describe: 'Listing the notes',
    handler: function(){
        notes.list()
    }
})
yargs.parse()
// console.log(yargs.argv)