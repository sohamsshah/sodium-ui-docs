import React from 'react'
import themes from "./../Themes/Themes.module.css"

function ContentNavigation({prev, next, ...rest}) {
    return (
        <div className={themes.contentNavigation} {...rest}>
                <div className={themes.contentNavigationPrev}>
                <p>Prev</p>
                <button><a href={`${prev.link}`}>{prev.name}</a></button>
                </div>
                <div className={themes.contentNavigationNext}>
                <p>Next</p>
                <button><a href={`${next.link}`}>{next.name}</a></button>
                </div>
        </div>
    )
}

export default ContentNavigation
