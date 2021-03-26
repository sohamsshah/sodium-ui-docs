import React from 'react'
import themes from "./../../Themes/Themes.module.css"
import styles from"./ToastPage.module.css"
import {Toast} from "sodium-ui"

function ToastPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Toast</h1>
            <h2 className={themes.lead}>Lead Text here</h2>
            <h2 className={themes.heading2}>Simple Toast</h2>
            <div className={styles.toastGroup}>
            <Toast>
                <Toast.Header>
                    Sodium
                </Toast.Header>
                <Toast.Body>
                    Hello World! This is sodium toast
                </Toast.Body>
            </Toast>
            </div>

            <h2 className={themes.heading2}>Stacked Toasts</h2>
            <div className={styles.toastGroup}>
            <Toast>
                <Toast.Header>
                    Sodium
                </Toast.Header>
                <Toast.Body>
                    Hello World! This is sodium toast
                </Toast.Body>
            </Toast>
            <Toast>
                <Toast.Header>
                    Chloride
                </Toast.Header>
                <Toast.Body>
                    Hello World! This is chloride toast
                </Toast.Body>
            </Toast>
            </div>

            
        </div>
    )
}

export default ToastPage
