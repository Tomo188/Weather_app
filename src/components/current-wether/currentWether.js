import "./current-wether.css"
export const CurrentWether = (props) => {
    const weather = props.weather
    const img = weather.weather[0].icon
    const city = weather.city
    const description = weather.description
    const temparature = weather.main.temp
    const feelsLIke = weather.main.feels_like
    const humidity = weather.main.humidity
    const pressure = weather.main.pressure
    const wind = weather.wind.speed

    return (
        <div className="weather">
            <div className="top">

                <div>
                    <p className="city">{city}</p>
                    <p className="wether-description">{description}</p>
                </div>

                <img className="wether-icon" alt="wether" src={`icon/${img}.png`} />

            </div>
            <div className="bottom">
                <p className="temparature">{Number(temparature).toFixed(1)} &#8451;</p>
                <div className="details">
                    <div className="parametar-row">
                        <span className="parametar-label">details :</span>
                    </div>
                    <div className="parametar-row">
                        <span className="parametar-label">
                            feels like
                        </span>
                        <span className="parametar-value">  {feelsLIke} &#8451;</span>
                    </div>
                    <div className="parametar-row">
                        <span className="parametar-label">Wind</span>
                        <span className="parametar-value">  {wind}m/s</span>
                    </div>
                    <div className="parametar-row">
                        <span className="parametar-label">Humidity</span>
                        <span className="parametar-value"> {humidity}%</span>
                    </div>
                    <div className="parametar-row">
                        <span className="parametar-label">Pressure</span>
                        <span className="parametar-value">{pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}