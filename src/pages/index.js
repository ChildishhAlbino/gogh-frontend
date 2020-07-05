import React from "react"
import ColourPicker from "../components/colour-picker/colour-picker"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = (gradient) => (
  <Layout>
    <SEO title="Home" />
    <ColourPicker />
  </Layout>
)

export default IndexPage
