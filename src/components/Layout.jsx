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

    return <>
      <SEO
        title="RecallGraph - A versioning data store for time-variant graph data."
        image={{src:image,height:627,width:1200}}
        key={"seo"}
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
        key={"header"}
        {...rest}
      />
      {children}
    </>
  }
}

export default Layout
