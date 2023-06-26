const InitialState = {
    myFavorites: [],
    allCharactersFav: [],
}

const reducer = (state = InitialState,{type, payload}) =>{
    switch(type){
        case 'ADD_FAV':
            return { ...state,
                    myFavorites: payload,
                    allCharactersFav: payload
                };
        case 'REMOVE_FAV':
            return { ...state,
                    myFavorites: payload,
                    allCharactersFav: payload
                };
        case "FILTER":
            let copyFilter = state.allCharactersFav.filter((character) => character.gender === payload)
             return {
                     ...state,
                     myFavorites: copyFilter
                    }
        case "ORDER": //! agregue case completo
                const allCharactersFavCopy = [...state.allCharactersFav]
                return{
                    ...state,
                    myFavorites: 
                    payload === "A"
                    ? allCharactersFavCopy.sort((a,b)=> a.id - b.id)
                    :allCharactersFavCopy.sort((a,b)=>b.id - a.id)
                }
        default: 
        return{...state}
    }
    
}

export default reducer