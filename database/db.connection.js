/* Import the packages */
const mongoose = require('mongoose');
const dotEnv = require('dotenv');


/* Initilize env config */
dotEnv.config();


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Mongodb is connected...');
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
};


module.exports = {
    connectDB
}