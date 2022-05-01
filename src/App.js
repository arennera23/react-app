import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="Tokyo" />
        <p>
          Open-sourced code by Aren Langeg on{" "}
          <a
            href="https://github.com/arennera23/react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub.
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
