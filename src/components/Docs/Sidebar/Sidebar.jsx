import React from "react"
import styles from "./Sidebar.module.css"


export default function Sidebar(){
    
    return(
        <div className={styles.sidebar}>
            <div className={styles.sidelist} style={{paddingTop:"2rem"}}>
            <h4 className={styles.sidelistHeading}> GET STARTED</h4>
            <ul>
            <li><a href="/docs/">Introduction</a></li>
            <li><a href="/docs/">Getting Started</a></li>   
            </ul>
            </div>
            
            
        </div>
    )
}