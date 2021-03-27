import React from 'react'
import styles from "./AvatarPage.module.css"
import InlineCode from "./../../Utils/InlineCode/InlineCode"
import CodeSection from "./../../Utils/CodeSection/CodeSection"
import {Avatar} from "sodium-ui"
import themes from "./../../Utils/Themes/Themes.module.css"

const imageAvatars = 
`<Avatar variant="image" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" /> 
<Avatar variant="image" src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"  /> 
<Avatar variant="image" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" />`;

const textAvatars = 
`<Avatar variant="text">Soham Shah</Avatar> 
<Avatar variant="text">Tanay Pratap</Avatar> 
<Avatar variant="text">Alia Bhatt</Avatar>`;

const badgeAvatars = 
`<Avatar variant="image" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"green"}}/> 
<Avatar variant="image" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"red"}} /> 
<Avatar variant="image" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"purple"}} />`

const sizeAvatars = 
`<Avatar variant="image" size= "small" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/> 
<Avatar variant="image" size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" /> 
<Avatar variant="image" size= "large" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />`
function AvatarPage() {
    return (
        <div>
            <h1 className={themes.heading1}>Avatar</h1>
            <h2 className={themes.lead}>The Avatar component is used to represent a user, display profle picture or initials as avatar. Widely used in applications that involve user login/signup auth.</h2>
            <h1 className={themes.heading2}>Image Avatars</h1>
            <p className={themes.paragraph}>Image Avatar component can be rendered using <InlineCode>image</InlineCode> value for the <InlineCode>variant</InlineCode> prop. 
            The link of the image can be provided in the <InlineCode>src</InlineCode> prop for the Avatar. </p>
            <div className={styles.avatarGroup}>
            <Avatar variant="image" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" /> 
            <Avatar variant="image" src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"  /> 
            <Avatar variant="image" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" />  
            </div>
            <CodeSection>
              {imageAvatars}
            </CodeSection>

            <h1 className={themes.heading2}>Avatars with Name Initials</h1>
            <p className={themes.paragraph}> 
                Avatars with Name initials are used when the user hasn't uploaded the profile picture or as a default representation of the User. 
                Add <InlineCode>text</InlineCode> as a <InlineCode>variant</InlineCode> to implement this. Interesting thing about this component is that you don't need to pass the initials. Pass the full name and Sodium will parse the initials for you!
            </p>

            <div className={styles.avatarGroup}>
            <Avatar variant="text"  size= "medium">Soham Shah</Avatar> 
            <Avatar variant="text"  size= "medium">Tanay Pratap</Avatar> 
            <Avatar variant="text"  size= "medium">Alia Bhatt</Avatar> 
            </div>
            <CodeSection>
              {textAvatars}
            </CodeSection>
            
            <h1 className={themes.heading2}>Avatars with Badge</h1>
            <p className={themes.paragraph}> 
               Badge on Avatar is generally used to show the online/offline state of the user. Though, for other states in your application; flexibility in badge color is provided.
            It accepts a <InlineCode>badge</InlineCode> prop in which an object is to be passed. That object is comprised of two properties; <InlineCode>animation</InlineCode> and<InlineCode>badgeColor</InlineCode>. 
            Animation feature is under development and this it is set to <InlineCode>false</InlineCode> by default right now. You can specify custom color using <InlineCode>badgeColor</InlineCode> property.
            </p>

            <div className={styles.avatarGroup}>
            <Avatar variant="image" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"green"}}/> 
            <Avatar variant="image" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"red"}} /> 
            <Avatar variant="image" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" badge={{animation:false,badgeColor:"purple"}} />  
            </div>

            <CodeSection>
              {badgeAvatars}
            </CodeSection>

            <h1 className={themes.heading2}>Avatar Sizes</h1>
            <p className={themes.paragraph}> Avatar Component is available in 3 different sizes - small, medium and large. It can be specified using 
            <InlineCode>size</InlineCode> prop.
            </p>
            <div className={styles.avatarGroup}>
            <Avatar variant="image"  size= "small" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/> 
            <Avatar variant="image"  size= "medium" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" /> 
            <Avatar variant="image"  size= "large" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />  
            </div>
            <CodeSection>
              {sizeAvatars}
            </CodeSection>
            
        </div>
    )
}

export default AvatarPage
