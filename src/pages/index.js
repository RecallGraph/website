import React from "react"
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from '../assets/material-kit/components/Header/Header';
import HeaderLinks from "../assets/material-kit/components/Header/HeaderLinks";

import landingPageStyle from "../assets/material-kit/views/landingPage";
import HeroSection from "../components/HeroSection";
import WhatWeOffer from "../components/WhatWeOffer";
import CarouselSection from "../components/CarouselSection";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import UsefulLinks from "../components/UsefulLinks";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const {classes, ...rest} = this.props;

    return (
      <div>
        <Header 
        color="transparent"
        routes={dashboardRoutes}
        brand="Recall Graph"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height:400,
          color:'white'
        }}
        {...rest}
        />
        <HeroSection />
        <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} id="whatWeOffer">
        <WhatWeOffer />
        <CarouselSection />
        <AboutUs />
        <ContactUs />
        
        </div>
        </div>
        <UsefulLinks />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)