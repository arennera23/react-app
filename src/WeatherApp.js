import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <form>
          <div className="input-group mb3">
            <input
              className="form-control"
              type="search"
              placeholder="Type a city..."
              autoFocus="on"
              autoComplete="off"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </form>
        <div className="row">
          <div className="col search-result mt-3">
            <ul>
              <li className="city-name">Tokyo</li>
              <li className="date">Date</li>
              <li className="weather-description text-capitalize">
                {weatherData.description}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.icon} alt="weather icon" />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6 additional-result">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/hr</li>
              <li>
                {Math.round(weatherData.maxTemperature)} °C |{" "}
                {Math.round(weatherData.minTemperature)} °C
              </li>
            </ul>
          </div>
        </div>
        <div className="daily-forecast">Daily Forecast</div>
      </div>
    );
  } else {
    let apiKey = "80f710d0fa6ebf8b91a4584a907a8eb6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
