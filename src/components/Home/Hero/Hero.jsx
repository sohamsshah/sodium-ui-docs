import React from "react"
import {Button} from "sodium-ui"
import styles from "./Hero.module.css"

export default function Hero(){
    return(
        <div className={styles.hero}>
          <div className="main-text">
            <img className={styles.hero__img} src="/sodium_bg.png" alt=""/>
            <div className={styles.hero__brand} >
              Sodium UI
            </div>
            <div className={styles.hero__text}>
            Web Component library to build elegant and <span>React</span>(ive) Apps.  
            </div>
            <div>
                <Button className={styles.hero__btn}> Get Started</Button>
                <span className={styles.hero__code}>$ npm i sodium-ui</span>
            </div> 
          </div>
          
        </div>
    )}