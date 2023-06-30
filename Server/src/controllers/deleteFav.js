const {Favorite} = require("../DB_connection");
const { all } = require("../routes");

const deleteFav = async(req,res)=>{
    try{
         const {id} = req.params;
        await Favorite.destroy({where:{id}})
        const AllFav = await Favorite.findAll()
        return res.json(AllFav)
    }catch(error){
        res.status(500).send(error.message)
    }

}


module.exports = deleteFav