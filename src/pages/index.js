import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import React from "react"
import Footer from "../assets/material-kit/components/Footer/Footer"
import Header from "../assets/material-kit/components/Header/Header"
import HeaderLinks from "../assets/material-kit/components/Header/HeaderLinks"
import landingPageStyle from "../assets/material-kit/views/landingPage"
import AboutUs from "../components/AboutUs"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import UsefulLinks from "../components/UsefulLinks"
import WhatWeOffer from "../components/WhatWeOffer"
import YoutubeVideo from "../components/YoutubeVideo"
import SEO from '../components/seo'
import image from '../../static//Rg-1-trans.png'

const dashboardRoutes = []

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <SEO title="RecallGraph - versioning data store for time-variant graph data." image={image}/>
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
        <HeroSection />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
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
        <UsefulLinks />
        <Footer />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
