// creating a structure using mongoose.Schema

const mongoose = require ("mongoose")    // pulling the mongoose module which we need for this app

const filmSchema = mongoose.Schema({     //creating a variable and using a 'mongoose.schema model' - must be followed = define how the data is stored
    name: {                              // object notation
        type: String,
        required: true,
        unique: true
    },
    actor:{
        type: String
    },
    like: {
        type: String,
        required: true
    },
})

const Film = mongoose.model("Film", filmSchema) // takes a 'name' and 'schema' and assigns a schema to that name, and it all gets assigned to the variable name 'Film'

module.exports = Film