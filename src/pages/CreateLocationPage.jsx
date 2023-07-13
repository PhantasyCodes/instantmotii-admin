import React, { useEffect } from 'react'
import './CreateLocationPage.css'
import Logo from '../components/Logo'
import { useLocation } from 'react-router-dom'

const CreateLocationPage = () => {
    const location = useLocation();
    console.log(location);
  return (
    <div className='location-container'>
        <div className="logo">
            <Logo />
            <h1 className="title">InstantMotii</h1>
        </div>
        <div className="location-box">
            <div className="location-text">
                <h1>Add new vehicle</h1>
                <h2>Location Name</h2>
                <input type="text" />
                <h2>Location Coordinates</h2>
                <input type="text" value={`(${location.state.lat.toFixed(3)}, ${location.state.lat.toFixed(3)})`} disabled />
            </div>
        </div>

    </div>
  )
}

export default CreateLocationPage