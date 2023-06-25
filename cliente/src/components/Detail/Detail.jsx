import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import stilos from "./detail.module.css"
import axios from 'axios'


const Detail = ()=>{
    const {id} = useParams()
    const [charact, setCharac] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then((data)=>{
           if (data.name) {
              setCharac(data);
           }else {
            window.alert('No hay personajes con ese ID');
        }});
        return setCharac({});
     }, [id]);
    return (
        <div className={stilos.contendor}>
            <div className={stilos.imagen_cont}>
                <img src={charact.image} alt="" />
            </div>
            <div className={stilos.info_cont}>
                <h1>{charact.name}</h1>
            <h2>STATUS |    {charact.status}</h2>
            <h2>SPECIE |   {charact.species}</h2>
            <h2>GENDER |   {charact.gender}</h2>
            <h2>ORIGIN |   {charact.origin?.name}</h2>
            </div>
            
        </div>
    )
}

export default Detail;