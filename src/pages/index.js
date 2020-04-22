import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Latest Weather at Elysium Planitia</h1>
    <p>
      InSight is taking daily weather measurements (temperature, wind, pressure)
      on the surface of Mars at Elysium Planitia, a flat, smooth plain near
      Mars’ equator.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
