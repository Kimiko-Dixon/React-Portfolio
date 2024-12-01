/* import ReactDom from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom' */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

import App from './App.jsx'
/* import AboutMe from './pages/About/aboutMe.jsx'
import Portfolio from './pages/Portfolio/portfolio.jsx'
import Contact from './pages/Contact/contact.jsx'
import Resume from './pages/Resume/resume.jsx'
 */
import './index.css'

/* const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        index:true,
        element:<AboutMe/>,
      },
      {
        path:'/portfolio',
        element:<Portfolio/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/resume',
        element:<Resume/>
      }
    ]
  }
]) */

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ChakraProvider value={system}>
    <App/>
  </ChakraProvider>
  </StrictMode>
)
