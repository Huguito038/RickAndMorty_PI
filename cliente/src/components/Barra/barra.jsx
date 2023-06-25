import stilos from "../Barra/barra.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";
import imagen from "../Barra/image.png"


const Barra = ({onSearch})=>{
    return (
        <div className={stilos.navegacion}>
            <img src={imagen} alt="" className={stilos.imagen} />
            
            <Link to="/home"><button className={stilos.boton}>HOME</button></Link>
            <Link to="/favorites"><button className={stilos.boton}>FAVORITES</button></Link>
            <Link to="/about"><button className={stilos.boton}>ABOUT</button></Link>
            <SearchBar onSearch={onSearch}></SearchBar>
        </div>
    )
}

export default Barra