import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Barra from "./components/Barra/barra"
import { useState } from 'react';
import axios from "axios"
import { Route,Routes, useLocation } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Forn/form';
import Favorites from './components/favorites';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const login = async(userData)=> {
      try{
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      ;
      }catch(error){
         console.log(error.message);
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const {pathname} = useLocation()
   const [characters, SetChar] = useState([])
   const onSearch = async (id) =>{
      try{
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            SetChar((oldChars) => [...oldChars, data]);
         } 
      }catch(error){
         window.alert(error +": no hay personajes con este ID!")
      }
   }
   const onClose = (id)=>{
      SetChar(
         characters.filter((char)=>{
            return char.id !== id
         }))
   } 
   return (
      <div className='App'>
         {pathname !== "/" && <Barra onSearch={onSearch}></Barra>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
         
      </div>
   )
}


export default App;
