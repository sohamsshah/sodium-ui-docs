import React from "react"
import styles from "./Sidebar.module.css"


export default function Sidebar(){
    
    return(
        <div className={styles.sidebar}>
            <div className={styles.sidelist} style={{paddingTop:"2rem"}}>
            <h4 className={styles.sidelistHeading}> INTRODUCTION</h4>
            <ul>
            <li><a href="/docs/">Getting Started</a></li>
            <li><a href="/docs/features">Features</a></li>   
            </ul>
            </div>

            <div className={styles.sidelist} style={{paddingTop:"2rem"}}>
            <h4 className={styles.sidelistHeading}> COMPONENTS</h4>
            <ul>
            <li><a href="/docs/alert">Alert</a></li>
            <li><a href="/docs/avatar">Avatar</a></li>  
            <li><a href="/docs/box">Box</a></li>  
            <li><a href="/docs/button">Button</a></li>  
            <li><a href="/docs/card">Card</a></li>  
            <li><a href="/docs/input">Input</a></li>
            <li><a href="/docs/paper">Paper</a></li>  
            <li><a href="/docs/list">List</a></li>   
            <li><a href="/docs/modal">Modal</a></li>
            <li><a href="/docs/spinner">Spinner</a></li>
            <li><a href="/docs/toast">Toast</a></li>
            <li><a href="/docs/typography">Typography</a></li>
           </ul>
            </div>
            
            
        </div>
    )
}