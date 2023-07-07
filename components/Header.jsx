import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import imageUrl from '../assets/images/avatar-icon.png'

export default function Header() {
  return (
    <header>
      <NavLink className="site-logo" to="/">#VanLife</NavLink>
      <nav>
        <NavLink 
          to="/host"
          className={({isActive}) => isActive ? "active-link" : null }
        >
          Host
        </NavLink>
        <NavLink 
          to="/about"
          className={({isActive}) => isActive ? "active-link" : null }
        >
          About
        </NavLink>
        <NavLink 
          to="/vans"
          className={({isActive}) => isActive ? "active-link" : null }
        >Vans
        </NavLink>
        <Link
          to="/login"
          // className={({isActive}) => isActive ? "login-link" : null }
          >
            <img
              src={imageUrl}
              className="login-icon"
            />
        </Link>
        {/* <NavLink 
          to="/products"
          className={({isActive}) => isActive ? "my-link" : null }
        >Products
        </NavLink> */}
      </nav>
    </header>
  )
}