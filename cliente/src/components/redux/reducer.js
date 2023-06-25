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
        case "ORDER":
            const orderCharacters = state.allCharactersFav.sort((a, b)=>{
                if(payload === "A"){
                     if(a.id < b.id) return -1;
                     if(b.id < a.id) return 1;
                     return 0
                } else {
                     if(a.id < b.id) return 1;
                     if(b.id < a.id) return -1
                     return 0
                    }
                })
                return {
                    ...state,
                    myFavorites: [...orderCharacters]
                }
        default: 
        return{...state}
    }
    
}

export default reducer