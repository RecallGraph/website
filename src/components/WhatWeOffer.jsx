import withStyles from "@material-ui/core/styles/withStyles"

import {
  LineWeight,
  BarChart,
  HelpOutline,
  Http,
  Storage,
  History,
} from "@material-ui/icons"
import React from "react"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"
import InfoArea from "../assets/material-kit/components/InfoArea/InfoArea"
import productStyle from "../assets/material-kit/views/productStyle"

class WhatWeOffer extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} lg={12}>
            <h2 className={classes.title}>
              A versioning data store for time-variant graph data.
            </h2>
            <h4 className={classes.description}>
              <p >
                RecallGraph is a versioned-graph data store - it retains all
                changes that its data (vertices and edges) have gone through to
                reach their current state.
              </p>
              <p>
                It supports point-in-time graph traversals, letting the user
                query any past state of the graph just as easily as the present.
              </p>
            </h4>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4} >
              <InfoArea
                title="ACID Transactions"
                description="All write operations are wrapped in ACID-compliant transactions, so your data is
                      always consistent."
                icon={Storage}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="REST API"
                description="Access all functionality through REST API endpoints. Integrate into any stack.
                      Call the API from anywhere, including servers and browsers."
                icon={Http}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Recoverable Deletes, Purge, Import and more..."
                description="Any data that you delete can always be restored, unless its history is explicitly
                      purged from the database. You can also import your existing non-temporal data and begin tracking
                      revisions from there."
                icon={LineWeight}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Point-in-Time"
                description="Travel back in time to view individual node/edges states from the past, or run graph
                      traversals or shortest-path queries on historical graph states."
                icon={History}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Distributed Tracing Support"
                description="RecallGraph is an OpenTracing-compliant service. Plug into your existing distributed
                      tracing infrastructure and get insights and performance metrics OOTB."
                icon={BarChart}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Extensive Documentation"
                description="Well designed documentation to familiarize you with the core concepts and get you
                      up and running in the shortest time possible."
                icon={HelpOutline}
                iconColor="info"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(productStyle)(WhatWeOffer)
