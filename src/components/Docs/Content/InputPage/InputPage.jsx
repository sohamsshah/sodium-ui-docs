import React from 'react'
import styles from "./InputPage.module.css"
import {Input} from "sodium-ui"
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import ContentNavigation from "./../../Utils/ContentNavigation/ContentNavigation";
import themes from "./../../Utils/Themes/Themes.module.css"
import {standardInput, outlinedInput} from "./InputCodeSection"

function InputPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Input</h1> 
            <p className={themes.lead}>
                Inputs are essential to take user Data and handle Forms. Having interractive UI to take Inputs from the User; <InlineCode>Input</InlineCode> component can be imported for your application. 
            </p>
            <h2 className={themes.heading2}>Standard Input</h2>
            <p className={themes.paragraph}>
                The <InlineCode>Input</InlineCode> component takes <InlineCode>variant</InlineCode> prop which determines the variant of the Input. Standard Input takes <InlineCode>standard</InlineCode> value as default for <InlineCode>variant</InlineCode> prop; so don't need to be explicitly defined.
                There are various sizes available for the Input. It can be defined using the <InlineCode>size</InlineCode> prop.
            </p>
            <div className={styles.inputGroup}>
                <Input variant="standard" size="small">Name</Input>
                <Input variant="standard" size="medium">Email</Input>
                <Input variant="standard" size="large">Address</Input>
            </div>
            <CodeSection>
                {standardInput}
            </CodeSection>

            <h2 className={themes.heading2}>Outlined Input</h2>
            <p className={themes.paragraph}>
                The <InlineCode>outlined</InlineCode> value can be passed to <InlineCode>variant</InlineCode> prop to have Outlined Input. Also, the sizes can be defined as per requirement.
            </p>
            <div className={styles.inputGroup}>
                <Input variant="outlined" size="small">Name</Input>
                <Input variant="outlined" size="medium">Email</Input>
                <Input variant="outlined" size="large">Address</Input>
            </div>
            <CodeSection>
                {outlinedInput}
            </CodeSection>
            <ContentNavigation prev={{name:"Card", link:"/docs/card"}} next={{name:"Paper", link:"/docs/paper"}}/>
        </div>
    )
}

export default InputPage

