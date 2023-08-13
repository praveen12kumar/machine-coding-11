export const dataReducer = (state, {type, payload})=>{

    switch(type){

        case "addGenre":
            return{
                ...state, genre: payload,
            }

        case "addReleaseYear":
            return{
                ...state, releaseYear: payload
            }

        case "addRating":
            return{
                ...state, rating: payload
            }
        
        case "AddToWatch":
            console.log("payload: " , payload)
            return{
                ...state, watchList:[...state.watchList, payload]
            }
        
        case "addAllGenre":
            
        
       

        default:
            return state;

    }
}