import React from "react"
import { InfoItem, InfoLink } from "./InfoItem";


const InfoList = ()=>{
    return (
        <div className="col-sm-6 col-md-6 col-lg-6">
            <ul className="info-list">
                <li>
                    <InfoItem className="title">Age</InfoItem><InfoItem className="value">29</InfoItem>
                </li>
                <li>
                    <InfoItem className="title">Residence</InfoItem>
                    <InfoItem className="value">USA</InfoItem>
                </li>
                <li>
                    <InfoItem className="title">Adress</InfoItem>
                    <InfoItem className="value">Los Angeles</InfoItem>
                </li>
                <li>
                    <InfoItem className="title">Email</InfoItem>
                    <InfoItem className="value"><InfoLink href="mailto:email@example.com">email@example.com</InfoLink></InfoItem>
                </li>
                <li>
                <InfoItem className="title">PageHeader</InfoItem>
                    <InfoItem className="value">Los Angeles</InfoItem>
                </li>
                <li>
                <InfoItem className="title">PageHeader</InfoItem>
                    <InfoItem className="value">Los Angeles</InfoItem>
                </li>
            </ul>
        </div>
    )
}


export default InfoList;