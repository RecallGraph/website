import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames"
import React from "react"
import AppSumoOffer from "../components/AppSumoOffer";
import landingPageStyle from "../assets/material-kit/styles/landingPageStyle"
import AboutUs from "../components/AboutUs"
import ContactUs from "../components/ContactUs"
import { SocialSharing } from "../components/SocialSharing"
import WhatWeOffer from "../components/WhatWeOffer"
import YoutubeVideo from "../components/YoutubeVideo"

const useStyles = makeStyles(landingPageStyle)

export default function LandingPage () {
  const classes = useStyles()

  return (
    <div
      className={classNames(classes.main, classes.mainRaised)}
      key={"main"}
    >
      <div className={classes.container}>
        <SocialSharing />
        <AppSumoOffer/>
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
