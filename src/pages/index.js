import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import React from "react"
import Footer from "../assets/material-kit/components/Footer/Footer"
import Header from "../assets/material-kit/components/Header/Header"
import HeaderLinks from "../assets/material-kit/components/Header/HeaderLinks"
import landingPageStyle from "../assets/material-kit/views/landingPage"
import AboutUs from "../components/AboutUs"
import CarouselSection from "../components/CarouselSection"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import UsefulLinks from "../components/UsefulLinks"
import WhatWeOffer from "../components/WhatWeOffer"

const dashboardRoutes = []

class LandingPage extends React.Component {
  render () {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="RecallGraph"
          rightLinks={<HeaderLinks/>}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
        <HeroSection/>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container} id="whatWeOffer">
            <WhatWeOffer/>
            <CarouselSection/>
            <AboutUs/>
            <ContactUs/>

          </div>
        </div>
        <UsefulLinks/>
        <Footer/>
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)