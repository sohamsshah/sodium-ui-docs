import React from 'react'
import themes from "./../../Utils/Themes/Themes.module.css"
import ContentNavigation from "./../../Utils/ContentNavigation/ContentNavigation";
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import {Box} from "sodium-ui"
import styles from "./BoxPage.module.css"
import {box} from "./BoxCodeSection"

function BoxPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Box</h1>
            <h2 className={themes.lead}>Box is a wrapper component for your UI. It can wrap many of CSS utilities, sections and components.</h2>
            <h2 className={themes.heading2}>Usage</h2>
            <p className={themes.paragraph}>
                Box takes various props which can be handy to define properties to be applied to it. Though, this is easily customizable by custom CSS as well. 
                <ul className={styles.ul}>
                <li><InlineCode>p</InlineCode> to set padding</li>
                <li><InlineCode>m</InlineCode> to set margin</li>
                <li><InlineCode>bgcolor</InlineCode> to set background Color</li>
                <li><InlineCode>color</InlineCode> to set Color</li>
                <li><InlineCode>h</InlineCode> to set Box Height</li>
                <li><InlineCode>w</InlineCode> to set Box Width</li> 
                </ul>
            </p>
            <div className={styles.boxGroup}>
            <Box
                bgcolor="#212121"
                color="#eee"
                h="50%"
                m="1rem"
                p="3rem"
                w="50%"
                >
                <div>
                    This is a Box
                </div>
            </Box>
            </div>
            <CodeSection>
                {box}
            </CodeSection>

            <ContentNavigation next={{name:"Button", link:"/docs/button"}} prev={{name:"Avatar", link:"/docs/avatar"}}/>

        </div>
    )
}

export default BoxPage
