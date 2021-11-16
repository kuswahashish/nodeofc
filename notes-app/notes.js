const fs =  require('fs');
const chalk = require('chalk')



const getNote = () =>{
  return 'Yout Notes..'
}


const addNote = (title,body) => {
const notes = loadNotes()
const duplicate =  notes.filter((note) => note.title === title)
  if(duplicate.length === 0)
  {
    notes.push({
      title: title,
      body: body
    })
    saveNote(notes)
    console.log(chalk.green.inverse("Note Added Successfully!"))
  }
  else
  {
    console.log(chalk.red.inverse("Note Title is Taken!"))
  }

}

const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () =>{
  try{
      const dataBuffer =  fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  }catch(e){
      return []
  }
}

const removeNote =(title) => {
  console.log("remove function called")
  console.log("title to remove note : ",title)
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  if(notes.length > notesToKeep.length)
  {
    console.log(chalk.green.inverse('Note Removed Sucessfully'))
    saveNote(notesToKeep)
  }
  else
  {
    console.log(chalk.red.inverse('No Note Found'))
  }
  }

const list = () => {
    const notes =loadNotes()
    console.log(chalk.inverse('Your Notes'))
    console.log("==========")
    notes.forEach((note) =>{
      console.log(note)
    })

}

module.exports = {
    getNote : getNote,
    addNote : addNote,
    removeNote : removeNote,
    list : list
} 