import React from "react"
import Navbar from "./../Home/Navbar/Navbar"
import MainPage from "./../Docs/MainPage/MainPage"
import Footer from "./../Home/Footer/Footer"
import styles from "./index.module.css"

export default function Docs(){
    return(
        <div className={styles.layout}>
            <div>
            <Navbar />
            <MainPage />
            </div>
            <div>
            <Footer />
            </div>
        </div>
    )
}