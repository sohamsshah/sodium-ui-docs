import React from "react"
import Sidebar from "./../Sidebar/Sidebar"
import Footer from "./../../Home/Footer/Footer"
import {BrowserRouter, Route,  Switch} from "react-router-dom"
import GettingStarted from "./../Content/GettingStarted/GettingStarted"
import ButtonPage from "./../Content/ButtonPage/ButtonPage"
import styles from "./MainPage.module.css"


export default function MainPage(){
    return(
        <div className={styles.main}>
            <div  className={styles.sidebar}>
            <Sidebar />
            </div>
            <div className={styles.content}>
            <div className={styles.mainContent}>
            <BrowserRouter>
            <Switch>
            <Route path="/docs/button/" component={() => <ButtonPage />} />
            <Route path="/docs/" exact component={() => <GettingStarted />} />
            
            </Switch>
            </BrowserRouter>
            </div>
            <Footer />
            </div>
            
        </div>
    )
}