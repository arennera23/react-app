import React, { useState } from "react";
import "./WeatherApp.css";
import WeatherSearchResult from "./WeatherSearchResult";
import axios from "axios";

export default function WeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data.weather[0].icon);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      weatherIcon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
    });
  }

  function search() {
    let apiKey = "80f710d0fa6ebf8b91a4584a907a8eb6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weatherApp">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb3">
            <input
              className="form-control"
              type="search"
              placeholder="Type a city..."
              autoFocus="on"
              autoComplete="off"
              onChange={handleSearchCity}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </form>
        <WeatherSearchResult result={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
