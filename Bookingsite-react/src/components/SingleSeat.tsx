import { useState } from "react"

type SingleSeatProps = {
    isOccupied:boolean
    seatClicked: (action: string) => void;
}

function SingleSeat({isOccupied, seatClicked}:SingleSeatProps){

    const [isSelected, setIfSelected] = useState(false)

    const whenSeatIsClicked = () : void => {
        setIfSelected(isSelected ? false : true)
        //  Här har jag bytt plats på argumenten eftersom state-uppdateringen är asynkron och inte har hunnit uppdaterats än
        seatClicked(`${isSelected ? "remove seat" : "add seat"}`)
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