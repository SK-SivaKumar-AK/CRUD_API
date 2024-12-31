/* Import the packages */
const mongoose = require('mongoose');


/* create table structure */
const movieSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true,
    }
});



/* Create table */
const movieModel = mongoose.model('Movies' , movieSchema);


/* Exports the table file */
module.exports = {
    movieModel
};