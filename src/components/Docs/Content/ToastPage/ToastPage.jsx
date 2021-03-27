import React from 'react'
import styles from"./ToastPage.module.css"
import {Toast} from "sodium-ui"
import themes from "./../../Utils/Themes/Themes.module.css"
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"

function ToastPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Toast</h1>
            <h2 className={themes.lead}>Push Notifications to your user by using simple and lightweight notififying toasts.</h2>
            <h2 className={themes.heading2}>Simple Toast</h2>
            <p className={themes.paragraph}>Create Toasts easily by importing <InlineCode>Toast</InlineCode> from Sodium UI. The API also provides <InlineCode>Toast.Header</InlineCode> and <InlineCode>Toast.Body</InlineCode> for more detailed styling.</p>
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
            <p className={themes.paragraph}>You can also push stacked notifications using Toasts.</p>
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
