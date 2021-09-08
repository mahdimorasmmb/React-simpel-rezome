import React from "react"
import AboutMeTitles from "./AboutMeTitles";

const AboutMe = ({color}) => {
    return (
        <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="about-me">
                <AboutMeTitles color={color}>Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aenean fermentum ullamcorper sem, at placerat
                    dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</AboutMeTitles>
            </div>
        </div>

    )
}

export default AboutMe;

