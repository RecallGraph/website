import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import React from "react"
import landingPageStyle from "../assets/material-kit/styles/landingPageStyle"
import AppSumoForm from "./AppSumoForm"

class AppSumoPage extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div
        className={classNames(classes.main, classes.mainRaised)}
        key={"main"}
        id={"main"}
      >
        <div className={classes.container} style={{ marginTop: "10px" }}>
          <AppSumoForm />
        </div>
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(AppSumoPage)