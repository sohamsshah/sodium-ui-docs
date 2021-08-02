import React from "react"
import themes from "./../../Utils/Themes/Themes.module.css"
import ContentNavigation from "./../../Utils/ContentNavigation/ContentNavigation";

export default function Features(){
    return(
        <div>
            <h1 className={themes.heading1}>Features 🚀</h1>
            <p className={themes.lead}>Learn about some salient features of Sodium UI.</p>

            <h2 className={themes.heading2}>User Features</h2>
            <ul className={themes.list}>
               <li> ✅ Sodium UI provides flexible React Components that makes your life easy while developing React Apps.</li>
               <li> ✅ Resusable and Atomic Design Patterns are followed by default.</li>
               <li>✅ Custom Styles are enabled and so you can add your own CSS to the components.</li>
               <li>✅ Custom Styles are enabled and so you can add your own CSS to the components.</li>
            </ul>

            <h2 className={themes.heading2}>Tech Stack</h2>
            <ul className={themes.list}>
                <li> ✅ Components developed using React.</li>
                <li> ✅ Bundled using rollup.js</li>
                <li>✅ UI development, documentation and testing done using Storybook.</li>
                <li>✅ Docsite deployed using Netlify</li>
            </ul>

            <h2 className={themes.heading2}>Browse Components</h2>
            <p className={themes.paragraph}>Sodium-UI has all the components deployed on the Component Site that is essentially Storybook-build for developing and building React Components in isolation. If you are a user, or a developer or a tester; <a className={themes.link}href="https://sohamsshah.github.io/sodium-ui/">this</a> site can be helpful for visualizing available components in Sodium-UI.</p>

            <h2 className={themes.heading2}>Contributing to Sodium-UI</h2>
            <p className={themes.paragraph}>Sodium UI is truly Open Source. Any sort of contribution to this project are highly appreciated. Read the <a className={themes.link} href="https://github.com/sohamsshah/sodium-ui/blob/main/CONTRIBUTING.md">Contributing Guideline</a> to learn more on how to setup development environment, propose bug fixes or improvements and how to build and test your changes to Sodium UI.</p>

            <ContentNavigation prev={{name:"Getting Started", link:"/docs/"}} next={{name:"Alert", link:"/docs/alert"}} />

            
            
        </div>
    )
}