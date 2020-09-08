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
                  As the subject matter experts on temporal graph analytics, 
                  we are a multidisciplinary team consisting of leading researchers 
                  and commercial professionals. We have a shared vision on empowering 
                  organisations to surface hidden insights in their data using graphs. 
                  We work with organisations to digitally transform their cloud capabilities 
                  and processes to maximise their ability to produce business intelligence. 
                  Backed by scientific research, we’re spearheading the creation of future 
                  analytical tooling, backed by state of the art DevOps expertise for CI/CD 
                  pipelines.

                  At Chorograph we focus on what we do best – work on deep technology solutions 
                  that add new generational capability for high performing organisations. 
                  We work closely with our clients to understand their critical data points and 
                  develop solutions around them.
                  </h5>
                </GridItem>
              </GridContainer>
            </div>
         );
        }
}

export default withStyles(productStyle)(AboutUs)