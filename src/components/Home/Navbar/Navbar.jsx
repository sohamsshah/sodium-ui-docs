import React from "react"
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-pills">
            <img style={{width:"50px", height:"50px"}}src="/sodium_main.png"></img>
                <div className="nav-brand">
                    Sodium UI 
                </div>
            </div>
            <div className="nav-pills">
            <div className="nav-link">
                    Docs    
                </div>
                <div className="nav-link">
                    Community
                </div>
                <div className="nav-link">
                    Github
                </div >
            </div>
        </nav>
    )
}