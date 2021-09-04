import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"

import '../components/layout.css'; // add some style if you want!

export default function Index({ data }) {
  return (
    <div className="main">
      <Layout />
      <h1>Main Page</h1>
    </div>
  )
}