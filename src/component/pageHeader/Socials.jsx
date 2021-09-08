import React from "react"
import Social from "./Social"

const Socials = () => {
    const links = [
        {
            url:"#",
            style:"fa-twitter"
        },
        {
            url:"#",
            style:"fa-facebook"
        },
        {
            url:"#",
            style:"fa-instagram"
        }
    ]
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