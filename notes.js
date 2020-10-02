const fs = require('fs')
const chalk = require('chalk')

const addNotes = function(title, description){
    const notes = loadNotes()
    const dupNotes = notes.filter(function(note){
        return note.title === title
    })

    if(dupNotes.length === 0)
    {
        notes.push({
            title: title,
            description: description 
        })
        saveNotes(notes)
        console.log(chalk.green('Notes added..!'))
    } else {
        console.log(chalk.red('Note title already taken..!'))
    }
    
}

const removeNotes = function(title){
    const notes = loadNotes()
    const noteRemove = notes.filter(function(note){
        return note.title !== title    
    })

    if(notes.length > noteRemove.length){
        console.log(chalk.green('Note removed!'))
        saveNotes(noteRemove)
    } else {
        console.log(chalk.red('Note not found!'))
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    // console.log(dataJSON);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString();
        return JSON.parse(data)
    } catch(e) {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes
}
