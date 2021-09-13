const mongoose = require ("mongoose")      // pulling from npm library
require ("dotenv").config()               // pulling .env - config is a method

const connection = async () => {                       // connection to the MONGO URI database - this needs to be async
    try {                                              // try to catch errors
        await mongoose.connect(process.env.MONGO_URI) // *await* thats why connection is async and this diverts from MONGO to MONGOOSE (takes multiple methods ~ connect is a method) If line 6 fails. it will go straight to line 9
        console.log("Successfully connected")         // let the user know if its been successful/connected to MONGODB (in the terminal)
    } catch (error){
        console.log(error)                             // lets user know there is an error
    }
}

connection()                                          // call the function