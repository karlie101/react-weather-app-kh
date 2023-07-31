import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let forecastInfo = {
    city: "Hattiesburg",
    temperature: 76,
    date: "Friday 12:12",
    description: "Clear with periodic clouds",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    humidity: 88,
    wind: 6
  };

  return (
    <div className="Forecast">
      <form className="mb-3">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" class="btn btn-warning w-150" />
          </div>
        </div>
      </form>
      <div className="elevate">
        <h1>{forecastInfo.city}</h1>
        <ul>
          <li>Last updated: {forecastInfo.date}</li>
          <li>{forecastInfo.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={forecastInfo.imgUrl}
              alt={forecastInfo.description}
              id="icon"
            />
            <div className="units">
              <strong>{forecastInfo.temperature}</strong>
              <span className="breeze">
                <a href="/">°F</a> | <a href="/">°C</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {forecastInfo.humidity}%</li>
            <li>Wind: {forecastInfo.wind} mph</li>
          </ul>
        </div>
      </div>
      <footer>
        I am Karlie Howard, and I am 
      <a href="https://github.com/karlie101/react-weather-app-kh"> open-sourced
      </a> on github.
      </footer>
    </div>
    
  );
}
