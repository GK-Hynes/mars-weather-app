import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Weather() {
  const [data, setData] = useState({ weather: [] })
  useEffect(() => {
    const fetchWeather = async () => {
      const result = await axios(
        "https://api.nasa.gov/insight_weather/?api_key=TrOS4UtSVKBOtq0fzZL5PBrjUdtB4oDbgt5DFDdc&feedtype=json&ver=1.0"
      )
      console.log(result)
      setData(result.data)
    }
    fetchWeather()
  }, [])

  return <div></div>
}
