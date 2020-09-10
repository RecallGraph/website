import React from "react";
import emailjs,{init} from 'emailjs-com';
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from '../assets/material-kit/components/Grid/GridContainer'
import GridItem from '../assets/material-kit/components/Grid/GridItem'
import CustomInput from "../assets/material-kit/components/CustomInput/CustomInput.jsx";
import Button from "../assets/material-kit/components/CustomButtons/Button.jsx";

import workStyle from "../assets/material-kit/views/workStyle";

class ContactUs extends React.Component{
    constructor(props) {
      super(props);
      this.state = { 
                  name:'',
                  email:'',
                  message:''
                }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit(e) {
      const service_id = process.env.GATSBY_EMAILJS_SERVICE_ID;
      const template_id = `${process.env.GATSBY_EMAILJS_TEMPLATE_ID}`
      e.preventDefault();
      init("USER_ID");
      emailjs.sendForm(service_id,template_id , e.target, 'USER_ID')
      .then((result) => {
          console.log(result.text);
      }).catch(err => console.log(err)).
      finally(() => {
        this.setState({ 
        name:'',
        email:'',
        message:''
      })
      alert('Message Sent Successfully')
    } )
    }
    render(){
        const { classes } = this.props;
        const service_id = process.env.GATSBY_EMAILJS_SERVICE_ID;
        return(
            <div className={classes.section}>
              console.log('service_id',service_id)
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contact Us</h2>
            <h4 className={classes.description}>
            Leave us your details and we’ll get back to you at the earliest opportunity.
            </h4>
            <form onSubmit={this.handleSubmit}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    name="name"
                    type="text"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value:this.state.name,
                      name:'name',
                      onChange:this.handleChange
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    name="email"
                    type="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value:this.state.email,
                      name:'email',
                      onChange:this.handleChange
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  name="message"
                  type="text"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    value:this.state.message,
                    name:'message',
                    onChange:this.handleChange
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary" type="submit">Send Message</Button>
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