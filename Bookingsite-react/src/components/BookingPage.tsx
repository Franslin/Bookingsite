import React, { useEffect, useState } from "react";
import {Movie, MovieData, getMovieObjects} from "./data/Movies";
import MovieOption from "./MovieOption";

function BookingPage(){
    
    //  Lagrar filmerna
    const [movies, setMovies] = useState<MovieData[]>([]) // Typecastar för att undvika att movies blir av typen never[]

    //  När sidan laddas första gången vill vi hämta filmerna
    useEffect(() => {
        const fetchMovies = async() => {
            const result = await getMovieObjects();
            setMovies(result)
        }
        fetchMovies();
    }, []);

    return(
        <>
            <div className="movie-container">
      <label htmlFor="movie">Pick a movie:</label>
      <select name="movie" id="movie">

        {movies.map((movie) => (
            <MovieOption key={movie.Title} title={movie.Title} value={movie.Price}></MovieOption>
        ))}

      </select>
    </div>
    <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>
    <div className="container">
      <div className="screen"></div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
      </div>
    </div>
    <p className="text">
      You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
    </p>
        </>
    )
}

export default BookingPage;