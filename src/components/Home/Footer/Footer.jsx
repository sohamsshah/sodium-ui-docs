import React from "react"
import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <div className={styles.footer}>
            Crafting Components with 💖 by <a className={styles.footerLink}href="https://github.com/sohamsshah">sohamsshah</a>
        </div>
    )
}