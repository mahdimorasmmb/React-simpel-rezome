import React from "react"
import Social from "./Social"

const Socials = ({links}) => {
   
    return (
        <div className="social-links">
           {
               links.map((item)=>(
                   <Social href={item.url} className={`fa ${item.style}`}/>
               ))
           }
        </div>
    )
}


export default Socials;