import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Context } from "../layout/layout"

import './header.scss'

const Header = ({ siteTitle }) => (
  <Context.Consumer>
    {(context) => {
      return (
        <header>
          <div>
            <h1>
              {siteTitle}
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
