import React from 'react'

const loca = 'https://hmjatt.github.io/Travel-Journal-ReactJS/static/media/pin.1f226562855444fb8b7486883ccc7a0c.svg'

export default function Body(props) {
    
    return (
        <div className="body">
            <div className="body-image-div">
                <img src={props.imageUrl}/>
            </div>
            <div className="body-text-div">
                <div className="body-location">
                    <img src={loca} className="body-pin" alt="loca image"/>
                    <span className="location">{props.location}</span>
                    <p className="grey"><a href={props.googleMapLink} target="_blank" rel="hello">View on Google Maps</a>
                    </p>
                </div>
                <h2 className="body-title">{props.title}</h2>
                <div className="body-date">
                    <span className='start-date dash end-date'>{props.startDate} - {props.endDate}</span>
                </div>
                <p className="body-description">
                    <span>{props.description}</span>
                </p>
            </div>
        </div>
    )
}


