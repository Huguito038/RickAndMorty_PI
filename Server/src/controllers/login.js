const e = require("express")
const users = require("../utils/users")


const login = (req, res)=>{
    const {email, password} = req.query
    const usuario_encontrado = users.find((user)=> user.email === email && user.password === password)

    if(usuario_encontrado){
        res.status(200).json({access:true})
    }else{
        res.status(404).json({acccess:false})
    }
}




module.exports =login