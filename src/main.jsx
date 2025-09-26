import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from "./pages/layout/Layout"
import Home from './pages/home/Home'
import Movies from "./pages/movies/Movies"
let routes=createBrowserRouter([
  {path: "/",
   element:<Layout/>,
   children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/movies",
      element:<Movies/>
    }
   ]
  }
])
createRoot(document.getElementById('root')).render(<RouterProvider router={routes}/>)
