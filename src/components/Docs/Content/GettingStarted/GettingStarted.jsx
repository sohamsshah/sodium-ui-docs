import React from "react"
import themes from "./../../Themes/Themes.module.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const importComponents = `
import * as React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'sodium-ui';

function App() {
return <Button variant="primary">Hello World</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
`
export default function MainPage(){
    return(
        <div>
            <h1 className={themes.heading1}>Getting Started</h1>
            <p className={themes.lead}>Learn how to include Sodium UI in your project</p>
            <h1 className={themes.heading2}>Installation</h1>
            <p className={themes.lead}><b>Sodium UI</b> components can be consumed into a React Application via npm package which can be installed via <span className={themes.code}>npm</span> (or 
            <span className={themes.code}>yarn</span> if you prefer).
            </p>
            <div className={themes.codeblock}>
                npm install sodium-ui
            </div>

            <h2 className={themes.heading2}>Importing Components</h2>
            <p className={themes.lead}>You can import components directly from Sodium UI. An example demostrating the same is as below:</p>
            
            <div>
            <SyntaxHighlighter language="javascript" customStyle={{textAlign:""}}>
              {importComponents}  
            </SyntaxHighlighter>  
            </div>
        </div>
    )
}