"use client";

import { useState} from "react";

export default function WeatherPage()
{
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const getWeather = async () => {setLoading(true);
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
    const data= await response.json();
      setTemperature(data.hourly.temperature_2m[0]);
    setLoading(false);
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
        className="bg-blue-500 text-white px-4 py-2 rounded w-full">
    
        Get Weather
      </button>

      <div className="mt-4">
        {loading && <p>Loading...</p>}

        {temperature !== null && (
          <p className="text-lg">
            Current Temperature: <b>{temperature}°C</b>
          </p>
        )}
      </div>
    </div>
  );
}

