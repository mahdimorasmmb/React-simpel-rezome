import React from "react"
import Subtitle from "./Subtitle"


const ItemsBlock = ({info}) => {
    return (
        <div className="owl-carousel text-rotation">
           {
               info.map((item)=>(
                   <Subtitle>{item.text}</Subtitle>
               ))
           }
        </div>
    )
}


export default ItemsBlock