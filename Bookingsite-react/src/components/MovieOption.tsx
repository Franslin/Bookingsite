import { MovieDataInterface } from "./data/Movies";

type MovieOptionProps = {
    movie: MovieDataInterface;
}

const MovieOption = ({movie}:MovieOptionProps) => {

    return(
        <option value={movie.Price}>{movie.Title} ({movie.Price} kr)</option>
    )
}

export default MovieOption;