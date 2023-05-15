import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import '../index.css'
// import Header from './Header'

export default function HostLayout() {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  return (
    <>
    <nav className="host-nav">
      <NavLink 
        to="/host"
        style={({isActive}) => isActive ? activeStyles : null}
        end
        >Dashboard</NavLink>
      <NavLink 
        to="/host/income"
        style={({isActive}) => isActive ? activeStyles : null}
        end
        >
          Income</NavLink>
      <NavLink
        to="/host/vans"
        style={({isActive}) => isActive ? activeStyles : null}
        end
        >Vans</NavLink>
      <NavLink 
        to="/host/reviews"
        style={({isActive}) => isActive ? activeStyles : null}
        end
        >
          Reviews</NavLink>
    </nav>
    <Outlet />
    </>
  )
}