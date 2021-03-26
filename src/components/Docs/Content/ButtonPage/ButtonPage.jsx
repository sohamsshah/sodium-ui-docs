import React from 'react'
import themes from "./../../Themes/Themes.module.css"
import styles from "./ButtonPage.module.css"
import {Button} from "sodium-ui"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function ButtonPage() {
    return (
        <>
          <h1 className={themes.heading1}>Buttons</h1> 
          <p className={themes.lead}>Custom button styles for actions in forms, dialogs, and more in various variants, kinds and states.</p>
        
        <h2 className={themes.heading2}>Filled Buttons</h2>
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

        <h2 className={themes.heading2}>Bordered Buttons</h2>
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

        <h2 className={themes.heading2}>Floating Action Buttons</h2>
        <div className={styles.buttonGroup}>
        <Button variant="fab-standard" kind="fab">+ </Button>
        <Button variant="fab-extended" kind="fab"><span style={{padding:"0.5rem"}}>ADD Here</span></Button>
        <Button variant="fab-standard" kind="fab" style={{backgroundColor: "red"}}>-</Button>
        
        </div>
        </>
    )
}

export default ButtonPage
