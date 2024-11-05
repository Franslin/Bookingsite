
class Movie{
    Title: string;
    Year: string;
    Price: number;
    Poster: string;

    constructor(title: string, year: string, price: number, poster: string){
        this.Title = title;
        this.Year = year;
        this.Price = price;
        this.Poster = poster;
    }
}

const getMovieObjects = async () => {
    try{
        const response = await fetch('./MoviesTemp.json')
        const json = await response.json();
        
        let movies : Movie[] = [];
        movies = json.map((data: any) => new Movie(data.Title, data.Year, data.Price, data.Poster)) 

        return movies;
    }
    catch{
        console.log('Could not get movies from file', console.error())
    }
}


export {Movie, getMovieObjects};