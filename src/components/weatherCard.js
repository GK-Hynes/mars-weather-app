import React from "react"
import "./weatherCard.css"

export default function WeatherCard({
  sol,
  date,
  maxTemp,
  minTemp,
  windspeed,
  windDirection,
}) {
  return (
    <div className="WeatherCard">
      <h4>Sol {sol}</h4>
      <div>{date}</div>
      <div className="line"></div>
      <div>High: {maxTemp}° C</div>
      <div>Low: {minTemp}° C</div>
      <div>Windspeed: {windspeed} kmph</div>
      <div>Wind direction: {windDirection}</div>
    </div>
  )
}
