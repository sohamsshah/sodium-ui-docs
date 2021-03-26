import React from 'react'
import styles from "./AlertPage.module.css"
import themes from "./../../Themes/Themes.module.css";
import {Alert} from "sodium-ui"

function AlertPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Alert</h1>
            <h2 className={themes.lead}>Provide feedback messages to the user based on specific actions and events with Alerts.</h2>
            <h2 className={themes.heading2}>Simple Alerts</h2>
            <div className={styles.alertGroup}>
                <Alert>This is a Default Alert</Alert>
                <Alert variant="primary">This is a Primary Alert</Alert>
                <Alert variant="secondary">This is a Secondary Alert</Alert>
                <Alert variant="success">This is a Success Alert</Alert>
                <Alert variant="warning">This is a Warning Alert</Alert>
                <Alert variant="danger">This is a Danger Alert</Alert>
                <Alert variant="info">This is an Info Alert</Alert>
                <Alert variant="dark">This is a Dark Alert</Alert>
            </div>

            <h2 className={themes.heading2}>Dismissible Alerts</h2>
            <div className={styles.alertGroup}>
                <Alert dismissible>This is a Default Alert</Alert>
                <Alert variant="primary" dismissible>This is a Primary Alert</Alert>
                <Alert variant="secondary" dismissible>This is a Secondary Alert</Alert>
                <Alert variant="success" dismissible>This is a Success Alert</Alert>
                <Alert variant="warning" dismissible>This is a Warning Alert</Alert>
                <Alert variant="danger" dismissible>This is a Danger Alert</Alert>
                <Alert variant="info" dismissible>This is an Info Alert</Alert>
                <Alert variant="dark" dismissible>This is a Dark Alert</Alert>
            </div>
        </div>
    )
}

export default AlertPage
