import React from "react"
import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-page">
            <div className="header">
                <div className="logo-txt">
                    <img src="./pictures/logo-txt.png" />
                </div>
                <div className="navigation">
                    <NavLink className="nav-btn" to="/about">About</NavLink>
                    <NavLink className="nav-btn" to="/contact">Contact</NavLink>
                </div>
            </div>
            <button className="play-btn">PLAY GAME!</button>
        </div>
    )
}