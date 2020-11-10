import { Loyalty } from "@material-ui/icons"
import React from "react"
import Card from "../assets/material-kit/components/Card/Card"
import CardBody from "../assets/material-kit/components/Card/CardBody"
import Button from "../assets/material-kit/components/CustomButtons/Button"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"
import InfoArea from "../assets/material-kit/components/InfoArea/InfoArea"

export default function AppSumoOffer() {
  return (
    <Card>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} md={6}>
            <InfoArea
              title="Special Offer"
              icon={Loyalty}
              iconColor="rose"
              description={`Exclusively on the AppSumo Marketplace!`}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <h2>Lifetime Premium Access, for just $29!</h2>
            <Button
              color="primary"
              size="lg"
              href="https://appsumo.com/recallgraph"
              target="_blank"
              rel={"noopener noreferrer"}
            >
              Get it Now!
            </Button>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  )
}