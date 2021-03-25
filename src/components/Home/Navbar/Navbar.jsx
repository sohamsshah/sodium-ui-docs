import React from "react"
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-pills">
            <img style={{width:"50px", height:"50px"}} alt="lib logo"src="/sodium_main.png"></img>
                <div className="nav-brand">
                    Sodium UI 
                </div>
            </div>
            <div className="nav-pills">
            <div className="nav-link">
                   <a href="/docs">Docs</a>     
            </div>
            <div className="nav-link">
                   <a href="/docs">Community</a>     
            </div>
            <div className="nav-link">
                   <a href="/docs">Github</a>     
            </div>
            </div>
        </nav>
    )
}