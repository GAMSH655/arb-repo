import { useState } from 'react'
import Home from '../src/Pages/Home'
import Gift from "../src/Pages/Gift"
import { BrowserRouter , Route ,  Routes } from 'react-router-dom'
import "./App.css"
function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
         <Route path="/"  element={ <Home/> }/>
         <Route path="/Gift"  element={ <Gift/> }/>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
