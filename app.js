// npm i yargs - For installing argument support package
const yargs = require('yargs')
const notes = require('./notes.js');
yargs.version('1.1.0')
// Create add command
yargs.command({
    command : "add",
    describe : "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true ,
            type: 'string' 
        },
        description: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.description)
    }
})
// Create remove command
yargs.command({
    command : "remove",
    describe : "Remove a new note",
    builder : {
        title: {
            describe : 'Remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
// Create list command
yargs.command({
    command : "list",
    describe : "List notes",
    handler(){
        notes.listNotes()
    }
})
// Create read command
yargs.command({
    command : "read",
    describe : "Read notes",
    builder: {
        title: {
            describe : 'Read title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
yargs.parse()

