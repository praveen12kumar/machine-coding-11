import { createContext } from "react";
import { useReducer } from "react";
import { dataReducer } from "../reducer/dataReducer";
import { movies } from "../db";
export const DataContext = createContext();


export const DataProvider = ({children})=>{
    const initialState = {
        data: movies,
        search:"",
        watchList:[],
        genre:"",
        releaseYear:"",
        rating:"",
    }

    const [state, dispatch] = useReducer(dataReducer, initialState);

    return (
        <DataContext.Provider value={{
            data:state.data,
            dataDispatch: dispatch,
            search:state.search,
            watchList:state.watchList,
            genre:state.genre,
            releaseYear:state.releaseYear,
            rating:state.rating,
        }}>
            {children}
        </DataContext.Provider>
    )
}