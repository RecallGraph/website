import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"

import videoStyle from "../assets/material-kit/styles/videoStyle"

class YoutubeVideo extends React.Component {
  render() {
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
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>{this.props.title}</h2>
            <h4 className={classes.description}>{this.props.description}</h4>
            <iframe
              title={this.props.title}
              className="player"
              width="100%"
              height="400vh"
              src={videoSrc}
              frameBorder="0"
            />
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(videoStyle)(YoutubeVideo)
