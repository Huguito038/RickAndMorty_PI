export default (data) =>{
    let errors={}

    if(!data.email.includes("@")){
        errors.email1 = "El correo no es valido..."
    }

    if(!data.email){
        errors.email2 = "Ingrese un email..."
    }

    if(data.email.length > 35){
        errors.email3 = "Exceso de caracteres..."
    }

    if(!/\d/.test(data.password)){
        errors.pass1 = "Debe tener al menos un numero..."
    }

    if(data.password.length<6 || data.password.length>10 ){
        errors.pass2 = "Debe tener entre 6 y 10 caracteres..."
    }
    return errors
}