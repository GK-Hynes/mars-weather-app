import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Weather() {
  const [data, setData] = useState({ sols: [] })
  const [currentWeather, setCurrentWeather] = useState({})
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
          date: new Date(data.First_UTC),
        }
      })

      console.log(sols)
      setData(sols)
      setCurrentWeather(sols[sols.length - 1])
    }
    fetchWeather()
  }, [])

  // console.log(data)

  return (
    <div>
      <div className="currentWeather">
        <div>Sol {currentWeather.sol}</div>
        <div>High: {currentWeather.maxTemp}° C</div>
        <div>Low: {currentWeather.minTemp}° C</div>
      </div>
    </div>
  )
}
