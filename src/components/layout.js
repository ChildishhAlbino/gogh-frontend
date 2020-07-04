/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { gogh } from "gogh-gradient"
import Header from "./header"
import "./layout.css"


const Context = React.createContext();

class ContextProvider extends React.Component {
  state = {
    startColour: "#ff00ff",
    endColour: "#00ffff",
    handleStartPickerChange: (color) => {
      this.setState({ startColour: color.hex });
    },
    handleStartPickerChangeComplete: (color) => {
      this.setState({ startColour: color.hex });
    },
    handleEndPickerChange: (color) => {
      this.setState({ endColour: color.hex });
    },
    handleEndPickerChangeComplete: (color) => {
      this.setState({ endColour: color.hex });
    }
  };
  render() {
    return <Context.Provider value={{ state: this.state }}>{this.props.children}</Context.Provider>;
  }
}

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
  const gradient = gogh("#FF00FF", "#00FFFF", 10)
  console.log(gradient)
  return (
    <ContextProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
export { Context }