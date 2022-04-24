import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function WeatherApp() {
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState();

  function displayResult(response) {
    setTemperature(response.data.main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q${city}&appid=80f710d0fa6ebf8b91a4584a907a8eb6&units=metric`;
    axios.get(apiUrl).then(displayResult);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather container">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb3">
          <input
            className="form-control"
            type="search"
            placeholder="Type a city..."
            autoFocus="on"
            autoComplete="off"
            onChange={updateCity}
          />
          <button className="btn btn-secondary" type="submit">
            Search
          </button>
        </div>
      </form>
      <div className="row">
        <div className="col search-result">
          <ul>
            <li>{city}</li>
            <li>Last updated:</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clear-fix">
            <img src="#" alt="weather icon" className="float-left" />
            <div>Weather Description</div>
            <div className="float-left">{temperature}°C</div>
          </div>
        </div>

        <div className="col-6 additional-result">
          <ul>
            <li>Humidity: 98%</li>
            <li>Wind: 1 km/hr</li>
            <li>23 °C | 21 °C</li>
          </ul>
        </div>
      </div>
      <div className="daily-forecast">Daily Forecast</div>
    </div>
  );
}
