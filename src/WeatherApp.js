import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp() {
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
            <li className="date">Last updated:</li>
            <li className="weather-description">Clear sky</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather icon"
            />
            <span className="temperature">6</span>
            <span className="unit">°C</span>
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
