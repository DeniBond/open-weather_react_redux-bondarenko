import React from 'react';
import {useSelector} from "react-redux";

const Weather = () => {

    const {weather, textInfo} = useSelector(state => state)

    const weatherCheck = () => {
         if (weather.name) {

            const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString()
            const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString()

            return <div>
                <h1>{weather.name}, {weather.sys.country}</h1>
                <div className={'d-flex'}>
                    <img className={'weatherIcon'}
                         src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                    <h2>{weather.weather[0].main}</h2>
                </div>
                <p>Temperature: {weather.main.temp.toFixed(1)}</p>
                <p>Pressure: {weather.main.pressure} hPa</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Sunrise: {sunrise}</p>
                <p>Sunset: {sunset}</p>
            </div>
        } else {
            return <div>
                <h4>{textInfo}</h4>
            </div>
        }
    }

    return (
        <div className={'infoWeather'}>
            {weatherCheck()}
        </div>
    );
};

export default Weather;