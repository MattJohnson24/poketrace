import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home.jsx"
import Unlimited from "./components/unlimited/unlimited.jsx"

function App() {

  const [name, setName] = useState("")
  const [sprite, setSprite] = useState("")

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