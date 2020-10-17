import React from "react"
import Footer from "../assets/material-kit/components/Footer/Footer"
import image from "../../static/Rg-1-bg.jpg"
import Header from "../assets/material-kit/components/Header/Header"
import HeaderLinks from "../assets/material-kit/components/Header/HeaderLinks"
import SEO from "./SEO"
import { IdentityContextProvider } from 'react-netlify-identity-widget'

import "typeface-roboto"
import "typeface-roboto-slab"

const url = 'https://recallgraph.tech/'

class Layout extends React.Component {
  render() {
    const { classes, children, ...rest } = this.props

    return <IdentityContextProvider url={url}>
      <SEO
        title="RecallGraph - A versioning data store for time-variant graph data."
        image={{src:image,height:627,width:1200}}
        key={"seo"}
      />
      <Header
        color="transparent"
        brand="RecallGraph"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 320,
          color: "white",
        }}
        key={"header"}
        {...rest}
      />
      {children}
      <Footer key={"footer"} />
    </IdentityContextProvider>
  }
}

export default Layout
