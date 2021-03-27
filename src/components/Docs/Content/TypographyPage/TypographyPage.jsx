import React from 'react'
import styles from"./TypographyPage.module.css"
import {Typography} from "sodium-ui"
import themes from "./../../Utils/Themes/Themes.module.css"

function TypographyPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Typography</h1>
            <h2 className={themes.lead}>Lead Text here</h2>
            <h2 className={themes.heading2}>Styles</h2>
            <div className={styles.typographyGroup}>
                <Typography variant="h1">
                    h1. Heading
                </Typography>
                <Typography variant="h2">
                    h2. Heading
                </Typography>
                <Typography variant="h3">
                    h3. Heading
                </Typography>
                <Typography variant="h4">
                    h4. Heading
                </Typography>
                <Typography variant="h5">
                    h5. Heading
                </Typography>
                <Typography variant="h6">
                    h6. Heading
                </Typography>
                <Typography variant="subtitle1">
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2">
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                </Typography>
                <Typography variant="body1">
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2">
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <Typography variant="button-text">
                    Button Text
                </Typography>
                <Typography variant="caption-text">
                    caption text
                </Typography>
                <Typography variant="outline-text">
                    outline text
                </Typography>
                

            </div>
            
        </div>
    )
}

export default TypographyPage
