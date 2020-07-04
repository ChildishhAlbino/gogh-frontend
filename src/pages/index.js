import React from "react"
import ColourPicker from "../components/colour-picker"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ColourPicker />
  </Layout>
)

export default IndexPage
