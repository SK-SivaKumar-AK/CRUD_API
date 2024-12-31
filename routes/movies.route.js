/* Import the packages */
const express = require('express');


/* initilize the package */
const routers = express.Router();


/* add another file to main file */
const { movieIndex , movieCreate , dataWantUpdate , movieUpdate , movieDelete } = require('../controllers/movies.controller');



// Read the datas
routers.get('/' , movieIndex);

//Add the datas
routers.post('/' , movieCreate);

//get single datas
routers.get('/:id' , dataWantUpdate);

//Update the datas
routers.put('/:id' , movieUpdate);

//Delete the datas
routers.delete('/:id' , movieDelete);





/* Export this file */
module.exports = {
    routers
};