import './style.css'
import MovieOption from './MovieOption'
import { useEffect, useState } from 'react'
import { getMovieObjects, MovieDataInterface } from './data/Movies';

type MovieSelectorProps = {
    isSelectMoviesDisabled: boolean;
    setSelectedMovie: (movieDataObject: MovieDataInterface) => void;
}

function MovieSelector({isSelectMoviesDisabled, setSelectedMovie}:MovieSelectorProps){

    const [movies, setMovies] = useState<MovieDataInterface[]>([]) // Typecastar för att undvika att movies blir av typen never[]

    //  När sidan laddas första gången ska filmerna hämtas
    useEffect(() => {
        const fetchMovies = async() => {
            const result = await getMovieObjects();
            setMovies(result)

            //  Sätter den första filmen i listan som default-vald i state
            console.log('Calling setSelectedMovie from MovieSelector with: ' + result[0].Title)
            setSelectedMovie(result[0]);
        }
        fetchMovies()
    }, []);

    const handleMovieChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMovieIndex = event.target.selectedIndex;

        if(selectedMovieIndex >= 0){
            setSelectedMovie(movies[selectedMovieIndex])
        }
    }

    return(
        <>
            <div className="movie-container">
                <label htmlFor="movie">Pick a movie:</label>
                <select name="movie" id="movie" disabled={isSelectMoviesDisabled} onChange={handleMovieChange}>
                    {movies.map((movie) => (
                        <MovieOption key={movie.Title} movie={movie}></MovieOption>
                    ))}
                </select>
            </div>
        </>
    )
}

export default MovieSelector;