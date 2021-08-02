import React from 'react'
import styles from "./AlertPage.module.css"
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import {Alert} from "sodium-ui"
import themes from "./../../Utils/Themes/Themes.module.css"
import ContentNavigation from "./../../Utils/ContentNavigation/ContentNavigation";

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
            <p className={themes.paragraph}>Alerts are available which are available in various variants based on the use-case. It takes <InlineCode>variant</InlineCode> prop which can be used for particular usecase.  </p>
            <div className={styles.alertGroup}>

                <Alert variant="primary">This is a Primary Alert</Alert>
                <Alert variant="secondary">This is a Secondary Alert</Alert>
                <Alert variant="success">This is a Success Alert</Alert>
                <Alert variant="warning">This is a Warning Alert</Alert>
                <Alert variant="danger">This is a Danger Alert</Alert>
                <Alert variant="info">This is an Info Alert</Alert>
                <Alert variant="dark">This is a Dark Alert</Alert>
            </div>
            <CodeSection>
                {simpleAlert}
            </CodeSection>

            <h2 className={themes.heading2}>Dismissible Alerts</h2>
            <p className={themes.paragraph}>By adding <InlineCode>dismissible</InlineCode> prop, one can enable dismissible Alerts.</p>
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
            <CodeSection>
                {dismissibleAlert}
            </CodeSection>
            <ContentNavigation prev={{name:"Features", link:"/docs/features"}} next={{name:"Avatar", link:"/docs/avatar"}} />

            
        </div>
    )
}

export default AlertPage
