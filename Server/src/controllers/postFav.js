const {Favorite} = require("../DB_connection")

const postFav = async(req,res)=>{
    try{
        const {name, origin, status, image, species , gender} = req.body;
        if(!name || !origin || !status || !image  || !species || !gender){
            return res.status(401).send("Faltan datos")}  

        await Favorite.findOrCreate({where: {name, origin, status, image, species , gender}});

        const favChars = await Favorite.findAll()

        return res.json(favChars)
        
    }catch(error){
        return res.status(500).send(error.message)}
}
module.exports = postFav