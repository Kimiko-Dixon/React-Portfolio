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
    <Header>
      <Nav/>
    </Header>
    <main>
      <Outlet/>
    </main>
    <Footer/>
   </> 
  )
}

export default App
