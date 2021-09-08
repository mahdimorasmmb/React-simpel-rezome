import React from "react"


export const InfoItem = ({children,className})=>{
    return (
        <span className={className}>{children}</span>
    )
}

export const InfoLink = ({url,children,color}) => {
    return (
        <a style={{color:color}} href={url}>{children}</a>
    )
}


