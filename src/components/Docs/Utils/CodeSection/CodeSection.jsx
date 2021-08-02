import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react'

function CodeSection({children, ...rest}) {
    return (
        <SyntaxHighlighter language="jsx" {...rest}>
            {children}
        </SyntaxHighlighter>
    )
}

export default CodeSection
