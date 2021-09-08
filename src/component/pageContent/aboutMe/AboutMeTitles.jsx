import React, { Children } from "react";


const AboutMeTitles = ({children}) => {
    return (
        <div className="block-title">
            <h3>About<span>Me</span></h3>
            <p>
                {children}
            </p>
        </div>
    )
}

export default AboutMeTitles;