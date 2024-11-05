import {Movie, getMovieObjects} from "./Movies.js"; 
// Klassen Movie används för att kunna typecasta variabeln movies
// Vi skulle kunna skapa en egen typ istället, men då måste den uppdateras mannuellt om klassen ändras

//  När man klickar så ska stolen bli ledig/selected
//  De som redan är upptagna ska man inte kunna klicka på
//  Text längst ned ska uppdateras


//  Loop som lägger till en eventlistener på varje säte för klick
let allSeats = Array.from(document.getElementsByClassName('seat'));

allSeats.forEach((seat : Element) => {
    seat.addEventListener('click', () => {

        if(!seat.classList.contains('occupied')){

            if(seat.classList.contains('selected')){
                seat.classList.remove('selected')
            }
            else{
                seat.classList.add('selected')
                seat.getAttribute('value');
            }
        }
    })
});

//  Rendera film-alternativen i html
const moviePicker = document.getElementById('movie');
const movies: Movie[] = []; //   Lagrar filmerna så att de kan återanvändas utan extra fetcher

getMovieObjects().then(movies => {
    //  ? säkerställer att movies inte är null eller undefined, i så fall returneras null direkt från loopen
    movies?.forEach(movie => {
        const option = document.createElement('option');
        option.innerText = `${movie.Title} (${movie.Price} kr)`;
        option.setAttribute('value', (movie.Price).toString());
        moviePicker?.appendChild(option);
    });
})

//  Metod för att uppdatera antal säten och pris
const updateSeatsAndPrice = () => {

}
