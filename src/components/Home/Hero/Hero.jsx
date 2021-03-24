import React from "react"
import {Button} from "sodium-ui"
import "./Hero.css"

export default function Hero(){
    return(
        <div className="hero">
          <div className="main-text">
            <img className="hero-img" src="/sodium_bg.png" alt=""/>
            <div className="hero-brand">
              Sodium UI
            </div>
            <div className="hero-text">
            Web Component library to build elegant and <span>React</span>(ive) Apps.  
            </div>
            <div>
                <Button className="hero-btn"> Get Started</Button>
                <span className="hero-code"> $ npm i sodium-ui</span>
            </div>
            
          </div>
          
        </div>
    )}