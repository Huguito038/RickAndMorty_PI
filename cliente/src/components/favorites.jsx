import {connect} from "react-redux"
import Card from "../components/Card/Card";
import Stilos from "./Cards/Cards.module.css"
import { filterCards, orderCards,removeFav} from "./redux/actions";
import { useDispatch,} from "react-redux";
import { useState } from "react";



const Favorites = ({myFavorites,onClose})=>{
    

    const [state, setAux] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (event)=>{
        event.preventDefault();
        dispatch(orderCards(event.target.value))
        setAux(!state)
    }

    const handleFilter = (event)=>{
        event.preventDefault();
        dispatch(filterCards(event.target.value))
    }
   

    return (
        <div>
            <select onChange={handleOrder} className={Stilos.buton}> 
                <option value="DEFAULT" disabled>Select Order</option>
                <option value="D" >Descendente</option>
                <option value="A" >Ascendente</option>
            </select>

            <select onChange={handleFilter} className={Stilos.buton}>
                <option value="DEFAULT" disabled>Select Filter</option>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Genderless" >Genderless</option>
                <option value="unknown" >unknown</option>
            </select>

         <div className={Stilos.contenedor}>
          {myFavorites?.map(({id,name,status,species,gender,origin,image,onClose})=>{
              return (
                 <Card 
                 key = {id}
                 id = {id}
                 name = {name}
                 status = {status}
                 species = {species}
                 gender = {gender}
                 origin = {origin}
                 image = {image}
                 onClose={onClose}
                 />
              )
           })}   
        </div>
        </div>
        
        )    
}

const mapStateToProps = (state)=>{
    return{
        myFavorites : state.myFavorites
    }

}


export default connect(mapStateToProps,null)(Favorites)