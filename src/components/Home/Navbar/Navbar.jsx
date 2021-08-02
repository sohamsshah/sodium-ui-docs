import React from "react"
import "./Navbar.css"
import {AiFillGithub} from "react-icons/ai";

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-pills">
                <img style={{width:"50px", height:"50px"}} alt="lib logo"src="/sodium_main.png"></img>
                <div className="nav-brand">
                    <a href="/">Sodium UI</a>
                </div>
            </div>
            <div className="nav-pills">
            <div className="nav-link">
                   <a href="/docs">Docs</a>     
            </div>
            <div className="nav-link">
                   <a href="https://github.com/sohamsshah/sodium-ui" rel="noreferrer" target="_blank"><AiFillGithub style={{fontSize:"1.5rem"}} /></a>     
            </div>
            </div>
        </nav>
    )
}