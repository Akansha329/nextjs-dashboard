"use client";

import { useState } from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim())
      {
        setError("Please enter a city name");
       return;
      }

    setLoading(true);
    setError("");
    setTemperature(null);

    try {
      // Geocoding: city → lat & lon
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude } = geoData.results[0];

      // Weather API using coordinates
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setTemperature(weatherData.current_weather.temperature);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 ">
      <div className="bg-white w-[360px] p-6 rounded-xl shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Weather Page</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 w-full rounded mb-3"
      />

      <button
        onClick={getWeather}
        className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded transition">
        
      {loading ? "Fetching Weather...": "Get Weather"}
        
     
      </button>

      <div className="mt-4">
        {error && <p className="text-red-500">{error}</p>}

        {temperature !== null && !loading && (

          <p className="text-lg mt-2">
            Temperature in <b>{city}</b>:{""}
            <span className="font-bold">{temperature}°C</span>
          </p>
        )}
        </div>
        </div>
        </div>
      );}
