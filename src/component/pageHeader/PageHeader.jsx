import React from "react"
import Photo from "./Photo";
import TitleBlock from "./TitleBlock";
import Socials from './Socials'


const PageHeader = ({ imageUrl,name,bgColor,links }) => {
    return (
        <div className="page-header" style={{backgroundColor:bgColor}}>
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <Photo imageUrl={imageUrl} />
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                    <TitleBlock name={name} />
                    <Socials links={links} />
                </div>
            </div>
        </div>
    )
}

export default PageHeader; 