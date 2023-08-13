import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import "./movieDetails.scss";
import { DataContext } from "../context/DataContext";
const MovieDetails = () => {
  const { id } = useParams();

  const { data } = useContext(DataContext);

  const movieData = data?.find((movie) => movie.id == id);
  console.log(movieData);
  const {
    cast,
    director,
    genre,
    imageURL,
    rating,
    summary,
    title,
    writer,
    year,
  } = movieData;

  return (
    <div className="movieDetails">
      <div className="movieDetail-container">
        <div className="detailsImage">
          <img src={imageURL} alt="url" />
        </div>
        <div className="details-section">
          <p className="title">{title}</p>
          <p className="summary">{summary}</p>
          <p className="year">Year: {year}</p>
          <p className="genre">
            Genre:
            {genre.map((g) => (
              <span>{g}</span>
            ))}
          </p>
          <p className="rating">Rating: {rating}</p>
          <p className="director">Director: {director}</p>
          <p className="writer">Writer: {writer}</p>
          <p className="cast">
            Cast:
            {cast.map((c) => (
              <span>{c}</span>
            ))}
          </p>

          <div className="buttonSection">
                <button className='star'>Star</button>
                <button className='watchlist'>Add to Watchlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
