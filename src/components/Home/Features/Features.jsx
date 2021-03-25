import React from "react"
import styles from "./Features.module.css"


export default function Features(){
    return(
        <div className={styles.features}>
            <div className={styles.cardDeck}>
                <div className={styles.card}>
                    <h2> It's Simple </h2>
                    <p>
                    Sodium UI is simple and modular web component library for blazingly fast web development. Just install and start importing the components that your app needs!
                    </p>
                </div>
                <div className={styles.card}>
                    <h2> Accessible</h2>
                    <p>
                    The React component model gives us more control over form and function of each component. All components are crafted following the WAI-ARIA rules.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2> Composable</h2>
                    <p>
                    Aim is to provide components for your app so you can be saved from developing everything from scratch; and ofcourse, it supports manual styling!
                    </p>
                </div>
            </div>
            
            
        </div>
    )
}
