import React from "react"
import "./latestSol.css"

export default function LatestSol({
  sol,
  date,
  maxTemp,
  minTemp,
  windspeed,
  windDirection,
}) {
  return (
    <div className="latestSol">
      <div className="sol-detail-wrapper">
        <h3 className="sol-number">Sol {sol}</h3>
        <div className="sol-date">{date}</div>
      </div>
      <div className="sol-detail-wrapper">
        <div className="sol-max-temp">High: {maxTemp}° C</div>
        <div className="sol-min-temp">Low: {minTemp}° C</div>
      </div>
      <div className="sol-detail-wrapper">
        <div className="sol-windspeed">Windspeed: {windspeed} kmph</div>
        <div className="sol-wind-direction">
          Wind direction: {windDirection}
        </div>
      </div>
    </div>
  )
}
