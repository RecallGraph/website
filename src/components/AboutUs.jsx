import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from '../assets/material-kit/components/Grid/GridContainer'
import GridItem from '../assets/material-kit/components/Grid/GridItem'

import productStyle from '../assets/material-kit/views/productStyle'

class AboutUs extends React.Component{
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classes.title}>About RecallGraph</h2>
                  <h5 className={classes.description}>
                  RecallGraph can only track history for nodes (vertices /edges) that are persisted through its write APIs. This is because it needs to update the event log every time a node is written (created / updated / deleted). If a node is written through any means outside of RecallGraph's scope, it has no way of knowing, and hence its event log would fall out of sync with the node's data.

                  RecallGraph supports 4 write endpoints - one each for create, update, replace and delete operations respectively. These endpoints support both individual as well as bulk node writes, and are purposely kept semantically as close to ArangoDB's core CRUD REST APIs as possible.
                  </h5>
                </GridItem>
              </GridContainer>
            </div>
         );
        }
}

export default withStyles(productStyle)(AboutUs)