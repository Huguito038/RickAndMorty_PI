const {User} = require("../DB_connection")

const login= async(req,res)=>{
    try{
        const {email,password} = req.query;
        if(!email || !password){res.status(400).send("Faltan datos")}
        const user = await User.findOne({where:{email}})
        if(!user) return res.status(404).send("Usuario no encontrado")
        return user.password === password
        ? res.json({access: true})
        : res.status(403).send(error.message)
         
    }catch(error){
        res.status(500).send(error.message)
    }}



module.exports = login