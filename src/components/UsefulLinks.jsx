import withStyles from "@material-ui/core/styles/withStyles"
import React from "react"
import Button from "../assets/material-kit/components/CustomButtons/Button.jsx"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"
import productStyle from "../assets/material-kit/views/productStyle"

class UsefulLinks extends React.Component {
        render () {
                const { classes } = this.props
                return (
                  <div className={classes.section} style={{ backgroundColor: "#fafafa" }}>
                          <GridContainer justify="center">
                                  <GridItem xs={12} sm={12} md={12}>
                                          <h2 className={classes.title}>Useful Links</h2>
                                          <Button
                                            href="https://github.com/RecallGraph/RecallGraph"
                                            color="info"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                                  Source
                                          </Button>
                                          <Button
                                            href="https://gitter.im/RecallGraph/community"
                                            color="info"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                                  Community
                                          </Button>
                                          <Button
                                            href="https://docs.recallgraph.tech/"
                                            color="info"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                                  Docs
                                          </Button>
                                          <Button
                                            href="https://github.com/RecallGraph/RecallGraph/releases"
                                            color="info"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                                  Downloads
                                          </Button>
                                          <Button
                                            href="https://trello.com/b/AGrGVmb8/recallgraph"
                                            color="info"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                                  Project Tracker
                                          </Button>
                                  </GridItem>
                          </GridContainer>
                  </div>
                )
        }
}

export default withStyles(productStyle)(UsefulLinks)