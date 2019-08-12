const mongoose = require('mongoose');
const config = require('config');

//get our mongoDB Atlas Access database
const DB = config.get('mongoURI');


const connectDB = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true
        });

        console.log('Database Connected!');
    }
    catch(err){

        console.log(err.message);

        process.exit(1);
    }
} 

module.exports = connectDB;