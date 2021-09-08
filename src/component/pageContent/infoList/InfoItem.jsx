import React from "react"


export const InfoItem = ({children,className})=>{
    return (
        <span className={className}>{children}</span>
    )
}

export const InfoLink = ({url,children}) => {
    return (
        <a href={url}>{children}</a>
    )
}


