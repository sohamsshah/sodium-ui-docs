import React from 'react'
import styles from "./ListPage.module.css"
import {List} from "sodium-ui"
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import ContentNavigation from "./../../Utils/ContentNavigation/ContentNavigation";
import themes from "./../../Utils/Themes/Themes.module.css"
import {simpleList, flushList} from "./ListCodeSection"
function ListPage() {
    return (
        <div>
           <h1 className={themes.heading1}>List</h1> 
            <p className={themes.lead}>
               List is a powerful and flexible way to represent series of content in a structured way.
            </p> 

            <h2 className={themes.heading2}>Simple List</h2>
            <p className={themes.paragraph}>
                <InlineCode>List</InlineCode> Component takes various list items as children which can be rendered using <InlineCode>List.Item</InlineCode> API. Active state of a list item can be show by passing the <InlineCode>active</InlineCode> prop to the List Item.
            </p>
            <div className={styles.listGroup}>
                <List>
                    <List.Item>
                    Lithium
                    </List.Item>
                    <List.Item active>
                    Sodium
                    </List.Item>
                    <List.Item>
                    Potassium
                    </List.Item>
                    <List.Item disabled>
                    Rubidium
                    </List.Item> 
                </List>
            </div>
            <CodeSection>
                {simpleList}
            </CodeSection>

            <h2 className={themes.heading2}>Flush List</h2>
            <p className={themes.paragraph}>
                Flush <InlineCode>List</InlineCode> can be created by passing <InlineCode>flush</InlineCode> to the <InlineCode>variant</InlineCode> prop.
            </p>
            <div className={styles.listGroup}>
                <List variant="flush">
                    <List.Item>
                    Lithium
                    </List.Item>
                    <List.Item active>
                    Sodium
                    </List.Item>
                    <List.Item>
                    Potassium
                    </List.Item>
                    <List.Item disabled>
                    Rubidium
                    </List.Item> 
                </List>
            </div>
            <CodeSection>
                {flushList}
            </CodeSection>

            <ContentNavigation prev={{name:"Paper", link:"/docs/paper"}} next={{name:"Modal", link:"/docs/Modal"}}/>
        </div>
    )
}

export default ListPage
