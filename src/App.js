
import './App.css';
import Search from './components/search/search';
import { CurrentWether } from './components/current-wether/currentWether';
import { weather_api_url, weather_api_key } from './api'
import { useState } from 'react';
import { Forecast } from './components/forecast/forecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${weather_api_url}/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`)
    const forecastFetch = fetch(`${weather_api_url}/forecast?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`)
    Promise.all([currentWeatherFetch, forecastFetch]).then(async response => {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()
      setCurrentWeather({ city: searchData.label, ...weatherResponse })
      setForecast({ city: searchData.label, ...forecastResponse })
    }).catch(error => console.error(error))

  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWether weather={currentWeather} forecast={forecast} />}
      < Forecast data={{ forecast: forecast, currentWeather: currentWeather }} />
    </div>
  );
}

export default App;
