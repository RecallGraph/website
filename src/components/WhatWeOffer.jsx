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
                      title="Feature One"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam odio lectus, non tempus nulla posuere sit amet. Duis dictum eu nibh sed fermentum. Donec nec neque vitae eros eleifend cursus eu sed ex."
                      icon={CloudQueueIcon}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Feature Two"
                      description="Phasellus sit amet varius purus, porttitor lobortis felis. Mauris ex orci, mattis eu ultrices eget, molestie sed nisi. In porttitor turpis sed consequat dapibus."
                      icon={ShowChartIcon}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Feature Three"
                      description="Nulla fermentum ante ac fringilla accumsan. Integer efficitur eros at magna placerat, in tristique turpis consectetur."
                      icon={StorageIcon}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Feature Four"
                      description="Nunc quis mi sit amet arcu maximus viverra vulputate in mi. Donec at interdum ante, ut molestie nisi. Curabitur porttitor massa ac urna lobortis tincidunt."
                      icon={PermDataSettingIcon}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Feature Five"
                      description="Praesent blandit turpis purus, at viverra diam rutrum rutrum. Proin ligula ligula, venenatis consequat cursus vitae, dapibus ac nibh."
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
