/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import './index.css'; // add some style if you want!
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className='menubar'>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {/* <main>{children}</main> */}
      </div>
    </div>
  )
}

Layout.propTypes = {
  // children: PropTypes.node.isRequired,
  switchThemes: PropTypes.func
}

export default Layout
