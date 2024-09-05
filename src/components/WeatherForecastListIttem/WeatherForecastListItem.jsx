import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherData from '../WeatherData/WeatherData';

const WeatherForecastListItem = ({ weatherForecast }) => {
  return (
    <li className="forecast-item">
      <WeatherIcon iconUrl={weatherForecast.img} altText={weatherForecast.imgAlt} />
      <WeatherData 
        day={weatherForecast.day} 
        conditions={weatherForecast.conditions} 
        time={weatherForecast.time} 
      />
    </li>
  );
};

export default WeatherForecastListItem;