import React from "react";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="DailyForecast">Daily Forecast</div>
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Sunday</div>
          <div className="Forecast-icon">{props.icon.weatherIcon}</div>
          <div className="Forecast-temperature">Temperature</div>
        </div>
      </div>
    </div>
  );
}
