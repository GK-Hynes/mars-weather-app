import React, { useState, useEffect } from "react"
import axios from "axios"
import { format } from "date-fns"
import LatestSol from "./latestSol"
import WeatherCard from "./weatherCard"
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
          windspeed: Math.round(data.HWS.av * 3.6),
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
      <LatestSol
        sol={latestSol.sol}
        date={latestSol.date}
        maxTemp={latestSol.maxTemp}
        minTemp={latestSol.minTemp}
        windspeed={latestSol.windspeed}
        windDirection={latestSol.windDirection}
      />
      <div className="recentSols">
        {recentSols.length > 0 &&
          recentSols.map(sol => {
            return (
              <WeatherCard
                sol={sol.sol}
                date={sol.date}
                maxTemp={sol.maxTemp}
                minTemp={sol.minTemp}
                windspeed={sol.windspeed}
                windDirection={sol.windDirection}
              />
            )
          })}
      </div>
    </div>
  )
}
