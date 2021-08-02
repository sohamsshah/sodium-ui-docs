import React from 'react'
import themes from "./../../Utils/Themes/Themes.module.css"
import ContentNavigation from "./../../Utils/ContentNavigation/ContentNavigation";
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import styles from "./SpinnerPage.module.css"
import {spinner} from "./SpinnerCodeSection"
import {Spinner} from "sodium-ui"

function SpinnerPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Spinner</h1>
            <h2 className={themes.lead}>Spinner component can used to represent Loading State of a page, section or a component. This is quite handy for a better feedback loop for the users.</h2>
            <h2 className={themes.heading2}>Usage</h2>
            <p className={themes.paragraph}>
                Spinner component takes <InlineCode>size</InlineCode> prop which is for defining the spinner size. 
                It takes <InlineCode>small</InlineCode>, <InlineCode>medium</InlineCode> and <InlineCode>large</InlineCode> as values to the size prop.
            </p>
            <div className={styles.spinnerGroup}>
                <Spinner size="small" />
                <Spinner size="medium" />
                <Spinner size="large" />
            </div>
            <CodeSection>
                {spinner}
            </CodeSection>
            <ContentNavigation prev={{name:"Modal", link:"/docs/modal"}} next={{name:"Toast", link:"/docs/toast"}} />
        </div>
    )
}

export default SpinnerPage
