//import './App.css'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import SelectionPage from './components/SelectionPage';
import BookingPage from './components/BookingPage';
import { useState } from 'react';
import { MovieDataInterface } from './components/data/Movies';


function Layout(){

  //<Outlet/> byts ut mot rätt komponent i listan nedan beroende på url:n
  return(
    <>
      <Outlet />
    </>
  );
}

function App() {

  const [selectedSeats, setSelectedSeats] = useState<number>(0)
  const [totalSeatCost, setTotalSeatCost] = useState<number>(0)
  //  Filmen som är vald, lagras som ett objekt
  const [selectedMovie, setSelectedMovie] = useState<MovieDataInterface>();

  //  Här routar vi till olika komponenter    
  const router = createBrowserRouter([
    {
      element: <Layout />,
      //errorElement: <div>FEL</div>,
      children: [
        {
          path:'/',
          element: <SelectionPage
            selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}
            totalSeatCost={totalSeatCost} setTotalSeatCost={setTotalSeatCost}
            selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}
          ></SelectionPage>,
        },
        {
          path:'/booking',
          element: <BookingPage
            selectedSeats={selectedSeats} 
            totalSeatCost={totalSeatCost}
            selectedMovie={selectedMovie}
          ></BookingPage>,
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
