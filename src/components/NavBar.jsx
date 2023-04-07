import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  const activeClass = ({isActive}) => (isActive ? "active" : "")

  return (
    <div className='navbar-container'>
      <div className="navbar">
        <NavLink className={activeClass} to="/">
            Inicio
        </NavLink>
        <NavLink className={activeClass} to="pokedex">
            Pokedex
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar
