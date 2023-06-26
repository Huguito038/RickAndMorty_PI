import stilos from "./about.module.css"
const About= ()=>{
    return(
        <div className={stilos.hola}>
            <div className={stilos.fixed}>
                 <h2>Aplicacion creada por:</h2>
                 <div className={stilos.add}>
                    <h3>Cohorte: 39-a</h3>    
                    <h3>Grupo: 01</h3>
                 </div>
                <p className={stilos.titulo}>Hugo Soler</p>
            </div>
        </div>  
    )
}

export default About