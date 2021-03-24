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

{/* <Card style={{padding:"1rem", width:"250px", minHeight:"250px", margin:"2rem"}}>
                <Card.Title style={{paddingBottom:"1rem"}}>Its Simple</Card.Title>
                <Card.Text>
                    Sodium UI is simple and modular web component library for blazingly fast web development. Just install and start importing the components that your app needs!
                </Card.Text>
                </Card>
                
                <Card style={{padding:"1rem", width:"250px", height:"250px", margin:"2rem"}}>
                <Card.Title style={{paddingBottom:"1rem"}}>Accessible</Card.Title>
                <Card.Text>
                The React component model gives us more control over form and function of each component. All components are crafted following the WAI-ARIA rules.
                </Card.Text>
                </Card>

                <Card style={{padding:"1rem", width:"250px", height:"250px", margin:"2rem"}}>
                <Card.Title style={{paddingBottom:"1rem"}}>Composable</Card.Title>
                <Card.Text>
                    Aim is to provide components for your app so you can be saved from developing everything from scratch; and ofcourse, it supports manual styling!
                </Card.Text>
                </Card> */}