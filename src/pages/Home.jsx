import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import {MdArrowDropDown} from "react-icons/md";
import "./home.scss";
import {DataContext} from "../context/DataContext";
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [openGenre, setOpenGenre] = useState(false);
    const [openRelease, setOpenRelease] = useState(false);
    const [openRating, setOpenRating] = useState(false);

    const { dataDispatch ,data, genre, rating, releaseYear} = useContext(DataContext);
    //console.log("genres: " + genre, "releaseYear: " + releaseYear, "rating" + rating);
    
    const genreArray = ["Action", "Crime", "Drama", "Adventure",  "Romance", "Fantasy", "Sci-Fi", "Biography"]
    const releaseArray =["1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021", "2022", "2023" ]
    const ratingArray = ["1", "2", "3", "4", "5", "6", "7","8", "9", "10"];

    let filteredData = data;

    const navigate = useNavigate();

    const handleAllGenre = (value)=>{
        dataDispatch({
            type:"addAllGenre",
            payload: value,
        })
    }

    const handleGenre = (value)=>{
        console.log("genres: " + value);
        dataDispatch({
            type:"addGenre",
            payload: value,
        })
    }

    const handleAllRelease = (value)=>{
        dataDispatch({
            type:"addAllRelease",
            payload: value,
        })
    }
    
    const handleRelease = (value)=>{
        dataDispatch({
            type:"addReleaseYear",
            payload: value,
        })
    };

    const handleAllRating = (value)=>{
        dataDispatch({
            type:"addAllRating",
            payload: value,
        })
    };

    const handleRating = (value)=>{
        dataDispatch({
            type:"addRating",
            payload: value,
        })
    };

    
    

    let genreFilter = data.filter((mov)=>{
        return genre != "allGenre"
          ? mov.genre.find((gen)=>gen ==genre)
          : 1 == 1;
      })
      let starfilter = genreFilter.filter((mov)=>{
        return rating != "allRating"
        ? mov.rating == rating
        : 1 == 1;
      })
      let yearFilter = starfilter.filter((mov)=>{
        return releaseYear != "allRelease"
        ? mov.year == releaseYear
        : 1 == 1;
      })



  return (
    <main className='home-container'>
      <div className="header">
          <span className='title'>Movies</span>
          {/* dropdown for genre */}
        <div className="genre-dropdown">
            <button style={{display:"flex", alignItems:"center"}}  onClick={()=> setOpenGenre(!openGenre)} >All Genre <span><MdArrowDropDown/></span></button>
            {
              openGenre ? 
        <div className="genre-options">
                  
          <div className="dropdown-option" onClick={()=> handleGenre("allGenre") } >All Genre</div>
                {
                    genreArray?.map((genre)=> (
                        <div className="dropdown-option" onClick={()=> handleGenre(`${genre}`) } >{genre}</div>
                    ))
                }
          </div>
              : null
            }
          </div>


          {/* dropdown for release year */}
          <div className="release-dropdown">
            <button style={{display:"flex", alignItems:"center"}}  onClick={()=> setOpenRelease(!openRelease)} >Release Year <span><MdArrowDropDown/></span></button>
            {
              openRelease ? 
              <div className="release-options">
                  
          <div className="dropdown-option" onClick={()=> handleRelease("allRelease") } >All Years</div>
                {
                    releaseArray?.map((year)=>(
                        <div className="dropdown-option" onClick={()=> handleRelease(`${year}`)}>{year}</div>
                    ))
                }
              </div>
              : null
            }
          </div>
          

          {/* sort by price */}

          <div className="rating-dropdown">
            <button style={{display:"flex", alignItems:"center"}}  onClick={()=> setOpenRating(!openRating)} >Rating <span><MdArrowDropDown/></span></button>
            {
              openRating ? 
              <div className="rating-options">
                  
                  <div className="dropdown-option" onClick={()=> handleRating("allRating")}>All</div>
                 {
                    ratingArray?.map((rating)=>(
                        <div className="dropdown-option" onClick={()=> handleRating(`${rating}`)}>{rating}</div>
                    ))
                 }
              </div>
              : null
            }
          </div>
          
          <div className="newMovie">
            <button className='moviebtn' onClick={()=> navigate('/new')}>Add a Movie</button>
          </div>

          </div>

            {/* main container */}
            <div className="main-movie-container">
                {
                    yearFilter?.map((movie)=>(
                        <MovieCard movie={movie} key={movie.id}/>
                    ))
                }
            </div>

    </main>
  )
}

export default Home
