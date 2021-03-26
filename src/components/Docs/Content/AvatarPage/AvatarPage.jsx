import React from 'react'
import themes from "./../../Themes/Themes.module.css"
import styles from "./AvatarPage.module.css"
import {Avatar} from "sodium-ui"

function AvatarPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Avatar</h1>
            <h2 className={themes.lead}>Avatar</h2>
            <h1 className={themes.heading2}>Image Avatars</h1>
            <div className={styles.avatarGroup}>
            <Avatar variant="image"  size= "small" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/> 
            <Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" /> 
            <Avatar variant="image"  size= "large" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />  
            </div>

            <div className={styles.avatarGroup}>
            <Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"green"}}/> 
            <Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"red"}} /> 
            <Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"purple"}} />  
            </div>
        </div>
    )
}

export default AvatarPage
