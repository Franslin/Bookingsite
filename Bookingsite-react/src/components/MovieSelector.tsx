import './style.css'
import MovieOption from './MovieOption'
import { useEffect, useState } from 'react'
import { getMovieObjects, MovieData } from './data/Movies';

type MovieSelectorProps = {
    isSelectMoviesDisabled: boolean;
}

type MovieOptionType = {
    key: string;
    title: string;
    value: number;
}

function MovieSelector({isSelectMoviesDisabled}:MovieSelectorProps){

    const [movies, setMovies] = useState<MovieData[]>([]) // Typecastar för att undvika att movies blir av typen never[]
    const [selectedMovie, setSelectedMovue] = useState<MovieOptionType>()

    //  När sidan laddas första gången ska filmerna hämtas
    useEffect(() => {
        const fetchMovies = async() => {
            const result = await getMovieObjects();
            setMovies(result)
        }
        fetchMovies();
    }, []);

    const handleMovieChange = () => {
        
    }

    return(
        <>
            <div className="movie-container">
                <label htmlFor="movie">Pick a movie:</label>
                <select name="movie" id="movie" disabled={isSelectMoviesDisabled} onChange={handleMovieChange}>
                    {movies.map((movie) => (
                        <MovieOption key={movie.Title} title={movie.Title} value={movie.Price}></MovieOption>
                    ))}
                </select>
            </div>
        </>
    )
}

export default MovieSelector;