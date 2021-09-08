import React from "react"


const Social = ({ className, href }) => {
    return (
        <a href={href}><i className={className}></i></a>
    )
}

export default Social;