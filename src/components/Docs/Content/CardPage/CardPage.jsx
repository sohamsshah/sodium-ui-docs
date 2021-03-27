import React from 'react'
import styles from "./CardPage.module.css"
import {Card, Button} from "sodium-ui"
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import ContentNavigation from "./../../Utils/ContentNavigation/ContentNavigation";
import themes from "./../../Utils/Themes/Themes.module.css"
import {simpleCard, imageCard} from "./CardCodeSection";

function CardPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Card</h1> 
            <p className={themes.lead}>Card comprises of content and actions about an object that is represent in a well-organized and uniform manner. Cards are widely used to list products, features and more!  </p>
            <h2 className={themes.heading2}>Simple Card</h2>
            <p className={themes.paragraph}>
                The <InlineCode>Card</InlineCode> component has various APIs to organize and populate the content in it. <InlineCode>Card.Title</InlineCode>, <InlineCode>Card.Subtitle</InlineCode> and <InlineCode>Card.Text</InlineCode> are available.
            </p>
            <div className={styles.cardGroup}>
            <Card style={{width:"250px", height:"250px", padding:"1%"}}>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle>Card Subtitle</Card.Subtitle>
                <Card.Text style={{paddingBottom:"2rem"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button >Go Somewhere</Button>
            </Card>
            </div>
            <CodeSection>
                {simpleCard}
            </CodeSection>

            <h2 className={themes.heading2}>Card with Image</h2>
            <p className={themes.paragraph}>
                The <InlineCode>Card</InlineCode> component also has an <InlineCode>Card.Img</InlineCode> API to add Images easily to the Card.
            </p>
            <div className={styles.cardGroup}>
            <Card style={{width:"250px", height:"400px", padding:"1%"}}>
                <Card.Img width="250px" height="150px" src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"/>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle>Card Subtitle</Card.Subtitle>
                <Card.Text style={{paddingBottom:"2rem"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button style={{margin:"0", marginTop:"-2rem"}}>Go Somewhere</Button>
            </Card>
            </div>
            <CodeSection>
                {imageCard}
            </CodeSection>

            <ContentNavigation prev={{name:"Button", link:"/docs/button"}} next={{name:"Input", link:"/docs/input"}} />
        </div>
    )
}

export default CardPage

