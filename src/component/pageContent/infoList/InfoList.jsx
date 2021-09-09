import React from "react"
import { InfoItem, InfoLink } from "./InfoItem";


const InfoList = ({color,infolist}) => {
    
    return (
        <div className="col-sm-6 col-md-6 col-lg-6">
            <ul className="info-list">
                {
                    infolist.map(({ title, value, url },index) => (
                        <li key={index}>
                            <InfoItem className={'title'}>{title}</InfoItem>
                            <InfoItem className={"value"}>
                                    {
                                        url ? <InfoLink color={color} url={url}>{value}</InfoLink> : value
                                    }
                            </InfoItem>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default InfoList;