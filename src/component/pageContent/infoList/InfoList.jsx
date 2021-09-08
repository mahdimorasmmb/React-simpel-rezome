import React from "react"
import { InfoItem, InfoLink } from "./InfoItem";


const InfoList = () => {
    const infolist = [
        {
            title: "Age",
            value: 29
        },
        {
            title: "Residence",
            value: "USA"
        },
        {
            title: "Adress",
            value: "Los Angeles"
        },
        {
            title: "Email",
            value: "email@example.com",
            url: "mailto:email@example.com"
        },
        {
            title: "PageHeader",
            value: "Los Angeles"
        },
        {
            title: "PageHeader",
            value: "Los Angeles"
        },
    ]
    return (
        <div className="col-sm-6 col-md-6 col-lg-6">
            <ul className="info-list">
                {
                    infolist.map(({ title, value, url }) => (
                        <li>
                            <InfoItem className={'title'}>{title}</InfoItem>
                            <InfoItem className={"value"}>
                                    {
                                        url ? <InfoLink url={url}>{value}</InfoLink> : value
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