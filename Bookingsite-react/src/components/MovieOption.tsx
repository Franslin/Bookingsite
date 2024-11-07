import React from "react";

const MovieOption = ({key: string, title: string, value: number}) => {

    return(
        <option value={value}>{title} ({value} kr)</option>
    )
}

export default MovieOption;