import React from 'react'
import themes from "./../../Themes/Themes.module.css"
import {Button} from "sodium-ui"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function ButtonPage() {
    return (
        <>
          <h1 className={themes.heading1}>Buttons</h1> 
          <p className={themes.lead}>Custom button styles for actions in forms, dialogs, and more in various variants, kinds and states.</p>
        
        <h2 className={themes.heading2}>Example</h2>
        <Button variant="primary" kind="bordered">Default </Button>
        </>
    )
}

export default ButtonPage
