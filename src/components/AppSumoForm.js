import CircularProgress from "@material-ui/core/CircularProgress"
import Fade from "@material-ui/core/Fade"
import Snackbar from "@material-ui/core/Snackbar"
import withStyles from "@material-ui/core/styles/withStyles"
import React from "react"
import Recaptcha from "react-recaptcha"
import Button from "../assets/material-kit/components/CustomButtons/Button"
import CustomInput from "../assets/material-kit/components/CustomInput/CustomInput"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"
import workStyle from "../assets/material-kit/styles/workStyle"

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

class AppSumoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      code: "",
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
    e.preventDefault()
    this.setState({ loading: true })
    if (this.state.verified) {
      const { name, email, password, code } = this.state
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "register-appsumo",
          name,
          email,
          password,
          code,
        }),
      })
        .then(() => {
          this.setState({
            status: "You have registered successfully.",
            open: true,
            name: "",
            email: "",
            password: "",
            code: "",
          })
        })
        .catch(() =>
          this.setState({
            status: "Registration failed. Please try again",
            open: true,
          })
        )
        .finally(() => {
          this.setState({
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
            <h2 className={classes.title}>Register with an AppSumo Code.</h2>
            <h4 className={classes.description}>
              Get free lifetime access to upcoming premium features!
            </h4>
            <form onSubmit={this.handleSubmit} name={"register-appsumo"} data-netlify={'true'}>
              <GridContainer>
                <GridItem xs={12}>
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
                <GridItem xs={12}>
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
                      required: true,
                      value: this.state.email,
                      name: "email",
                      onChange: this.handleChange,
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    name="password"
                    type="password"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.password,
                    }}
                    inputProps={{
                      type: "password",
                      required: true,
                      value: this.state.password,
                      name: "password",
                      onChange: this.handleChange,
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <CustomInput
                    labelText="AppSumo Code"
                    id="code"
                    name="code"
                    type="text"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      required: true,
                      value: this.state.code,
                      name: "code",
                      onChange: this.handleChange,
                    }}
                  />
                </GridItem>
                <GridContainer>
                  <GridItem xs={12} md={7}>
                    {typeof window === "undefined" ? null : (
                      <Recaptcha
                        sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                        verifyCallback={this.verifyCallback}
                      />
                    )}
                  </GridItem>
                  <GridItem xs={10} md={4} className={classes.textCenter}>
                    <Button color="primary" type="submit">
                      Register
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

export default withStyles(workStyle)(AppSumoForm)
