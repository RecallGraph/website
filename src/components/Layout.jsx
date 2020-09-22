import React from "react"
import image from "../../static/Rg-2-trans.png"
import Header from "../assets/material-kit/components/Header/Header"
import HeaderLinks from "../assets/material-kit/components/Header/HeaderLinks"
import SEO from "./SEO"

import "typeface-roboto"
import "typeface-roboto-slab"

const dashboardRoutes = []

class Layout extends React.Component {
  render() {
    const { classes, children, ...rest } = this.props

    return (
      <div>
        <SEO
          title="RecallGraph - A versioning data store for time-variant graph data."
          image={image}
        />
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="RecallGraph"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        {children}
      </div>
    )
  }
}

export default Layout
