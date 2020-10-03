const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, description) => {
    const notes = loadNotes()
    const dupNote = notes.find((note) => note.title === title)

    if(!dupNote)
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
    const noteRemove = notes.filter((note) => note.title !== title)

    if(notes.length > noteRemove.length){
        console.log(chalk.green('Note removed!'))
        saveNotes(noteRemove)
    } else {
        console.log(chalk.red('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    // console.log(dataJSON);
    fs.writeFileSync('notes.json', dataJSON);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow.inverse('Your Notes'))
    notes.forEach((list) => {
        console.log(list.title)
    });
    
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.green.bold(note.title)+' ( '+note.description+' )')
    } else {
        console.log(chalk.red('Oops, data not Found'))
    }
}
const loadNotes = () => {
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
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}
