import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";


import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import ShowChartIcon from '@material-ui/icons/ShowChart';
import StorageIcon from '@material-ui/icons/Storage';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import EventNoteIcon from '@material-ui/icons/EventNote';


import GridContainer from '../assets/material-kit/components/Grid/GridContainer'
import GridItem from '../assets/material-kit/components/Grid/GridItem'
import InfoArea from '../assets/material-kit/components/InfoArea/InfoArea'

import productStyle from '../assets/material-kit/views/productStyle'

class WhatWeOffer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classes.title}>What we offer</h2>
                  <h5 className={classes.description}>
                    This is the paragraph where you can write more details about your
                    product. Keep you user engaged by providing meaningful
                    information. Remember that by this time, the user is curious,
                    otherwise he wouldn't scroll to get here. Add a button if you want
                    the user to see more.
                  </h5>
                </GridItem>
              </GridContainer>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Enterprise Dev Ops"
                      description="Manage, migrate and streamline your cloud infrastructure and establish a effective digital platform strategy."
                      icon={CloudQueueIcon}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Temporal Graph Analytics"
                      description="Run time-varying analytics on dynamic graphs to capture how relationships within your network evolve over time."
                      icon={ShowChartIcon}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Distributed Architecture"
                      description="Ensure your digital transformations are scaleable and cost efficient using distributed architecture."
                      icon={StorageIcon}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Data Engineering"
                      description="Build data pipelines and ensure your organisation is capturing meaningful information in appropriate data warehouses to develop a competitive advantage."
                      icon={PermDataSettingIcon}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Research and Development"
                      description="Acquire industry and academic-level expertise in deep technology innovation areas with reliable and streamlined solutions"
                      icon={EventNoteIcon}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          );
    }
}
export default withStyles(productStyle)(WhatWeOffer);
