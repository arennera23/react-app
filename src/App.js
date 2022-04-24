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
      <p>
        Open-sourced code by Aren Langeg on <a href="">GitHub.</a>
        <a href="https://github.com/arennera23/react-app.git">GitHub.</a>
      </p>
    </div>
  );
}

export default App;
