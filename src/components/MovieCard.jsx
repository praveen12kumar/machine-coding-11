import React, {useContext} from 'react'
import "./movieCard.scss";
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const MovieCard = ({movie}) => {
    const navigate = useNavigate();
    const {data, dataDispatch, watchList} = useContext(DataContext);
    console.log("watchList", watchList);
    const {id, imageURL, title, summary} = movie;

    

    const addToWatchlist = (id)=>{
        const movie = data?.find((movie)=> movie.id == id);

        dataDispatch({
            type:"AddToWatch",
            payload: movie,
        })
    }


    const removeFromWatchlist = (id, watchList)=>{
        const movie = watchList?.filter((movie)=> movie.id !== id);
        dataDispatch({
            type:"removeFromWatchlist",
            payload: movie,
        })
    }


    const handleAddToWatch = (id, watchList)=>{
        checkWatchlist(id, watchList) ? removeFromWatchlist(id, watchList) :
        addToWatchlist(id,)
    }



    const checkWatchlist = (id, watchList)=>{
        return watchList?.some((movie)=> movie.id === id);
    }

  return (
    
    <div className='movieCard'>
        <div className="imageContainer" onClick={()=>navigate(`/movie/${movie.id}`)}>
            <img src={imageURL} alt="url" />
        </div>
        <div className="movieDetail">
            <p className='title'>{title}</p>
            <p>{summary}</p>
        

            <div className="buttonSection">
                <button className='star'>Star</button>
                
                    {
                        checkWatchlist(movie.id, watchList) ? 
                        <button className="watchlist" onClick={()=>handleAddToWatch(id, watchList)} >Added to Watch list</button> : 
                        <button className="watchlist" onClick={()=>handleAddToWatch(id, watchList)} > Add to watch list</button>
                    }
                
            </div>
        </div>
      
    </div>
  )
}

export default MovieCard
