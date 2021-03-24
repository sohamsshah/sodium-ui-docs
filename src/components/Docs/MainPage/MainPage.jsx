import React from "react"
import Sidebar from "./../Sidebar/Sidebar"
import styles from "./MainPage.module.css"

export default function MainPage(){
    return(
        <div className={styles.main}>
            <Sidebar />
            <Content />
        </div>
    )
}