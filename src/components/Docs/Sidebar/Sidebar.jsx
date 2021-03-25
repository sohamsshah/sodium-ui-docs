import React from "react"
import styles from "./Sidebar.module.css"


export default function Sidebar(){
    
    return(
        <div className={styles.sidebar}>
            <ul>
            <li><a href="/docs/button">Getting Started</a></li>
            </ul>
            
        </div>
    )
}