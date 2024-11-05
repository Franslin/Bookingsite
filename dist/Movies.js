var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Movie {
    constructor(title, year, price, poster) {
        this.Title = title;
        this.Year = year;
        this.Price = price;
        this.Poster = poster;
    }
}
const getMovieObjects = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('./MoviesTemp.json');
        const json = yield response.json();
        let movies = [];
        movies = json.map((data) => new Movie(data.Title, data.Year, data.Price, data.Poster));
        return movies;
    }
    catch (_a) {
        console.log('Could not get movies from file', console.error());
    }
});
export { Movie, getMovieObjects };
