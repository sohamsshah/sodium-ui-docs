import React from "react"
import Sidebar from "./../Sidebar/Sidebar"
import Footer from "./../../Home/Footer/Footer"
import {BrowserRouter, Route,  Switch} from "react-router-dom"
import GettingStarted from "./../Content/GettingStarted/GettingStarted"
import ButtonPage from "./../Content/ButtonPage/ButtonPage"
import FeaturesPage from "./../Content/FeaturesPage/FeaturesPage"
import AlertPage from "./../Content/AlertPage/AlertPage"
import AvatarPage from "./../Content/AvatarPage/AvatarPage"
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
            
            <Route path="/docs/" exact component={GettingStarted} />
            <Route path="/docs/features" exact component={FeaturesPage} />
            <Route path="/docs/alert" exact component={AlertPage} />
            <Route path="/docs/avatar" exact component={AvatarPage} />
            <Route path="/docs/button" exact component={ButtonPage} />
            
            
            </Switch>
            </BrowserRouter>
            </div>
            <Footer />
            </div>
            
        </div>
    )
}