import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import React from "react"
import Footer from "../assets/material-kit/components/Footer/Footer"
import Header from "../assets/material-kit/components/Header/Header"
import HeaderLinks from "../assets/material-kit/components/Header/HeaderLinks"
import landingPageStyle from "../assets/material-kit/views/landingPage"
import AboutUs from "../components/AboutUs"
// import CarouselSection from "../components/CarouselSection"
import ContactUs from "../components/ContactUs"
import HeroSection from "../components/HeroSection"
import UsefulLinks from "../components/UsefulLinks"
import WhatWeOffer from "../components/WhatWeOffer"
import YoutubeVideo from "../components/YoutubeVideo"

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
          <div className={classes.container}>
            <WhatWeOffer/>
            {/* <CarouselSection/> */}
            <YoutubeVideo 
              video="UP2KDQ_kL4I" 
              autoplay="0" 
              rel="0" 
              modest="1"
              title="RecallGraph as a versioning data store"
              description="RecallGraph retains all changes that its data (vertices and edges) have gone through to reach their current state. "
              />
            <YoutubeVideo 
              video="A953O3hT1Os" 
              autoplay="0" 
              rel="0" 
              modest="1"
              title="Open Source Directions hosted by OpenTeams"
              description="Open Source Directions we were joined by Aditya Mukhopadhyay who talked about the work he has been doing with RecallGraph."
                />

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