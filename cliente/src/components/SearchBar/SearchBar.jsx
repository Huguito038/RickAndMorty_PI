import style from "../SearchBar/search.module.css"
import { useState } from "react";



export default function SearchBar({onSearch}) {
   const [id,SetId] = useState("")
   const handleChange = (event)=>{
      SetId(event.target.value)
   }
   return (
      <div className={style.barra}>
         <input type='search' onChange={handleChange} className={style.SearchBar}/>
         <button onClick={()=>{onSearch(id)}}>AÑADIR</button>
      </div>
   );
}

