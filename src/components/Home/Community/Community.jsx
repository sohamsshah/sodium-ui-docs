import React from "react"
import styles from "./Community.module.css"
import {AiFillGithub} from "react-icons/ai"
import {FaDiscord} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"


export default function Community(){
    return(
        <div className={styles.community}>
            <div className={styles.join}>
                <h2>Join our Community!</h2>
            
            <p>
                <b>Sodium UI</b> is currently under construction 🚧 and we need rockstar contributors to help build and develop a lot of more features and components. Here at Sodium, we thrive to make open source cake walk for everyone 🙌
            </p>

            <div className={styles.links}>
                <a href="https://github.com/sohamsshah/sodium-ui" rel="noreferrer" target="_blank"><AiFillGithub style={{margin:"0 0.5rem"}}/></a>
                <a href="https://discord.com/invite/V9a9xVW" rel="noreferrer" target="_blank"><FaDiscord style={{margin:"0 0.5rem"}} /></a>
                <a href="https://www.linkedin.com/in/soham-shah-a97b5917b/" rel="noreferrer" target="_blank"><AiFillLinkedin style={{margin:"0 0.5rem"}}/></a>
            </div>
            </div>
            
        </div>
    )
}