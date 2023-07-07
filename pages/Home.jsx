import React from "react"
import { Link, useLoaderData } from "react-router-dom"

export function loader() {
    return 'The data is here'
}

export default function Home() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your van</Link>
            <Link to="protected">Protected</Link>
        </div>
    )
};