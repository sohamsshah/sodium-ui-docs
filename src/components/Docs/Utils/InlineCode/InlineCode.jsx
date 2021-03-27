import React from 'react'
import themes from "./../Themes/Themes.module.css"

function InlineCode({children, ...rest}) {
    return (
        <code className={themes.code} {...rest}>{children}</code>
    )
}

export default InlineCode
