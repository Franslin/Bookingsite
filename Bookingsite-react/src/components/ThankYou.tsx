import { useEffect } from "react";
import { Link } from "react-router-dom";

type TankYouPropTypes = {
    selectedSeats: string[];
    setSelectedSeats: (arg: string[]) => void;
    setTotalSeatCost: (arg: number) => void;
    setSelectedMovie: (arg: undefined) => void;
    setOccupiedSeats: (arg: ((prevOccupiedSeats: string[]) => string[])) => void;
}


function ThankYou({selectedSeats, setSelectedSeats, setTotalSeatCost, setSelectedMovie, setOccupiedSeats}:TankYouPropTypes){

    //  Nollställer användarens valda platser
    useEffect(() => {
        setOccupiedSeats((prevOccupiedSeats) => [...prevOccupiedSeats, ...selectedSeats])

        setSelectedSeats([]);
        setTotalSeatCost(0);
        setSelectedMovie(undefined)
    }, [])

    return(
        <>
            <h1>Thank you!</h1>
            <Link to={"/"}><button>Return to selection page</button></Link>
        </>
    )
}

export default ThankYou;