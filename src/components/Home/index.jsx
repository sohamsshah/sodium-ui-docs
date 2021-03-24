import React from "react"
import Navigation from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import Features from "./Features/Features"

export default function Home(){
    return(
        <div>
           <Navigation />
           <Hero />
           <Features />
        </div>
    )
}