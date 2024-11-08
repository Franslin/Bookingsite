import { useState } from 'react'
//import './App.css'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import BookingPage from './components/BookingPage';


function Layout(){
  //<Outlet/> byts ut mot rätt komponent i listan nedan beroende på url:n
  return(
    <>
      <Outlet />
    </>
  );
}

//  Här routar vi till olika komponenter    
const router = createBrowserRouter([
  {
    element: <Layout />,
    //errorElement: <div>FEL</div>,
    children: [
      {
        path:'/',
        element: <BookingPage></BookingPage>,
      },
      {
        //path:'/booking',
        //element: <Products></Products>,
      }
    ]
  }
])


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
