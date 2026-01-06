"use client";

import { useState } from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) return;

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
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Weather Page</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <button
        onClick={getWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Get Weather
      </button>

      <div className="mt-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {temperature !== null && !loading && (
          <p className="text-lg">
            Current Temperature: <b>{temperature}°C</b>
          </p>
        )}
      </div>
    </div>
  );
}
