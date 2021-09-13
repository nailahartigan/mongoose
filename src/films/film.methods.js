const Film = require ("./film.model") // gives access to bunch of methods for mongoose

exports.addMovie = async (newFilm) => {   // addMovie is recieving data object, (see app.js) and data obj is a newFilm. Should match the model. Needs to be async
    try{                                  
        const movie = new Film(newFilm)   // importing a Film, using methods from mongoose - needs to be capital lettr. See line 1-variable. this will create a newFilm, and this needs to be passed in the parenthesis & will be saved as movie variable
        await movie.save()                // this will save it to the database. and using the new variable 'movie' created on line 5. Save is method
    } catch (error){                      // catch for errors
        console.log(error)
    }
}

exports.listMovies = async () => {        
    const list = await Film.find()       // variable list will will search through everything from .find()
    console.log(list)
}

exports.updateMovie = async (updateObject) => {     //parenthesis name needs to be different from func name. This takes 2 argument= filter + what u updating it with. So we need a key + update name. If First name returns true, moves onto second and apply update 
    await Film.updateOne({name: updateObject.name}, {$set: {name:updateObject.newName}}) //Film.updateOne will update the movie database. using object notation
}   // $set = im going to change the value what im going to do next.

exports.deleteMovie = async (deleteObject) => {
    await Film.deleteOne({name: deleteObject.name})
}