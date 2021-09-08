import React from "react"
import AboutMe from "./aboutMe/AboutMe";
import InfoList from "./infoList/InfoList";


const PageContent = () => {
    return (
        <div className="page-content">
            <AboutMe/>
            <InfoList/>
        </div>
    )
}


export default PageContent;