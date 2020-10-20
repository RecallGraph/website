import { graphql, StaticQuery } from "gatsby"
import React, { Children, cloneElement } from "react"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import image from "../../static/Rg-1-bg.jpg"
import Footer from "../assets/material-kit/components/Footer/Footer"
import Header from "../assets/material-kit/components/Header/Header"
import HeaderLinks from "../assets/material-kit/components/Header/HeaderLinks"
import HeroSection from "./HeroSection"
import SEO from "./SEO"
import UsefulLinks from "./UsefulLinks"

import "typeface-roboto"
import "typeface-roboto-slab"

const url = "https://recallgraph.tech/"

class Layout extends React.Component {
  render () {
    const { children, location, ...rest } = this.props
    const isLandingPage = location.pathname === '/'
    const elements = Children.toArray(children).map(el => cloneElement(el, { location }))

    return <IdentityContextProvider url={url}>
      <SEO
        title="RecallGraph - A versioning data store for time-variant graph data."
        image={{ src: image, height: 627, width: 1200 }}
        key={"seo"}
      />
      <Header
        color="transparent"
        brand="RecallGraph"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: isLandingPage ? 400 : 150,
          color: "white",
        }}
        key={"header"}
        {...rest}
      />
      <StaticQuery
        query={graphql`
            {
              allFile(filter: { name: { eq: "Rg-1-trans" } }) {
                nodes {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          `}
        render={data => (
          <HeroSection image={data.allFile.nodes[0].childImageSharp.fluid} small={!isLandingPage} />
        )}
        key={"hero"}
      />
      {elements}
      <UsefulLinks key={"links"} />
      <Footer key={"footer"} />
    </IdentityContextProvider>
  }
}

export default Layout
