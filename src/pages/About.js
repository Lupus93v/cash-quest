import React from "react"
import { NavLink } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page">
            <div className="header">
                <div className="logo-txt">
                    <img src="./pictures/logo-txt.png" />
                </div>
                <div className="navigation">
                    <NavLink className="nav-btn" to="/">Home</NavLink>
                    <NavLink className="nav-btn" to="/contact">Contact</NavLink>
                </div>
            </div>
            <h1>About Page!</h1>
        </div>
    )
}