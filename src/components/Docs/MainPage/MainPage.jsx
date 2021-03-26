import React from "react"
import Sidebar from "./../Sidebar/Sidebar"
import Footer from "./../../Home/Footer/Footer"
import {BrowserRouter, Route,  Switch} from "react-router-dom"
import GettingStarted from "./../Content/GettingStarted/GettingStarted"
import ButtonPage from "./../Content/ButtonPage/ButtonPage"
import FeaturesPage from "./../Content/FeaturesPage/FeaturesPage"
import AlertPage from "./../Content/AlertPage/AlertPage"
import AvatarPage from "./../Content/AvatarPage/AvatarPage"
import ModalPage from "./../Content/ModalPage/ModalPage"
import ToastPage from "./../Content/ToastPage/ToastPage"
import TypographyPage from "./../Content/TypographyPage/TypographyPage"
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
            <Route path="/docs/modal" exact component={ModalPage} />
            <Route path="/docs/toast" exact component={ToastPage} />
            <Route path="/docs/typography" exact component={TypographyPage} />

            
            </Switch>
            </BrowserRouter>
            </div>
            <Footer />
            </div>
            
        </div>
    )
}