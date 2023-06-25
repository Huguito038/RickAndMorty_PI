import Card from '../Card/Card.jsx';
import Style from "../Cards/Cards.module.css"

export default function Cards({characters,onClose}) {
   return (
   <div className={Style.contenedor}>
      {characters.map(({id,name,status,species,gender,image,origin})=>{
         return (
            <Card 
            key = {id}
            id = {id}
            name = {name}
            status = {status}
            species = {species}
            gender = {gender}
            image = {image}
            origin = {origin?.name}
            onClose={onClose}
            />
         )

      })}




   </div>);
}
