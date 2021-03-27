import React from "react"
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import themes from "./../../Utils/Themes/Themes.module.css"

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
            <p className={themes.lead}><b>Sodium UI</b> components can be consumed into a React Application via npm package which can be installed via <InlineCode>npm</InlineCode> (or 
                <InlineCode>yarn</InlineCode> if you prefer).
            </p>
            <div className={themes.codeblock}>
                npm install sodium-ui
            </div>

            <h2 className={themes.heading2}>Importing Components</h2>
            <p className={themes.lead}>You can import components directly from Sodium UI. An example demostrating the same is as below:</p>
            
            <div>
            <CodeSection>
              {importComponents}  
            </CodeSection>
            </div>
            
        </div>
    )
}