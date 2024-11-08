
type MovieOptionProps = {
    key: string;
    title: string;
    value: number;
}

const MovieOption = ({title, value}:MovieOptionProps) => {

    return(
        <option value={value}>{title} ({value} kr)</option>
    )
}

export default MovieOption;