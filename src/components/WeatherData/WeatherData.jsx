import React from 'react';
import styles from './WeatherData.module.css'

const WeatherData = ({ conditions, time }) => {
  return (
    <div className={styles.weatherData}>
      <p><span>Conditions: </span>{conditions}</p>
      <p><span>Time: </span>{time}</p>
    </div>
  );
};

export default WeatherData;