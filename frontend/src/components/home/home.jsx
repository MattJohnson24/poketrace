import React, { useEffect } from 'react'
import "../../styles.css"
import info from "../../images/info-icon.svg"
import dark from "../../images/dark-icon.svg"
import light from "../../images/light-icon.svg"
import Modal from "../info-modal/infomodal.jsx"

function darkMode() {
  document.body.style = 'background: #2C363F;';
  document.querySelectorAll('.difficulty-button').forEach(function(button) {
    button.style.backgroundColor = '#FC3A3A';
});
  document.getElementsByClassName("dark-icon")[0].style = 'display: none';
  document.getElementsByClassName("light-icon")[0].style = 'display: initial';
  document.cookie = `dark=true;`
}

function lightMode() {
  document.body.style = 'background: #FC3A3A;';
  document.querySelectorAll('.difficulty-button').forEach(function(button) {
    button.style.backgroundColor = '#2C363F';
});
  document.getElementsByClassName("light-icon")[0].style = 'display: none';
  document.getElementsByClassName("dark-icon")[0].style = 'display: initial';
  document.cookie = `dark=false;`
}

function home() {
  return (
    <div className='home-container'>
      <Modal></Modal>
      <img src={dark} alt="" className='dark-icon' onClick={() => darkMode()}/>
      <img src={light} alt="" className='light-icon' onClick={() => lightMode()}/>
      <h1 className='poketrace-header'>PokéTráce</h1>
      <div className='gamemode-header'>
        <span>Difficulty</span>
        <img src={info} alt="" className='info-icon'/>
      </div>
      <div className='difficulty-container'>
        <a className='spacing' href="/unlimited">
          <button className='difficulty-button'>Easy</button>
        </a>
        <a className='spacing' href="/unlimited">
          <button className='difficulty-button'>Medium</button>
        </a>
        <a className='spacing' href="/unlimited">
          <button className='difficulty-button'>Hard</button>
        </a>
        <a className='spacing' href="/unlimited">
          <button className='difficulty-button'>Extreme</button>
        </a>
      </div>
    </div>
  )
}

export default home