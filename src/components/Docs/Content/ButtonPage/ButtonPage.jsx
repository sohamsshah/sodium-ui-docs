import React from 'react'
import styles from "./ButtonPage.module.css"
import {Button} from "sodium-ui"
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import ContentNavigation from "./../../Utils/ContentNavigation/ContentNavigation";
import themes from "./../../Utils/Themes/Themes.module.css"

const filledButtons =
`<Button variant="default" kind="filled">Default </Button>
<Button variant="primary" kind="filled">Primary </Button>
<Button variant="secondary" kind="filled">Secondary </Button>
<Button variant="success" kind="filled">Success</Button>
<Button variant="warning" kind="filled">Warning </Button>
<Button variant="danger" kind="filled">Danger </Button>
<Button variant="info" kind="filled">Info </Button>
<Button variant="dark" kind="filled">Dark </Button>`

const borderedButtons = 
`<Button variant="default" kind="bordered">Default </Button>
<Button variant="primary" kind="bordered">Primary </Button>
<Button variant="secondary" kind="bordered">Secondary </Button>
<Button variant="success" kind="bordered">Success</Button>
<Button variant="warning" kind="bordered">Warning </Button>
<Button variant="danger" kind="bordered">Danger </Button>
<Button variant="info" kind="bordered">Info </Button>
<Button variant="dark" kind="bordered">Dark </Button>`

const floatingActionButtons = 
`<Button variant="fab-standard" kind="fab">+ </Button>
<Button variant="fab-extended" kind="fab"><span style={{padding:"0.5rem"}}>ADD Here</span></Button>
<Button variant="fab-standard" kind="fab" style={{backgroundColor: "red"}}>-</Button>`

function ButtonPage() {
    return (
        <>
          <h1 className={themes.heading1}>Buttons</h1> 
          <p className={themes.lead}>Custom button styles for actions in forms, dialogs, and more in various variants, kinds and states.</p>
        
        <h2 className={themes.heading2}>Filled Buttons</h2>
        <p className={themes.paragraph}>Filled buttons can be created by passing the value <InlineCode>filled</InlineCode>to the <InlineCode>kind</InlineCode> prop. 
        Also, <InlineCode>variant</InlineCode> prop can be passed; which specifies the type of the button to be rendered based on use cases. 
        </p>
        <div className={styles.buttonGroup}>
        <Button variant="default" kind="filled">Default </Button>
        <Button variant="primary" kind="filled">Primary </Button>
        <Button variant="secondary" kind="filled">Secondary </Button>
        <Button variant="success" kind="filled">Success</Button>
        <Button variant="warning" kind="filled">Warning </Button>
        <Button variant="danger" kind="filled">Danger </Button>
        <Button variant="info" kind="filled">Info </Button>
        <Button variant="dark" kind="filled">Dark </Button>
        </div>

        <CodeSection>
            {filledButtons}  
        </CodeSection>      

        <h2 className={themes.heading2}>Bordered Buttons</h2>
        <p className={themes.paragraph}>Boreded buttons can be created by passing the value <InlineCode>bordered</InlineCode>to the <InlineCode>kind</InlineCode> prop.
        </p>
        <div className={styles.buttonGroup}>
        <Button variant="default" kind="bordered">Default </Button>
        <Button variant="primary" kind="bordered">Primary </Button>
        <Button variant="secondary" kind="bordered">Secondary </Button>
        <Button variant="success" kind="bordered">Success</Button>
        <Button variant="warning" kind="bordered">Warning </Button>
        <Button variant="danger" kind="bordered">Danger </Button>
        <Button variant="info" kind="bordered">Info </Button>
        <Button variant="dark" kind="bordered">Dark </Button>
        </div>
        <CodeSection>
            {borderedButtons}  
        </CodeSection>  

        <h2 className={themes.heading2}>Floating Action Buttons</h2>
        <p className={themes.paragraph}>Floating Action Buttons are quite useful in web applications, especially in mobile-first development. The <InlineCode>fab</InlineCode> to the <InlineCode>kind</InlineCode> prop. 
        Also, there are two <InlineCode>variant</InlineCode> available for Floating Action Buttons; <InlineCode>standard</InlineCode> and <InlineCode>extended</InlineCode> props to it.
        </p>
        <div className={styles.buttonGroup}>
        <Button variant="fab-standard" kind="fab">+ </Button>
        <Button variant="fab-extended" kind="fab"><span style={{padding:"0.5rem"}}>ADD Here</span></Button>
        <Button variant="fab-standard" kind="fab" style={{backgroundColor: "red"}}>-</Button>
        
        </div>
        <CodeSection>
            {floatingActionButtons}  
        </CodeSection>  
        <ContentNavigation next={{name:"Card", link:"/docs/card"}} prev={{name:"Box", link:"/docs/box"}} />

        </>
    )
}

export default ButtonPage
