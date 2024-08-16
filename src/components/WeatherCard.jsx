import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({title,value}) => {
  return (
    <div className="weather-card">
        <h3 style={{fontSize:"20px"}}>{title}</h3>
        <p style={{fontSize:"16px"}}>{value}</p>
    </div>
  )
}

export default WeatherCard;