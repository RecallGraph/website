import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import React from "react"
import landingPageStyle from "../assets/material-kit/styles/landingPageStyle"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import { SocialSharing } from "./SocialSharing"
import WhatWeOffer from "./WhatWeOffer"
import YoutubeVideo from "./YoutubeVideo"

class LandingPage extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div
        className={classNames(classes.main, classes.mainRaised)}
        key={"main"}
      >
        <div className={classes.container}>
          <SocialSharing />
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
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
