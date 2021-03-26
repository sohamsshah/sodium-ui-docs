import React from 'react'
import themes from "./../../Themes/Themes.module.css"
import styles from "./AvatarPage.module.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {Avatar} from "sodium-ui"

const imageAvatars = 
`<Avatar variant="image" size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" /> 
<Avatar variant="image"  size= "medium" src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"  /> 
<Avatar variant="image"  size= "medium" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" />`;

const textAvatars = 
`<Avatar variant="text"  size= "medium">Soham Shah</Avatar> 
<Avatar variant="text"  size= "medium">Tanay Pratap</Avatar> 
<Avatar variant="text"  size= "medium">Alia Bhatt</Avatar>`;

const badgeAvatars = 
`<Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"green"}}/> 
<Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"red"}} /> 
<Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"purple"}} />`

const sizeAvatars = 
`<Avatar variant="image"  size= "small" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/> 
<Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" /> 
<Avatar variant="image"  size= "large" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />`
function AvatarPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Avatar</h1>
            <h2 className={themes.lead}>The Avatar component is used to represent a user, display profle picture or initials as avatar. Widely used in applications that involve user login/signup auth.</h2>
            <h1 className={themes.heading2}>Image Avatars</h1>
            <p className={themes.paragraph}>Image Avatar component can be rendered using <code className={themes.code}>image</code> value for the <code className={themes.code}>variant</code> prop. 
            The link of the image can be provided in the <code className={themes.code}>src</code> prop for the Avatar. </p>
            <div className={styles.avatarGroup}>
            <Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" /> 
            <Avatar variant="image"  size= "medium" src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"  /> 
            <Avatar variant="image"  size= "medium" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" />  
            </div>
            <SyntaxHighlighter language="jsx">
              {imageAvatars}  
            </SyntaxHighlighter>

            <h1 className={themes.heading2}>Avatars with Name Initials</h1>
            <p className={themes.paragraph}> 
                Avatars with Name initials are used when the user hasn't uploaded the profile picture or as a default representation of the User. 
                Add <code className={themes.code}>text</code> as a <code className={themes.code}>variant</code> to implement this. Interesting thing about this component is that you don't need to pass the initials. Pass the full name and Sodium will parse the initials for you!
            </p>

            <div className={styles.avatarGroup}>
            <Avatar variant="text"  size= "medium">Soham Shah</Avatar> 
            <Avatar variant="text"  size= "medium">Tanay Pratap</Avatar> 
            <Avatar variant="text"  size= "medium">Alia Bhatt</Avatar> 
            </div>
            <SyntaxHighlighter language="jsx">
              {textAvatars}  
            </SyntaxHighlighter>
            
            <h1 className={themes.heading2}>Avatars with Badge</h1>
            <p className={themes.paragraph}> 
               Badge on Avatar is generally used to show the online/offline state of the user. Though, for other states in your application; flexibility in badge color is provided.
            It accepts a <code className={themes.code}>badge</code> prop in which an object is to be passed. That object is comprised of two properties; <code className={themes.code}>animation</code> and <code className={themes.code}>badgeColor</code>. 
            Animation feature is under development and this it is set to <code className={themes.code}>false</code> by default right now. You can specify custom color using <code className={themes.code}>badgeColor</code> property.
            </p>

            <div className={styles.avatarGroup}>
            <Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"green"}}/> 
            <Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"red"}} /> 
            <Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"purple"}} />  
            </div>

            <SyntaxHighlighter language="jsx">
              {badgeAvatars}  
            </SyntaxHighlighter>

            <h1 className={themes.heading2}>Avatar Sizes</h1>
            <p className={themes.paragraph}> Avatar Component is available in 3 different sizes - small, medium and large. It can be specified using 
            <code className={themes.code}>size</code> prop.
            </p>
            <div className={styles.avatarGroup}>
            <Avatar variant="image"  size= "small" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/> 
            <Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" /> 
            <Avatar variant="image"  size= "large" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />  
            </div>
            <SyntaxHighlighter language="jsx">
              {sizeAvatars}  
            </SyntaxHighlighter>
            <div className={themes.contentNavigation}>
                <div className={themes.contentNavigationPrev}>
                <p>Prev</p>
                <button><a href="/docs/alert">Alert</a></button>
                </div>
                <div className={themes.contentNavigationNext}>
                <p>Next</p>
                <button><a href="/docs/box">Box</a></button>
                </div>
            </div>
        </div>
    )
}

export default AvatarPage
