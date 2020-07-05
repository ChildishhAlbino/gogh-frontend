/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes, { node } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { gogh } from "gogh-gradient"
import Header from "../header/header"
import Sidebar from '../sidebar/sidebar'

import "./layout.scss"


const Context = React.createContext();

class ContextProvider extends React.Component {
  state = {
    startColour: "#ff00ff",
    endColour: "#00ffff",
    chunks: 10,
    goghRes: null,
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
    },
    submit: () => {
      let chunksInput = document.getElementById("chunksInput")
      const chunks = chunksInput.value || this.state.chunks
      const goghRes = gogh(this.state.startColour, this.state.endColour, chunks)
      this.setState({ chunks, goghRes })
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
  return (
    <ContextProvider>
      <Context.Consumer>
        {(context) => {
          return (
            <div className="content-wrapper">
              <div className="content-container">
                <Sidebar siteTitle={data.site.siteMetadata.title}></Sidebar>
                <main className="page-wrapper">{children}</main>
              </div>
            </div>
          )
        }}
      </Context.Consumer>
    </ContextProvider >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
export { Context }