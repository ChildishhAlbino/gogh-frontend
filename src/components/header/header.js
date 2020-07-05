import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Context } from "../layout/layout"

import './header.scss'

const Header = ({ siteTitle }) => (
  <Context.Consumer>
    {(context) => {
      return (
        <header
          style={{
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
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </h1>
          </div>
        </header>
      )
    }}
  </Context.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
