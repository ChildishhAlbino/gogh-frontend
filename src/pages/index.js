import React from "react"
import Layout, { Context } from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Context.Consumer>
        {(context) => {
          let goghRes = <div></div>;
          if (context.state.goghRes) {
            let colourWrapper = document.getElementsByClassName("page-wrapper")[0]
            console.log(window.innerHeight)
            let tenHeight = window.innerHeight / 10
            let actualHeight = window.innerHeight / context.state.goghRes.length
            let height = tenHeight < actualHeight ? actualHeight : tenHeight
            console.log(height)
            goghRes = (
              <div className="colour-wrapper">
                {
                  context.state.goghRes.map((colour, index) => {
                    return (
                      <div
                        className="colour-item"
                        key={colour + index}
                        style={{
                          background: colour,
                          height
                        }
                        }
                      > <p>{colour}</p></div>
                    )
                  })
                }
              </div>
            )
          }
          return goghRes
        }}
      </Context.Consumer>
    </Layout >
  )
}


export default IndexPage
