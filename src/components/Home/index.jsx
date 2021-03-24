import React from "react"
import Navigation from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import Features from "./Features/Features"
import Community from "./Community/Community"
import Footer from "./Footer/Footer"

export default function Home(){
    return(
        <div>
           <Navigation />
           <Hero />
           <Features />
           <Community/>
           <Footer />
        </div>
    )
}