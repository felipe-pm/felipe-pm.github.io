import React from 'react'
import { NavLink } from 'react-router-dom'
import Pokedex from '../assets/pokedex.png'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='main-container'>
        <header>
            <div className="logo-container">
                <NavLink to='/'>
                    <img
                        className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
                        alt="logo pokemon"
                    />
                </NavLink>
                <h1>Primera Generación</h1>
            </div>
        </header>
        <div className='start'>
            <h2>Bienvenido!</h2>
            <NavLink to='pokedex'>
                <img
                    src={Pokedex}
                    alt="pokedex"
                />
            </NavLink>
            <h2>Pokedex Primera Generación</h2>
        </div>
    </div>
  )
}

export default HomePage
