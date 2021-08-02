export const smallModal = 
`
import React from 'react'
import {Modal, Button} from "sodium-ui"
import {useState} from "react"

const [small, setSmall] = useState(false);

const showSmall = () => {
    setSmall(true)
}
const hideSmall = () => {
    setSmall(false)
}

// some code ...

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
</Modal>`

export const mediumModal = 
`
import React from 'react'
import {Modal, Button} from "sodium-ui"
import {useState} from "react"

const [medium, setMedium] = useState(false);
const showMedium = () => {
    setMedium(true)
}
const hideMedium = () => {
    setMedium(false)
}

// some code ...

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
</Modal>`

export const largeModal = 
`
import React from 'react'
import {Modal, Button} from "sodium-ui"
import {useState} from "react"

const [large, setLarge] = useState(false);
const showLarge = () => {
    setLarge(true)
}
const hideLarge = () => {
    setLarge(false)
}

// some code ...

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
</Modal>`

