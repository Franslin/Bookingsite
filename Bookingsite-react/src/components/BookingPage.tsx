import React, { useEffect, useState } from "react";
import MovieOption from "./MovieOption";
import "./style.css"
import SingleSeat from "./SingleSeat";
import MovieSelector from "./MovieSelector";

function BookingPage(){
    
    //  Lagrar filmerna
    const [selectedSeats, setSelectedSeats] = useState<number>(0)
    const [totalSeatCost, setTotalSeatCost] = useState<number>(0)
    //  Dessa ska ju egentligen inte vara hårdkodade utan hämtas från databasem, men nu var faktiskt dina det också ;)
    const occupiedSeats : string[] = ['R2-S4', 'R2-S5', 'R3-S7', 'R3-S8', 'R5-S4', 'R5-S5', 'R6-S5', 'R6-S6', 'R6-S7'];
    //  Om <select> ska vara disabled eller ej
    const [isSelectMoviesDisabled, setIsSelectMoviesDisabled] = useState(false);

    const updateCountAndTotal = () => {
      const selectedMovie = document.getElementById('movie')
      const selectedMoviePrice = selectedMovie.value

    }

    //  När selectedSeats uppdateras så kollar denna om man ska kunna välja film eller inte
    useEffect((): void => {
      console.log('selectedSeats in useEffect in main: ' + selectedSeats)
      setIsSelectMoviesDisabled(selectedSeats > 0 ? true : false)
    }, [selectedSeats]);

    //  När användaren väljer en plats så vill vi att antalet valda platser och kostnaden ska uppdateras
    const seatClicked = (action: string): void => {
      console.log('seatClicked function called!!')
      setSelectedSeats((prevState) => //prevState används för att få ett korrekt säkert värde från state
        action === 'add seat' ? prevState + 1 : prevState - 1
      );
    }

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
      <MovieSelector isSelectMoviesDisabled={isSelectMoviesDisabled}></MovieSelector>
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
      You have selected <span id="count">{selectedSeats}</span> seats for a price of $<span id="total">{totalSeatCost}</span>
    </p>
        </>
    )
}

export default BookingPage;