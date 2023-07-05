import React from "react"
// import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div className="error">
            {/* <img src={bgImg} className="about-hero-image" /> */}
            <div className="not-found-container">
                <h1>Sorry, the page you were looking for was not found.</h1>
                <Link className="link-button" to="/">Return to Home</Link>
            </div>
        </div>
    );
}