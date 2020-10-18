import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"

import videoStyle from "../assets/material-kit/styles/videoStyle"

class YoutubeVideo extends React.Component {
  render () {
    const { classes } = this.props
    let videoSrc =
      "https://www.youtube.com/embed/" +
      this.props.video +
      "?autoplay=" +
      this.props.autoplay +
      "&rel=" +
      this.props.rel +
      "&modestbranding=" +
      this.props.modest
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8} style={{paddingBottom: "15px"}}>
            <h2 className={classes.title}>{this.props.title}</h2>
            <h4 className={classes.description}>{this.props.description}</h4>
            <div style={{ width: "100%", position: "relative", paddingBottom: "56.25%" }}>
              <iframe
                title={this.props.title}
                className="player"
                src={videoSrc}
                style={{
                  position: "absolute", top: 0, left: 0, width: "100%",
                  height: "100%", border: 0
                }}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(videoStyle)(YoutubeVideo)
