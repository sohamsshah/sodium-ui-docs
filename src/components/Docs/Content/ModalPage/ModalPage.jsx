import React from 'react'
import themes from "./../../Themes/Themes.module.css"
import styles from"./ModalPage.module.css"
import {Modal, Button} from "sodium-ui"
import {useState} from "react"


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
            <h2 className={themes.lead}>Lead Text here</h2>
            <h2 className={themes.heading2}>Simple Modal</h2>
            <div className={styles.modalGroup}>
            <Button onClick={() => showSmall()}>Launch Demo Modal</Button>
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

            <div className={styles.modalGroup}>
            <Button onClick={() => showMedium()}>Launch Demo Modal</Button>
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

            <div className={styles.modalGroup}>
            <Button onClick={() => showLarge()}>Launch Demo Modal</Button>
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
        </div>
    )
}

export default ModalPage
