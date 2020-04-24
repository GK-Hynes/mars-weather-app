import React from "react"
import Weather from "../components/weather"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{ fontSize: "2.2rem" }}>Latest Weather at Elysium Planitia</h2>
    <p>
      InSight is taking daily weather measurements (temperature, wind, pressure)
      on the surface of Mars at Elysium Planitia, a flat, smooth plain near
      Mars’ equator.
    </p>
    <Weather />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
