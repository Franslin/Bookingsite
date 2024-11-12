import { useEffect, useState } from "react"

type SingleSeatProps = {
    seatId: string;
    isOccupied:boolean
    seatClicked: (action: string, seatId: string) => void;
    selectedSeats: string[];
}

function SingleSeat({seatId, isOccupied, seatClicked, selectedSeats}:SingleSeatProps){

    const [isSelected, setIfSelected] = useState(false)

    //  Om användaren går tillbaka så ska dens valda säten laddas igen
    useEffect((): void => {
        if(selectedSeats.find(seat => seat === seatId)){
            setIfSelected(true);
        }
    }, [])

    const whenSeatIsClicked = () : void => {
        setIfSelected(isSelected ? false : true)
        //  Här har jag bytt plats på argumenten eftersom state-uppdateringen är asynkron och inte har hunnit uppdaterats än
        seatClicked(`${isSelected ? "remove seat" : "add seat"}`, seatId)
    }

    return(
        <>
        <div 
            className={`seat ${isOccupied ? 'occupied' : ''} ${isSelected && !isOccupied ? 'selected' : ''}`}
            onClick={isOccupied ? undefined : whenSeatIsClicked}
        ></div>
        </>
    )
}

export default SingleSeat;