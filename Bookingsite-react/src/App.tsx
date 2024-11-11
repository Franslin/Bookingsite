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
            setSelectedSeats={setSelectedSeats}
            setTotalSeatCost={setTotalSeatCost}
            setSelectedMovie={setSelectedMovie}
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
