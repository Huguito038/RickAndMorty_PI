import estilo from "./form.module.css"
import { useState } from "react"
import validations from "../validations"
import axios from "axios"

const Form = ({login})=>{

    const [userData, setData] = useState({
        email: "",
        password: ""
     })
     const [errors, setErrors] = useState({})

     const handelChange = (event)=>{
        setErrors(validations({...userData,[event.target.name] : event.target.value}))
        setData({...userData,[event.target.name] : event.target.value})
     }
     const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData)
     }

    return (
        <div className={estilo.contenedor}>
            <div className={estilo.carta}>
                <h3 className={estilo.space}>...</h3>
                 <h3 className={estilo.login}>Login</h3>
            <form>
                <div className={estilo.email}>
                    <label htmlFor="email" className=""> Email:</label>
                    <input onChange={handelChange} value={userData.email} type="text" name="email" id="user-email" className={estilo.input} />
                    {errors.email1 ? (<p>{errors.email1}</p>):errors.email2 ? (<p>{errors.email2}</p>):(<p>{errors.email3}</p>)}
                
                </div>
                <div className={estilo.pass}>
                     <label htmlFor="password"> Password : </label>
                    <input onChange={handelChange} value={userData.password} type="password" name="password" className={estilo.input} />
                    {errors.pass1 ? (<p>{errors.pass1}</p>):(<p>{errors.pass2}</p>)}
                </div>
                <button onClick={handleSubmit} type="submit">SUBMIT</button>
                <h3 className={estilo.space}>...</h3>
            </form>
            </div>
           
        </div>
            
    )
}


export default Form