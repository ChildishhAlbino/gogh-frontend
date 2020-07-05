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
import Header from "../header/header"
import "./layout.scss"


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
      <Context.Consumer>
        {(context) => {
          return <div style={{
            background: `linear-gradient(to right, ${context.state.startColour}, ${context.state.endColour})`,
      }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="page-wrapper" gradient = {gradient}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
        }}
      </Context.Consumer>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
export { Context }