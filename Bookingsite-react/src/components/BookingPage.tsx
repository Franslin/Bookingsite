import React, { useEffect, useState } from "react";
import "./style.css"
import SingleSeat from "./SingleSeat";
import MovieSelector from "./MovieSelector";
import { MovieDataInterface } from "./data/Movies";

function BookingPage(){
    
    const [selectedSeats, setSelectedSeats] = useState<number>(0)
    const [totalSeatCost, setTotalSeatCost] = useState<number>(0)
    //  Dessa ska ju egentligen inte vara hårdkodade utan hämtas från databasem, men nu var faktiskt dina det också ;)
    const occupiedSeats : string[] = ['R2-S4', 'R2-S5', 'R3-S7', 'R3-S8', 'R5-S4', 'R5-S5', 'R6-S5', 'R6-S6', 'R6-S7'];
    //  Om <select> ska vara disabled eller ej
    const [isSelectMoviesDisabled, setIsSelectMoviesDisabled] = useState(false);
    //  Filmen som är vald, lagras som ett objekt
    const [selectedMovie, setSelectedMovie] = useState<MovieDataInterface>();

    //  När selectedSeats uppdateras så kollar denna om man ska kunna välja film eller inte
    //  Vi uppdaterar även priset för alla sätena
    useEffect((): void => {
      setIsSelectMoviesDisabled(selectedSeats > 0 ? true : false)

      console.log('selectedMovie from seatClicked(): ' + selectedMovie?.Title + " " + selectedMovie?.Price)
      //  Om filmen inte har hunnits hämtats från MovieSelector.tsx än när programmet körs första gången
      if(selectedMovie){
        const price: number = selectedSeats * selectedMovie.Price;
        setTotalSeatCost(price) 
      }
    }, [selectedSeats]);

    //  När användaren väljer en plats så vill vi att antalet valda platser och kostnaden ska uppdateras
    const seatClicked = (action: string): void => {
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
      <MovieSelector isSelectMoviesDisabled={isSelectMoviesDisabled} setSelectedMovie={setSelectedMovie}></MovieSelector>
    <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>Aviable</small>
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