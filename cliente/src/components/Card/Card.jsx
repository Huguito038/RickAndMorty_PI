import Stilo from "../Card/lol.module.css"
import {Link,NavLink} from "react-router-dom";
import { addFav,removeFav } from "../redux/actions";
import {connect} from "react-redux"
import {useState, useEffect} from "react"
import corazon from "../Card/imgs/corazon.png"
import corazon_rojo from "../Card/imgs/corazon_rojo.png"

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites})=> {
   const [IsFav, setFav] = useState(false)

   const handleFavorite = ()=>{
     if(IsFav){
      setFav(false)
      removeFav(id)
     }else{
      setFav(true)
      addFav({id, name, status, species, gender, origin, image, onClose})
     }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === (id)) {
            setFav(true);
         }
      });
   }, [myFavorites]);

   return (
         <div className={Stilo.contenedor}>
           
            <button onClick={handleFavorite} className={Stilo.boton_fav}>{IsFav? <img  src={corazon} alt="me gusta"/> 
            : <img  src={corazon_rojo} alt="me gusta"/> }</button>
            
            <div className={Stilo.salto}></div>
               <div className={Stilo.back}>
               <NavLink to={`/detail/${id}`} activeClassName={Stilo.behind}>
                     <img src={image} alt="" />
                  <div className={Stilo.horizontales}>
                     <h2>{status}</h2>
                     <h2>{gender}</h2>
                  </div>
                  <div className={Stilo.horizontales_abajo}>
                     <h2>Origen: {origin}</h2>
                  </div>
                  </NavLink>
            </div>
            <button onClick={()=>{onClose(id)}} className={Stilo.boton_eliminar}><img  src="https://img.icons8.com/glyph-neue/64/trash.png" alt="trash"/></button>
            <div className={Stilo.front}> 
               <h2 className={Stilo.titulo}>{name}</h2>
               <h2 className={Stilo.id}>{id}</h2>
               <h2 className={Stilo.titulo_2}>{species}</h2>
            </div>
            </div>
            
    
   )}


const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character)=> dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
   }

}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Card)