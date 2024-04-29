import React from 'react'

function infomodal() {
  return (
    <div className='modal-container'>
      <h1 className='howtoplay'>How to play</h1>
      <ul className='bullet'>
        <li>Guess the pokemon by the silhouette!</li>
        <li>Easy: Unlimited attempts. Hints consisting of type, generation, and pokedex entry</li>
        <li>Medium: Three attempts. Hints consisting of type, generation, and pokedex entry</li>
        <li>Hard: Three attempts. Randomly oriented silhouette, and only recieve one hint per mistake.</li>
        <li>Extreme: One attempt. Randomly oriented silhouette, and 30 second timer per silhouette.</li>
      </ul>
    </div>
  )
}

export default infomodal