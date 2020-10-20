import { makeStyles } from "@material-ui/core/styles"
import { MoneyOff, Schedule, StarBorder } from "@material-ui/icons"
import classNames from "classnames"
import React from "react"
import Card from "../assets/material-kit/components/Card/Card"
import CardBody from "../assets/material-kit/components/Card/CardBody"
import CardFooter from "../assets/material-kit/components/Card/CardFooter"
import CardHeader from "../assets/material-kit/components/Card/CardHeader"
import Button from "../assets/material-kit/components/CustomButtons/Button"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer.js"
import GridItem from "../assets/material-kit/components/Grid/GridItem.js"
import landingPageStyle from "../assets/material-kit/styles/landingPageStyle"
import { useIdentityContext } from "react-netlify-identity-widget"

const useStyles = makeStyles(landingPageStyle)

export default function ProfilePage () {
  const classes = useStyles()
  const identity = useIdentityContext()

  function show (service) {
    if (window.appointlet) {
      const opts = { organization: 'recallgraph', service, bookable: 136876 }

      if (identity && identity.isLoggedIn) {
        const user = identity.user

        opts.email = user.email
        opts.fields = {
          name: user.user_metadata.full_name
        }
      }

      const schedule = window.appointlet(opts)
      schedule.show()
    }
  }

  return (
    <div className={classNames(classes.main, classes.mainRaised)} key={"main"}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} md={4} style={{ "marginTop": "30px", "padding": "10px" }}>
            <Card style={{ height: "90%" }}>
              <CardHeader color={'info'}><h2>15 Minute Intro <small>(Free)</small></h2></CardHeader>
              <CardBody>
                <h3><MoneyOff className={classes.icons} /></h3>
                <h4>
                  A short, introductory call to help you get acquainted with
                  RecallGraph's core ideas.
                </h4>
                <p>
                  Can also be used to set up a round of further discussions
                  for customizing RecallGraph to fit user-specific asks.
                </p>
                <p>
                  <b>Free of charge.</b>
                </p>
              </CardBody>
              <CardFooter>
                <Button color="info" onClick={() => show(402881)}>
                  <Schedule className={classes.icons} /> Book Now!
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} md={4} style={{ "marginTop": "30px" }}>
            <Card style={{ height: "90%" }}>
              <CardHeader color={'primary'}>
                <h1>
                  1 Hour Consultation
                  <StarBorder
                    className={classes.icons}
                    style={{ float: 'right' }}
                  />
                </h1>
              </CardHeader>
              <CardBody>
                <h2>$149</h2>
                <h3>
                  A dedicated, 1-1 call to discuss anything RecallGraph-related in depth.
                </h3>
                <p>
                  This could be to understand core concepts, best practices for modelling your temporal data, or
                  anything related to setup, configuration and usage.
                </p>
              </CardBody>
              <CardFooter>
                <Button color="primary" size="lg" onClick={() => show(402883)}>
                  <Schedule className={classes.icons} /> Book Now!
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} md={4} style={{ "marginTop": "30px", "padding": "10px" }}>
            <Card style={{ height: "90%" }}>
              <CardHeader color={'info'}><h2>2 Hour Exploratory Session</h2></CardHeader>
              <CardBody>
                <h3>$249</h3>
                <h4>For any discussion that doesn't fit into a 1 hour window.</h4>
              </CardBody>
              <CardFooter>
                <Button color="info" onClick={() => show(403630)}>
                  <Schedule className={classes.icons} /> Book Now!
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
