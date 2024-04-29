import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home.jsx"
import Unlimited from "./components/unlimited/unlimited.jsx"

function App() {

  const [name, setName] = useState("")
  const [sprite, setSprite] = useState("")

  useEffect(() => {
    fetch('/cookies').then(
      res => res.json()
    ).then(
      response => {
        console.log(response)
        if(response === true){
          document.documentElement.style.setProperty('--togglebuttons', '#FC3A3A');
          document.documentElement.style.setProperty('--togglelight', '#2C363F');
          document.documentElement.style.setProperty('--togglelight', '#2C363F');
          document.documentElement.style.setProperty('--dark', 'none');
          document.documentElement.style.setProperty('--light', 'initial');
        }
      }
    )
  }, [])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/").then(
      res => res.json()
    ).then(
      response => {
        setName(response.name)
        setSprite(response.sprites.front_default)
        console.log(response)
      }
    )
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/unlimited" element={<Unlimited/>}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App