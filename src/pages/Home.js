import React from "react"
import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-page">
            <div className="navigation">
                <NavLink className="nav-btn" to="about">About</NavLink>
                <NavLink className="nav-btn" to="contact">Contact</NavLink>
            </div>
            <button className="play-btn">PLAY GAME!</button>
        </div>
    )
}