import React, { Children } from "react";


const AboutMeTitles = ({children, color}) => {
    return (
        <div className="block-title">
            <h3>About<span style={{color:color}}>Me</span></h3>
            <p>
                {children}
            </p>
        </div>
    )
}

export default AboutMeTitles;