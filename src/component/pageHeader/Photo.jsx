import React from "react"

const Photo = ({ imageUrl }) => {
    return (
        <div className="photo">
            <img src={imageUrl} />
        </div>
    )
}


export default Photo;
