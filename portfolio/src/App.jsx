// import { useState } from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
// import Project from './components/Project/project'
import Footer from './components/Footer/footer'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <div className='row justify-content-between'>
      <div className='col-3' id='sticky'>
        <Header>
          <Nav/>
        </Header>
      </div>
      <div className='col'>
        <main>
          <Outlet/>
        </main>
      </div>
    <Footer/>
    </div>
   </> 
  )
}

export default App
