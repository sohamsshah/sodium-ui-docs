import React from 'react'
import styles from"./ModalPage.module.css"
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import ContentNavigation from "./../../Utils/ContentNavigation/ContentNavigation";
import {Modal, Button} from "sodium-ui"
import {useState} from "react"
import themes from "./../../Utils/Themes/Themes.module.css"
import {smallModal, mediumModal, largeModal} from "./ModalCodeSection";

function ModalPage() {
    const [small, setSmall] = useState(false);
    const [medium, setMedium] = useState(false);
    const [large, setLarge] = useState(false);
    const showSmall = () => {
        setSmall(true)
    }
    const hideSmall = () => {
        setSmall(false)
    }

    const showMedium = () => {
        setMedium(true)
    }
    const hideMedium = () => {
        setMedium(false)
    }

    const showLarge = () => {
        setLarge(true)
    }
    const hideLarge = () => {
        setLarge(false)
    }
    return (
        <div>
            <h1 className={themes.heading1}>Modal</h1>
            <h2 className={themes.lead}>Add dialogs to your application for user notifications, validation or completely custom use-case</h2>
            <h2 className={themes.heading2}>Simple Modal</h2>
            <p className={themes.paragraph}>Simple Modal pops up when clicked. One can pass the callback function to be called when a particular event like button-click happens. Pass that inside <InlineCode>onClick</InlineCode> prop in the 
            <InlineCode>Modal</InlineCode> component. Also it takes <InlineCode>size</InlineCode> as a prop defining size of the Modal.
            To add <InlineCode>title</InlineCode> and <InlineCode>body</InlineCode> sections in your Modal, <InlineCode>Modal.Title</InlineCode>, <InlineCode>Modal.Body</InlineCode> and <InlineCode>Modal.Footer</InlineCode> can be useful.
            </p>
            <div className={styles.modalGroup}>
            <Button onClick={() => showMedium()}>Launch Modal</Button>
            <Modal size="medium" show={medium} onHide={hideMedium}>
                <Modal.Title>
                    Modal Title
                </Modal.Title>
                <Modal.Body>
                Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="dark" style={{margin:"0 1rem"}} onClick={() => hideMedium()}>Close</Button>
                    <Button onClick={() => hideMedium()}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
            </div>
            <CodeSection>
                {mediumModal}
            </CodeSection>

            <h2 className={themes.heading2}>Small Modal</h2>   
            <p className={themes.paragraph}> 
                Trigger small variant of Modal by passing the value <InlineCode>small</InlineCode> to the <InlineCode>size</InlineCode> prop. 
            </p>

            <div className={styles.modalGroup}>
            <Button onClick={() => showSmall()}>Launch Small Modal</Button>
            <Modal size="small" show={small} onHide={hideSmall}>
                <Modal.Title>
                    Modal Title
                </Modal.Title>
                <Modal.Body>
                Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="dark" style={{margin:"0 1rem"}} onClick={() => hideSmall()}>Close</Button>
                    <Button onClick={() => hideSmall()}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
            </div>
            <CodeSection>
                {smallModal}
            </CodeSection>

            <h2 className={themes.heading2}>Large Modal</h2>   
            <p className={themes.paragraph}> 
                Trigger large variant of Modal by passing the value <InlineCode>large</InlineCode> to the <InlineCode>size</InlineCode> prop. 
            </p>
            <div className={styles.modalGroup}>
            <Button onClick={() => showLarge()}>Launch Large Modal</Button>
            <Modal size="large" show={large} onHide={hideLarge}>
                <Modal.Title>
                    Modal Title
                </Modal.Title>
                <Modal.Body>
                Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="dark" style={{margin:"0 1rem"}} onClick={() => hideLarge()}>Close</Button>
                    <Button onClick={() => hideLarge()}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
            </div>
            <CodeSection>
                {largeModal}
            </CodeSection>
            <ContentNavigation prev={{name:"List", link:"/docs/list"}} next={{name:"Spinner", link:"/docs/spinner"}} />

        </div>
    )
}

export default ModalPage
