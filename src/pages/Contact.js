import React from "react"
import { NavLink } from "react-router-dom"

export default function Contact() {
    return (
        <div className="contact-page">
            <div className="header">
                <div className="logo-txt">
                    <img src="./pictures/logo-txt.png" />
                </div>
                <div className="navigation">
                    <NavLink className="nav-btn" to="/">Home</NavLink>
                    <NavLink className="nav-btn" to="/about">About</NavLink>
                </div>
            </div>
            <h1>Contact Page!</h1>
        </div>
    )
}