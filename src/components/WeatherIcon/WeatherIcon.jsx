import React from 'react';
import styles from './WeatherIcon.module.css'

const WeatherIcon = ({ iconUrl, altText }) => {
  return (
    <img src={iconUrl} alt={altText} className={styles.weatherIcon} />
  );
};

export default WeatherIcon;