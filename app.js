const yargs = require('yargs')
const notes = require('./notes.js');
const { string } = require('yargs');
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
    handler: function(argv){
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
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})
yargs.parse()

