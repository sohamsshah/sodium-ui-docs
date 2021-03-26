import React from 'react'
import styles from "./AlertPage.module.css"
import themes from "./../../Themes/Themes.module.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {Alert} from "sodium-ui"

const simpleAlert = 
`<Alert>This is a Default Alert</Alert>
<Alert variant="primary">This is a Primary Alert</Alert>
<Alert variant="secondary">This is a Secondary Alert</Alert>
<Alert variant="success">This is a Success Alert</Alert>
<Alert variant="warning">This is a Warning Alert</Alert>
<Alert variant="danger">This is a Danger Alert</Alert>
<Alert variant="info">This is an Info Alert</Alert>
<Alert variant="dark">This is a Dark Alert</Alert>`

const dismissibleAlert = 
`<Alert variant="primary" dismissible>This is a Primary Alert</Alert>
<Alert variant="secondary" dismissible>This is a Secondary Alert</Alert>
<Alert variant="success" dismissible>This is a Success Alert</Alert>
<Alert variant="warning" dismissible>This is a Warning Alert</Alert>
<Alert variant="danger" dismissible>This is a Danger Alert</Alert>
<Alert variant="info" dismissible>This is an Info Alert</Alert>
<Alert variant="dark" dismissible>This is a Dark Alert</Alert>`
function AlertPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Alert</h1>
            <h2 className={themes.lead}>Provide feedback messages to the user based on specific actions and events with Alerts.</h2>
            <h2 className={themes.heading2}>Simple Alerts</h2>
            <p className={themes.paragraph}>Alerts are available which are available in various variants based on the use-case. It takes <code className={themes.code}>variant</code> prop which can be used for particular usecase.  </p>
            <div className={styles.alertGroup}>

                <Alert variant="primary">This is a Primary Alert</Alert>
                <Alert variant="secondary">This is a Secondary Alert</Alert>
                <Alert variant="success">This is a Success Alert</Alert>
                <Alert variant="warning">This is a Warning Alert</Alert>
                <Alert variant="danger">This is a Danger Alert</Alert>
                <Alert variant="info">This is an Info Alert</Alert>
                <Alert variant="dark">This is a Dark Alert</Alert>
            </div>
            <SyntaxHighlighter language="jsx" customStyle={{textAlign:""}}>
              {simpleAlert}  
            </SyntaxHighlighter>

            <h2 className={themes.heading2}>Dismissible Alerts</h2>
            <p className={themes.paragraph}>By adding <code className={themes.code}>dismissible</code> prop, one can enable dismissible Alerts.</p>
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
            <SyntaxHighlighter language="jsx" customStyle={{textAlign:""}}>
              {dismissibleAlert}  
            </SyntaxHighlighter>
            <div className={themes.contentNavigation}>
                <div className={themes.contentNavigationPrev}>
                <p>Prev</p>
                <button><a href="/docs/features">Features</a></button>
                </div>
                <div className={themes.contentNavigationNext}>
                <p>Next</p>
                <button><a href="/docs/avatar">Avatar</a></button>
                </div>
            </div>
        </div>
    )
}

export default AlertPage
