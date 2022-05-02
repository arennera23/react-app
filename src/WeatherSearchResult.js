import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherSearchResult(props) {
  return (
    <div className="WeatherSearchResult">
      <div className="row">
        <div className="col search-result mt-3">
          <ul>
            <li className="city-name">{props.result.city}</li>
            <li className="date">
              <FormattedDate date={props.result.date} />
            </li>
            <li className="weather-description text-capitalize">
              {props.result.description}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <img src={props.result.weatherIcon} alt="weather icon" />
              <div className="float-left">
                <WeatherTemperature celsius={props.result.temperature} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 additional-result">
          <ul>
            <li>Humidity: {props.result.humidity}%</li>
            <li>Wind: {Math.round(props.result.wind)} km/hr</li>
            <li>
              {Math.round(props.result.maxTemperature)} °C |{" "}
              {Math.round(props.result.minTemperature)} °C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
