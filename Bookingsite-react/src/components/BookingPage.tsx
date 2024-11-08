import React, { useEffect, useState } from "react";
import {MovieData, getMovieObjects} from "./data/Movies";
import MovieOption from "./MovieOption";
import "./style.css"
import SingleSeat from "./SingleSeat";

function BookingPage(){
    
    //  Lagrar filmerna
    const [movies, setMovies] = useState<MovieData[]>([]) // Typecastar för att undvika att movies blir av typen never[]
    const [selectedSeats, setSelectedSeats] = useState<number>(0)
    const [totalSeatCost, setTotalSeatCost] = useState<number>(0)
    //  Dessa ska ju egentligen inte vara hårdkodade utan hämtas från databasem, men nu var faktiskt dina det också ;)
    const occupiedSeats : string[] = ['R2-S4', 'R2-S5', 'R3-S7', 'R3-S8', 'R5-S4', 'R5-S5', 'R6-S5', 'R6-S6', 'R6-S7'];

    const updateCountAndTotal = () => {
      const count: HTMLElement = document.getElementById('count')
      const total: HTMLElement = document.getElementById('total')

      count.innerText = selectedSeats.toString();

    }

    //  När användaren väljer en plats så vill vi att antalet valda platser och kostnaden ska uppdateras
    const seatClicked = (action: string): void => {
      if(action === 'add seat'){
        setSelectedSeats(selectedSeats + 1)
      }
      else{
        setSelectedSeats(selectedSeats - 1)

      }
    }

    //  När sidan laddas första gången
    useEffect(() => {

        //  Hämtar filmerna
        const fetchMovies = async() => {
            const result = await getMovieObjects();
            setMovies(result)
        }
        fetchMovies();
    }, []);

    const renderSeatRow = (row: number) => {
      const seats = [];
      for(let i = 0; i <= 8; i++){
        const seatId : string = `R${row}-S${i}`

        //  Kollar om platsen ska renderas som valbar
        if(!occupiedSeats.find(seat => seat === seatId)){
          seats.push(<SingleSeat key={seatId} isOccupied={false} seatClicked={seatClicked}/>)
        }
        else{
          seats.push(<SingleSeat key={seatId} isOccupied={true} seatClicked={seatClicked}/>)
        }
      }
      return seats;
    }

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
        {renderSeatRow(1)}
      </div>
      <div className="row">
        {renderSeatRow(2)}
      </div>
      <div className="row">
        {renderSeatRow(3)}
      </div>
      <div className="row">
        {renderSeatRow(4)}
      </div>
      <div className="row">
        {renderSeatRow(5)}
      </div>
      <div className="row">
        {renderSeatRow(6)}
      </div>
    </div>
    <p className="text">
      You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
    </p>
        </>
    )
}

export default BookingPage;