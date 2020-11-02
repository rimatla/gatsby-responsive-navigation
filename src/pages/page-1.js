import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FirstPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the FIRST page</h1>
    <p>Welcome to page 1</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FirstPage
