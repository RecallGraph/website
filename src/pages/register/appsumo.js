import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import landingPageStyle from "../../assets/material-kit/styles/landingPageStyle"
import AppSumoForm from "../../components/AppSumoForm"

const useStyles = makeStyles(landingPageStyle)

export default function AppSumoPage () {
  const classes = useStyles()
  const identity = useIdentityContext()
  const isLoggedIn = identity && identity.isLoggedIn

  return (
    <div
      className={classNames(classes.main, classes.mainRaised)}
      key={"main"}
      id={"main"}
    >
      <div className={classes.container} style={{ marginTop: "10px" }}>
        <AppSumoForm isLoggedIn={isLoggedIn}/>
      </div>
    </div>
  )
}
