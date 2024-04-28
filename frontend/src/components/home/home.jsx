import React from 'react'
import "../../styles.css"

function home() {
  return (
    <div className='home-container'>
      <h1 className='poketrace-header'>PokéTráce</h1>
      <h3 className='gamemode-header'>Unlimited</h3>
      <div className='difficulty-container'>
        <span><a className='difficulty-text' href="/unlimited">Easy</a></span>
        <span><a className='difficulty-text' href="/unlimited">Hard</a></span>
      </div>
      <h3 className='gamemode-header'>Challenge</h3>
    </div>
  )
}

export default home