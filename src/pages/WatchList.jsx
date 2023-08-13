import React, {useContext} from 'react'
import "./watchlist.scss";
import MovieCard from '../components/MovieCard';
import { DataContext } from '../context/DataContext';

const WatchList = () => {

  const {data, watchList} = useContext(DataContext);
  console.log('WatchList')
  return (
    <div className='watchlist-conatiner'>
      
      {
        watchList?.map((movie)=>(
          <MovieCard movie={movie} key={movie.id} />
        ) )
      }
    </div>
  )
}

export default WatchList
