import React from 'react'
import styles from "./PaperPage.module.css"
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import ContentNavigation from "./../../Utils/ContentNavigation/ContentNavigation";
import {Paper} from "sodium-ui"
import themes from "./../../Utils/Themes/Themes.module.css"
import {elevatedPaper, outlinedPaper, squaredPaper} from "./PaperCodeSection";

function PaperPage() {
    return (
        <div>
          <h1 className={themes.heading1}>Paper</h1>
          <h2 className={themes.lead}>Paper is a surface component that which can be resized, shuffled and available in different variants; in turn replicating qualities of a Physical paper.</h2>
          
          <h1 className={themes.heading2}>Elevated Paper</h1>
            <p className={themes.paragraph}> 
                Elevated Paper provides a elevation effect to the property by using the box-shadow. The <InlineCode>elevation</InlineCode> prop takes values between 0 to 10 which defines the overall elevation of the Paper Component. Paper component has default border-radius. To render squared borders pass <InlineCode>true</InlineCode> to the <InlineCode>square</InlineCode> prop.
            </p>

            <div className={styles.paperGroup}>
                <Paper elevation={2}>
                    This has an elevation of 2
                </Paper>
                <Paper elevation={4}>
                This has an elevation of 4
                </Paper>
                <Paper elevation={6}>
                This has an elevation of 6
                </Paper>
            </div>
            <CodeSection>
                {elevatedPaper}
            </CodeSection>

            <h1 className={themes.heading2}>Outlined Paper</h1>
            <p className={themes.paragraph}> 
                Outlined effect can be applied to the Paper by passing the <InlineCode>outlined</InlineCode> value to the <InlineCode>variant</InlineCode> prop. 
            </p>
            <div className={styles.paperGroup}>
                <Paper variant="outlined">
                    This has an elevation of 2
                </Paper>
                <Paper variant="outlined">
                This has an elevation of 4
                </Paper>
                <Paper variant="outlined">
                This has an elevation of 6
                </Paper>
            </div>
            <CodeSection>
                {outlinedPaper}
            </CodeSection>

            <h1 className={themes.heading2}>Squared Paper</h1>
            <p className={themes.paragraph}> 
                By default, the Paper has a border-radius. To give squared borders, simply pass <InlineCode>square</InlineCode> to the Component.
            </p>
            <div className={styles.paperGroup}>
                <Paper square>
                    This is a Squared Paper with elevation
                </Paper>
                <Paper variant="outlined" square>
                This is a Squared Paper with outline
                </Paper>
            </div>
            <CodeSection>
                {squaredPaper}
            </CodeSection>

            <ContentNavigation next={{name:"List", link:"/docs/list"}} prev={{name:"Input", link:"/docs/input"}}/>
        </div>
    )
}

export default PaperPage

