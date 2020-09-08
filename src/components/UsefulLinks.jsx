import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from '../assets/material-kit/components/Grid/GridContainer'
import GridItem from '../assets/material-kit/components/Grid/GridItem'
import Button from "../assets/material-kit/components/CustomButtons/Button.jsx";
import productStyle from '../assets/material-kit/views/productStyle'

class UsefulLinks extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.section} style={{backgroundColor:'#fafafa'}}>
                <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                <h3 className={classes.title}>Useful Links</h3>
                <Button
                href="https://gitter.im/RecallGraph/community"
                color="info"
                target="_blank"
                rel="noopener noreferrer"
                >
                Community
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
                href="https://gitter.im/RecallGraph/community"
                color="info"
                target="_blank"
                rel="noopener noreferrer"
                >
                Community
                </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <h3 className={classes.title}>Contact Us</h3>
                <Button
                href="https://gitter.im/RecallGraph/community"
                color="info"
                target="_blank"
                rel="noopener noreferrer"
                >
                Community
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
                href="https://gitter.im/RecallGraph/community"
                color="info"
                target="_blank"
                rel="noopener noreferrer"
                >
                Community
                </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <h3 className={classes.title}>Follow Us</h3>
                <Button
                href="https://gitter.im/RecallGraph/community"
                color="info"
                target="_blank"
                rel="noopener noreferrer"
                >
                Community
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
                href="https://gitter.im/RecallGraph/community"
                color="info"
                target="_blank"
                rel="noopener noreferrer"
                >
                Community
                </Button>
                </GridItem>
                </GridContainer>
            </div>
            
        )
    }
}

export default withStyles(productStyle)(UsefulLinks)