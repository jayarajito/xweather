import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import "./WeatherApp.css";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    setLoading(true);
    setWeatherData(null);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=596499ee75de49adbe6101218243103&q=${city}`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setTimeout(() => {
        setWeatherData(data);
        setLoading(false);
      }, 1000);
    } catch (err) {
      alert("Failed to fetch weather data");
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="subContainer">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeatherData}>Search</button>
      </div>
      {loading && <p id="loadingMessage">Loading data...</p>}
      {weatherData && (
        <div className="weather-cards">
          <WeatherCard
            title="Temperature"
            value={`${weatherData.current.temp_c}°C`}
          />
          <WeatherCard
            title="Humidity"
            value={`${weatherData.current.humidity}%`}
          />
          <WeatherCard
            title="Condition"
            value={weatherData.current.condition.text}
          />
          <WeatherCard
            title="Wind Speed"
            value={`${weatherData.current.wind_kph} kph`}
          />
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
