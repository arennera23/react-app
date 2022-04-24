import React from "react";
import "./App.css";

export default function WeatherApp() {
  return (
    <div className="Weather">
      <form>
        <div className="input-group mb3">
          <input
            type="search"
            placeholder="City..."
            autoFocus="on"
            autoComplete="off"
            className="form-control"
          />
          <button className="btn btn-secondary" type="submit">
            Search
          </button>
        </div>
      </form>
      <div className="row">
        <div className="col city-date">
          <ul className="search-info">
            <li>City</li>
            <li>Last updated:</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="clear-fix">
          <img src="#" alt="weather icon" className="float-left" />
          <div>Weather Description</div>
          <div className="float-left">Temperature 10°C</div>
        </div>
      </div>
      <div className="col-6">
        <ul className="additional-nfo">
          <li>Humidity: 98%</li>
          <li>Wind: 1 km/hr</li>
          <li>23 °C | 21 °C</li>
        </ul>
      </div>
    </div>
  );
}
