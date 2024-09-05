// src/components/WeatherForecast/WeatherForecast.jsx
import React from 'react';
import styles from './WeatherForecast.module.css'; 
import WeatherData from '../WeatherData/WeatherData';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherForecast = ({ weatherForecast }) => {
  if (!weatherForecast) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={styles.weather}>
      <h2>{weatherForecast.day}</h2>
      <WeatherIcon iconUrl={weatherForecast.img} altText={weatherForecast.imgAlt} />
      <WeatherData 
        conditions={weatherForecast.conditions} 
        time={weatherForecast.time} 
      />
    </div>
  );
};

export default WeatherForecast;
