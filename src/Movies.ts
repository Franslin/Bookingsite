
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

const fetchGist = async () => {
    const request = await fetch(`https://api.github.com/gists/609b043555ab17753215632c108914a8`);
    const gist = await request.json(); // omvandlar svaret till ett JavaScript-objekt
    return JSON.parse(gist.files["db.json"].content); // konverterar strängen i content till ett objekt
}


const getMovieObjects = async () => {
    try{
        const response = await fetchGist()
        const json = await response.json();
        
        let movies : Movie[] = [];
        movies = json.map((data: any) => new Movie(data.Title, data.Year, data.Price, data.Poster)) 

        return movies;
    }
    catch{
        console.log('Could not get movies from gist', console.error())
    }
}


export {Movie, getMovieObjects};