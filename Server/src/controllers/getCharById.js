const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req,res)=>{
    const {id} = req.params;
    try{
        const {data} = await axios(`${URL}/${id}`)
        const{name,gender,origin,status,image,species} = data

        if(!data.name) throw Error(`Missing data for character with ID: ${id}`);

        const character = {
            id,
            name,
            gender,
            origin,
            status,
            image,
            species,
        }
        return res.status(200).json(character)
    }catch(error){
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
}


module.exports = getCharById
 