import withStyles from "@material-ui/core/styles/withStyles"
import React from "react"
import Particles from "react-tsparticles"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"
import Parallax from "../assets/material-kit/components/Parallax/Parallax"
import landingPageStyle from "../assets/material-kit/views/landingPage"

class HeroSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Particles
                id="tsparticles"
                options={{
                  background: {
                    color: {
                      value: "#2F4F4F"
                    },
                    image: 'url("/Rg-1-trans.png")',
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "contain",
                    opacity: 1
                  },
                  fpsLimit: 30,
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onClick: {
                        enable: false,
                        mode: "push",
                      },
                      onHover: {
                        enable: false,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                      },
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#228dd5",
                    },
                    links: {
                      color: "#a6d522",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 2,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outMode: "bounce",
                      random: true,
                      speed: 2,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        value_area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: 5,
                      animation: {
                        enable: true,
                        minimumValue: 1,
                        speed: 10
                      }
                    },
                  },
                  detectRetina: true,
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    )
  }
}

export default withStyles(landingPageStyle)(HeroSection)
