const fs =  require('fs');
const chalk = require('chalk')



const readNote = (title) =>{
  const notes = loadNotes()
  const find = notes.find((note) => note.title === title)
  // console.log(find)
  if(find){
    console.log(chalk.yellow.inverse("Search Note Title is :" + title))
    console.log("========================================")
    console.log (chalk.green.inverse("Title : "+ find.title))
    console.log ("Data : "+ find.body)
    console.log("========================================")

  }
  else{
  console.log(chalk.yellow.inverse("Search Note Title is :" + title))
  console.log("========================================")
  console.log (chalk.red.inverse("No Data Found!"))
  console.log("========================================")

  
  }
}


const addNote = (title,body) => {
const notes = loadNotes()
// const duplicate =  notes.filter((note) => note.title === title)
  const duplicate = notes.find((note) => note.title === title)
  if(!duplicate)
  {
    notes.push({
      title: title,
      body: body
    })
    saveNote(notes)
    console.log("========================================")
    console.log(chalk.green.inverse("Note Added Successfully!"))
    console.log("========================================")

  }
  else
  {
    console.log("========================================")
    console.log(chalk.red.inverse("Note Title is Taken!"))
    console.log("========================================")

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
  console.log("========================================")
  console.log("remove function called")
  console.log("title to remove note : ",title)
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  if(notes.length > notesToKeep.length)
  {
    console.log("========================================")
    console.log(chalk.green.inverse('Note Removed Sucessfully'))
    console.log("========================================")

    saveNote(notesToKeep)
  }
  else
  {
    console.log("========================================")
    console.log(chalk.red.inverse('No Note Found'))
    console.log("========================================")

  }
  }

const list = () => {
    const notes =loadNotes()
    console.log(chalk.inverse('Your Notes'))
    console.log("========================================")
    notes.forEach((note) =>{
      console.log( "Title : " + note .title +"|| Note : " + note .body )
      })

}

module.exports = {
   
    addNote : addNote,
    removeNote : removeNote,
    list : list,
    readNote : readNote
} 