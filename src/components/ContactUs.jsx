import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from '../assets/material-kit/components/Grid/GridContainer'
import GridItem from '../assets/material-kit/components/Grid/GridItem'
import CustomInput from "../assets/material-kit/components/CustomInput/CustomInput.jsx";
import Button from "../assets/material-kit/components/CustomButtons/Button.jsx";

import workStyle from "../assets/material-kit/views/workStyle";

class ContactUs extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contact Us</h2>
            <h4 className={classes.description}>
            Leave us your details and we’ll get back to you at the earliest opportunity.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary">Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
        )
    }
}

export default withStyles(workStyle)(ContactUs);