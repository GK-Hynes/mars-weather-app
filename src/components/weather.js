import React, { useState, useEffect } from "react"
import axios from "axios"
import { format } from "date-fns"

import "./weather.css"

export default function Weather() {
  const [recentSols, setRecentSols] = useState({ sols: [] })
  const [latestSol, setLatestSol] = useState({})
  useEffect(() => {
    const fetchWeather = async () => {
      const result = await axios(
        "https://api.nasa.gov/insight_weather/?api_key=TrOS4UtSVKBOtq0fzZL5PBrjUdtB4oDbgt5DFDdc&feedtype=json&ver=1.0"
      )

      const { sol_keys, validity_checks, ...solData } = result.data

      const sols = Object.entries(solData).map(([sol, data]) => {
        return {
          sol: sol,
          maxTemp: data.AT.mx.toFixed(2),
          minTemp: data.AT.mn.toFixed(2),
          windSpeed: data.HWS.av,
          windDirection: data.WD.most_common.compass_point,
          date: format(new Date(data.First_UTC), "d MMMM"),
        }
      })
      setRecentSols(sols)
      setLatestSol(sols[sols.length - 1])
    }
    fetchWeather()
  }, [])

  return (
    <div className="Weather">
      <div className="latestSol">
        <div className="sol-detail-wrapper">
          <h3 className="sol-number">Sol {latestSol.sol}</h3>
          <div className="sol-date">{latestSol.date}</div>
        </div>
        <div className="sol-detail-wrapper">
          <div className="sol-max-temp">High: {latestSol.maxTemp}° C</div>
          <div className="sol-min-temp">Low: {latestSol.minTemp}° C</div>
        </div>
        <div className="sol-detail-wrapper">
          <div className="sol-windspeed">
            Windspeed: {Math.round(latestSol.windSpeed * 3.6)} kmph
          </div>
          <div className="sol-wind-direction">
            Wind direction: {latestSol.windDirection}
          </div>
        </div>
      </div>
      <div className="recentSols">
        {recentSols.length > 0 &&
          recentSols.map(sol => {
            return (
              <div className="WeatherCard">
                <h4>Sol {sol.sol}</h4>
                <div>{sol.date}</div>
                <div className="line"></div>
                <div>High: {sol.maxTemp}° C</div>
                <div>Low: {sol.minTemp}° C</div>
                <div>Windspeed: {Math.round(sol.windSpeed * 3.6)} kmph</div>
                <div>Wind direction: {sol.windDirection}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
