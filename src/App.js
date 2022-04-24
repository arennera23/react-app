import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <WeatherApp />
          <div className="daily-forecast">Daily Forecast</div>
        </div>
      </div>
    </div>
  );
}

export default App;
