import React from "react"
import ItemsBlock from "./ItemsBlock";



const TitleBlock = ({name}) => {
    const detail = [
        {
            text:"Web Designer"
        },
        {
            text:"Frontend-developer"
        }
    ]
    return (
        <div className="title-block">
            <h1>{name}</h1>
            <ItemsBlock info={detail} />
        </div>
    )
}

export default TitleBlock;