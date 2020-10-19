import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import React from "react"
import landingPageStyle from "../../assets/material-kit/styles/landingPageStyle"
import AppSumoForm from "../../components/AppSumoForm"

const useStyles = makeStyles(landingPageStyle)

export default function AppSumoPage () {
  const classes = useStyles()

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
