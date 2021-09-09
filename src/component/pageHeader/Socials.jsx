import React from "react"
import Social from "./Social"

const Socials = ({links}) => {
   
    return (
        <div className="social-links">
           {
               links.map((item,index)=>(
                   <Social href={item.url} key={index} className={`fa ${item.style}`}/>
               ))
           }
        </div>
    )
}


export default Socials;