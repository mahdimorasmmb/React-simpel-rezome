import React from "react"
import AboutMe from "./aboutMe/AboutMe";
import InfoList from "./infoList/InfoList";


const PageContent = ({color,infolist}) => {
    return (
        <div className="page-content">
            <AboutMe color={color}/>
            <InfoList color={color} infolist={infolist}/>
        </div>
    )
}


export default PageContent;