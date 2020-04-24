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
          maxTemp: data.AT.mx,
          minTemp: data.AT.mn,
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
        <h3>Sol {latestSol.sol}</h3>
        <div>High: {latestSol.maxTemp}° C</div>
        <div>Low: {latestSol.minTemp}° C</div>
        <div>Windspeed: {Math.round(latestSol.windSpeed * 3.6)} kmph</div>
        <div>Wind direction: {latestSol.windDirection}</div>
        <div>{latestSol.date}</div>
      </div>
      <div className="recentSols">
        {recentSols.length > 0 &&
          recentSols.map(sol => {
            return (
              <div className="WeatherCard">
                <h4>Sol {sol.sol}</h4>
                <div>High: {sol.maxTemp}° C</div>
                <div>Low: {sol.minTemp}° C</div>
                <div>Windspeed: {Math.round(sol.windSpeed * 3.6)} kmph</div>
                <div>Wind direction: {sol.windDirection}</div>
                <div>{sol.date}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
