import { useEffect } from "react";
import { Link } from "react-router-dom";

type TankYouPropTypes = {
    setSelectedSeats: (arg: string[]) => void;
    setTotalSeatCost: (arg: number) => void;
    setSelectedMovie: (arg: undefined) => void;
}


function ThankYou({setSelectedSeats, setTotalSeatCost, setSelectedMovie}:TankYouPropTypes){

    //  Nollställer användarens valda platser
    useEffect(() => {
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