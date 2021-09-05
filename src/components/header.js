import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Button } from "@geist-ui/react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link className="menu" to="/">Back home</Link>
      <Link className="menu" to="/me">About Me</Link>
      <Link className="menu" to="/blogs">Blogs</Link>
      <Link className="menu" to="/miniblogs">Mini-Blogs</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
