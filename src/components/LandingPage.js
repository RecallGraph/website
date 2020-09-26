import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Footer from "../assets/material-kit/components/Footer/Footer"
import landingPageStyle from "../assets/material-kit/views/landingPageStyle"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import HeroSection from "./HeroSection"
import { SocialSharing } from "./SocialSharing"
import UsefulLinks from "./UsefulLinks"
import WhatWeOffer from "./WhatWeOffer"
import YoutubeVideo from "./YoutubeVideo"

class LandingPage extends React.Component {
  render() {
    const { classes } = this.props

    return <>
      <StaticQuery
        query={graphql`
          {
            allFile(filter: { name: { eq: "Rg-1-bg" } }) {
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
        render={data => <HeroSection image={data.allFile.nodes[0].childImageSharp.fluid} />}
        key={"hero"}
      />

      <div
        className={classNames(classes.main, classes.mainRaised)}
        key={"main"}
      >
        <div className={classes.container}>
          <SocialSharing/>
          <WhatWeOffer />
          <AboutUs />
          <YoutubeVideo
            video="UP2KDQ_kL4I"
            autoplay="0"
            rel="0"
            modest="1"
            title="RecallGraph presented @ ArangoDB Online Meetup"
          />
          <YoutubeVideo
            video="A953O3hT1Os"
            autoplay="0"
            rel="0"
            modest="1"
            title="A discussion on RecallGraph's development roadmap"
          />
          <ContactUs />
        </div>
      </div>
      <UsefulLinks key={"links"} />
      <Footer key={"footer"} />
    </>
  }
}

export default withStyles(landingPageStyle)(LandingPage)
