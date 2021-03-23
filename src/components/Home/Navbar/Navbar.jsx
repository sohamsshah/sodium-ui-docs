import React from "react"
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-pages">
                <div className="nav-link nav-link-active">
                    Home
                </div>
                <div className="nav-link">
                    Getting Started
                </div >
                <div className="nav-link">
                    Components
                </div>
            </div>
        </nav>
    )
}