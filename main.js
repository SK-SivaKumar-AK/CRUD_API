/* Import the packages */
const express = require('express');


/* initilize the package */
const app = express();
const PORT = 3000;


/* add another file to main file */
const { routers } = require('./routes/movies.route');
const { connectDB } = require('./database/db.connection');


/* DB connect triggered */
//app.use(connectDB);   - For every request
connectDB();


/* Middlewares */
app.use(express.json());    //for raw json
app.use(express.urlencoded( { extended : true } ));  // for urlencode data



/* Routes */
app.get('/' , (req , res) => {
    res.json({msg : "SK"});
});

/* CRUD Function */
app.use('/movies' , routers);




/* Port listen */
app.listen(PORT , () => {
    console.log(`Server is running on ${PORT} port`);
});