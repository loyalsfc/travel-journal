import React from 'react'
import Japan from '../images/Japan.jfif'
import location from '../images/svg/location-dot.svg'


export default function Page(props){
    console.log(props)
    return(
            <main>
            <img src={props.imageUrl} className='main--image' />
            <div className='main--content'>
                <div className='location'>
                    <img src={location} className="location--icon" />
                    <p className='main--country'>{props.location}</p>
                    <a href={props.googleMapsUrl} className='map--link'>View on google Maps</a>
                </div>
                <h2 className='main--title'>{props.title}</h2>
                <p className='main--date'>{props.startDate} - {props.endDate}</p>
                <p className='main--description'>{props.description}</p>
            </div>
        </main>
    //     title: string;
    // location: string;
    // googleMapsUrl: string;
    // startDate: string;
    // endDate: string;
    // description: string;
    // imageUrl: string;
    )
}