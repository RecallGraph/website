import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import React from "react"
import CardBody from "../assets/material-kit/components/Card/CardBody"
import CardFooter from "../assets/material-kit/components/Card/CardFooter"
import CardHeader from "../assets/material-kit/components/Card/CardHeader"
import Button from "../assets/material-kit/components/CustomButtons/Button"
import Card from "../assets/material-kit/components/Card/Card"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer.js"
import GridItem from "../assets/material-kit/components/Grid/GridItem.js"
import landingPageStyle from "../assets/material-kit/styles/landingPageStyle"
import { StarBorder } from "@material-ui/icons"

const useStyles = makeStyles(landingPageStyle)

export default function ProfilePage() {
  const classes = useStyles()

  return (
    <div className={classNames(classes.main, classes.mainRaised)} key={"main"}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} md={4} style={{ "marginTop": "30px", "padding": "10px" }}>
            <Card>
              <CardHeader color={'info'}><h2>Basic</h2></CardHeader>
              <CardBody>
                <h2>$0</h2>
                <p>Free for life</p>
              </CardBody>
              <CardFooter>
                <Button>Download Now!</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} md={4} style={{ "marginTop": "30px" }}>
            <Card>
              <CardHeader color={'primary'}><h1>Premium <StarBorder className={classes.icons} style={{float: 'right'}}/></h1></CardHeader>
              <CardBody>
                <h1>$149/hr</h1>
                <p>
                  All basic features + technical consultation at $149 per hour.
                </p>
              </CardBody>
              <CardFooter>
                <Button>Download Now!</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} md={4} style={{ "marginTop": "30px", "padding": "10px" }}>
            <Card>
              <CardHeader color={'info'}><h2>Custom</h2></CardHeader>
              <CardBody>
                <h2>Contact Sales</h2>
                <p>
                  All basic features + technical consultation + customizations.
                  Contact sales to get a quote.
                </p>
              </CardBody>
              <CardFooter>
                <Button>Download Now!</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
