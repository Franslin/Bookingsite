import { useState } from "react"

type SingleSeatProps = {
    isOccupied:boolean
    seatClicked: (action: string) => void;
}

function SingleSeat({isOccupied, seatClicked}:SingleSeatProps){

    const [isSelected, setIfOccupied] = useState(false)

    const whenSeatIsClicked = () : void => {
        setIfOccupied(isSelected ? false : true)
        seatClicked(`${isSelected ? "add seat" : "remove seat"}`)
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