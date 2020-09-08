import React from "react"
import withStyles from "@material-ui/core/styles/withStyles";
import Header from '../assets/material-kit/components/Header/Header';
import HeaderLinks from "../assets/material-kit/components/Header/HeaderLinks";

import landingPageStyle from "../assets/material-kit/views/landingPage";
import HeroSection from "../components/HeroSection";

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
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)