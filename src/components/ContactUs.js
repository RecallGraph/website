import withStyles from "@material-ui/core/styles/withStyles"
import emailjs, { init } from "emailjs-com"
import React from "react"
import Button from "../assets/material-kit/components/CustomButtons/Button"
import CustomInput from "../assets/material-kit/components/CustomInput/CustomInput"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"
import workStyle from "../assets/material-kit/styles/workStyle"
import Recaptcha from "react-recaptcha"
import Snackbar from "@material-ui/core/Snackbar"
import Fade from "@material-ui/core/Fade"
import CircularProgress from "@material-ui/core/CircularProgress"

class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      open: false,
      Transition: Fade,
      status: "",
      verified: false,
      loading: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.verifyCallback = this.verifyCallback.bind(this)
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  verifyCallback() {
    this.setState({ verified: true })
  }

  handleSubmit(e) {
    const service_id = process.env.GATSBY_EMAILJS_SERVICE_ID
    const template_id = process.env.GATSBY_EMAILJS_TEMPLATE_ID
    const user_id = process.env.GATSBY_EMAILJS_USER_ID
    // const user_id = "user_M23qURHUeUhH8KoE6X7Nf"
    e.preventDefault()
    this.setState({ loading: true })
    if (this.state.verified) {
      init(user_id)
      emailjs
        .sendForm(service_id, template_id, e.target, user_id)
        .then(() => {
          this.setState({ status: "Message sent successfully", open: true })
        })
        .catch(() =>
          this.setState({
            status: "Sending failed. Please try again",
            open: true,
          })
        )
        .finally(() => {
          this.setState({
            name: "",
            email: "",
            message: "",
            loading: false,
          })
        })
    } else {
      this.setState({
        status: "Captcha not verified. Please select again.",
        open: true,
        loading: false,
      })
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contact Us</h2>
            <h4 className={classes.description}>
              Leave us your details and we’ll get back to you at the earliest
              opportunity.
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
                      fullWidth: true,
                    }}
                    inputProps={{
                      required: true,
                      value: this.state.name,
                      name: "name",
                      onChange: this.handleChange,
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
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "email",
                      value: this.state.email,
                      name: "email",
                      onChange: this.handleChange,
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
                    className: classes.textArea,
                  }}
                  inputProps={{
                    required: true,
                    multiline: true,
                    rows: 5,
                    value: this.state.message,
                    name: "message",
                    onChange: this.handleChange,
                  }}
                />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={7}>
                    {typeof window === 'undefined' ? null : <Recaptcha
                      sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                      verifyCallback={this.verifyCallback}
                    />}
                  </GridItem>
                  <GridItem
                    xs={10}
                    sm={10}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary" type="submit">
                      Send Message
                    </Button>
                  </GridItem>
                  <GridItem xs={1} sm={1} md={1}>
                    {this.state.loading && <CircularProgress />}
                  </GridItem>
                  <GridItem>
                    <Snackbar
                      open={this.state.open}
                      onClose={this.handleClose}
                      message={this.state.status}
                      TransitionComponent={this.state.Transition}
                      autoHideDuration={3000}
                    />
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

export default withStyles(workStyle)(ContactUs)
