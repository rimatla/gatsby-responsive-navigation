import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SubOnePage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the SUB ONE page</h1>
    <p>Welcome to Sub 1</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SubOnePage
