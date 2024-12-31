/* Import the packages */
const { movieModel } = require('../models/movies.model');

const  movieIndex = async (req , res) => {
    try{

        const movieListed = await movieModel.find();
        return res.status(200).json(movieListed);

    }catch(error){

        const errorMessage = {
            Error : error.message
        };
        return res.status(400).json(errorMessage);

    }
};

const movieCreate = async (req , res) => {
    //res.send(req.body);
    try{

        const createMovie = new movieModel({
            title : req.body.title,
            description : req.body.description
        });
        const movieCreated = await createMovie.save();
        return res.status(200).json(movieCreated);

    }catch(error){

        const errorMessage = {
            Error : error.message
        };
        return res.status(400).json(errorMessage);

    } 
    
};

const dataWantUpdate = async (req , res) => {
    try{

        const idWantUpdate = await movieModel.findById(req.params.id);

        if(idWantUpdate === null){
            const errorMessage = {
                Error : 'Cannot Find the Movie'
            };
            return res.status(404).json(errorMessage);
        }else{
            return res.status(200).json(idWantUpdate);
        }

    }catch(error){

        const errorMessage = {
            Error : error.message
        };
        return res.status(400).json(errorMessage);

    }
};

const movieUpdate = async (req , res) => {
    try{

        const updateMovie = {
            title : req.body.title,
            description : req.body.description
        };
        const movieUpdated = await movieModel.findOneAndUpdate( {_id : req.params.id} , updateMovie , { new: true } );
        return res.status(200).json(movieUpdated);

    }catch(error){

        const errorMessage = {
            Error : error.message
        };
        return res.status(400).json(errorMessage);

    }
};

const movieDelete = async (req , res) => {
    
    try{

        const movieDeleted = await movieModel.deleteOne( {_id : req.params.id});
        const successMessage = {
            Message : 'Movie Deleted'
        };
        return res.status(200).json(successMessage);

    }catch(error){

        const errorMessage = {
            Error : error.message
        };
        return res.status(400).json(errorMessage);

    }
};


module.exports = {
    movieIndex,
    movieCreate,
    dataWantUpdate,
    movieUpdate,
    movieDelete
}