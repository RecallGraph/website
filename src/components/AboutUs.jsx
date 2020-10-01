import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"
import Button from "../assets/material-kit/components/CustomButtons/Button"

import productStyle from "../assets/material-kit/styles/productStyle"

class AboutUs extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Do I need RecallGraph?</h2>
            <h4 className={classes.description} align="left">
              RecallGraph is a potential fit for scenarios where data is best
              represented as a network of vertices and edges (i.e., a graph)
              having the following characteristics:
              <ol>
                <li>
                  Both vertices and edges can hold properties in the form of
                  attribute/value pairs (equivalent to JSON objects).
                </li>
                <li>
                  Documents (vertices/edges) mutate within their lifespan (both
                  in their individual attributes/values and in their relations
                  with each other).
                </li>
                <li>
                  Past states of documents are as important as their present,
                  necessitating retention and queryability of their change
                  history.
                </li>
              </ol>
              <Button
                href="https://github.com/RecallGraph/RecallGraph#do-i-need-a-versioned-graph-database"
                color="info"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More...
              </Button>
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(productStyle)(AboutUs)
