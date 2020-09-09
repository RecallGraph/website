import withStyles from "@material-ui/core/styles/withStyles"
import React from "react"
import { FaPlay } from "react-icons/fa"
import Button from "../assets/material-kit/components/CustomButtons/Button"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"
import Parallax from "../assets/material-kit/components/Parallax/Parallax"
import landingPageStyle from "../assets/material-kit/views/landingPage"

class HeroSection extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <Parallax filter image={require("../assets/img/Rg-2-trans.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h4>
                RecallGraph is a versioned-graph data store - it retains all
                changes that its data (vertices and edges) have gone through to
                reach their current state. It supports point-in-time graph
                traversals, letting the user query any past state of the graph
                just as easily as the present.
              </h4>
              <br/>
              <Button
                color="success"
                size="lg"
                href="https://youtu.be/UP2KDQ_kL4I"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPlay/>
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    )
  }
}

export default withStyles(landingPageStyle)(HeroSection)