//import './App.css'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import SelectionPage from './components/SelectionPage';
import BookingPage from './components/BookingPage';
import { useState } from 'react';
import { MovieDataInterface } from './components/data/Movies';
import ThankYou from './components/ThankYou';


function Layout(){

  //<Outlet/> byts ut mot rätt komponent i listan nedan beroende på url:n
  return(
    <>
      <Outlet />
    </>
  );
}

function App() {

  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [totalSeatCost, setTotalSeatCost] = useState<number>(0)
  //  Dessa ska ju egentligen inte vara hårdkodade utan hämtas från databasem, men nu var faktiskt dina det också ;)
  const [occupiedSeats, setOccupiedSeats] = useState<string[]>(['R2-S4', 'R2-S5', 'R3-S7', 'R3-S8', 'R5-S4', 'R5-S5', 'R6-S5', 'R6-S6', 'R6-S7']);
    
  //  Filmen som är vald, lagras som ett objekt
  const [selectedMovie, setSelectedMovie] = useState<MovieDataInterface>();
  

  //  Här routar vi till olika komponenter    
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <div>This page does not exist</div>,
      children: [
        {
          path:'/',
          element: <SelectionPage
            selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}
            totalSeatCost={totalSeatCost} setTotalSeatCost={setTotalSeatCost}
            selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}
            occupiedSeats={occupiedSeats}
          ></SelectionPage>,
        },
        {
          path:'/booking',
          element: <BookingPage
            selectedSeats={selectedSeats} 
            totalSeatCost={totalSeatCost}
            selectedMovie={selectedMovie}
          ></BookingPage>,
        },
        {
          path: '/thankyou',
          element: <ThankYou
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            setTotalSeatCost={setTotalSeatCost}
            setSelectedMovie={setSelectedMovie}
            setOccupiedSeats={setOccupiedSeats}
          ></ThankYou>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
