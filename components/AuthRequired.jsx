import React from "react"
import { Outlet, Navigate } from 'react-router-dom'

export default function AuthRequired(){
    //Fake auth
    const isLoggedIn = true
    if (!isLoggedIn) {
        // Redirect them to the /login route
        return <Navigate to="/login" />
    }
    // Otherwise: 
    return <Outlet />
}