import React from "react"
import Weather from "../components/weather"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ margin: `0 auto`, maxWidth: 960 }}>
      <h2>Latest Weather at Elysium Planitia</h2>
      <p>
        InSight is taking daily weather measurements (temperature, wind,
        pressure) on the surface of Mars at Elysium Planitia, a flat, smooth
        plain near Mars’ equator.
      </p>
    </div>
    <Weather />
  </Layout>
)

export default IndexPage
