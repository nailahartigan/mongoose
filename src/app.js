require ("./db/connection")  // need connection file to run - will run on line 1 until close method input
const mongoose = require ("mongoose")  // using mongoose from the library
const {addMovie, listMovies, updateMovie, deleteMovie} = require ("./films/film.methods") //functions using Create,Read,Update,Delete
const command = process.argv[2] // CLI input - starts from index zero. node.js=0 app.js=1 command=2 

const app = async () => {

    if (command === "add"){
        await addMovie({
            name: process.argv[3],
            actor: process.argv[4],
            like: process.argv[5],
        })

    } else if (command === "list"){
        await listMovies({})
    
    } else if (command === "update"){
        const updateObject = {
        name: process.argv[3],
        newName: process.argv[4]
        }
        await updateMovie(updateObject)
    


    }else if (command === "delete"){
        const name = process.argv[3]
        await deleteMovie(name)
    }

    mongoose.disconnect()
}

app()