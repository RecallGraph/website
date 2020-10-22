import { Chip } from "@material-ui/core"
import { Schedule } from "@material-ui/icons"
import React from "react"
import Card from "../assets/material-kit/components/Card/Card"
import CardBody from "../assets/material-kit/components/Card/CardBody"
import CardFooter from "../assets/material-kit/components/Card/CardFooter"
import CardHeader from "../assets/material-kit/components/Card/CardHeader"
import Button from "../assets/material-kit/components/CustomButtons/Button"

const statusColorMap = {
  active: "primary",
  redeemed: "info",
  cancelled: "danger",
}
const statusChipColorMap = {
  active: "primary",
  redeemed: "default",
  cancelled: "secondary",
}

export default function AppSumoCode (props) {
  const { coupon, user, classes } = props
  const { status, code } = coupon
  const color = statusColorMap[status]

  function show () {
    if (window.appointlet) {
      const opts = {
        organization: 'recallgraph',
        service: 403652,
        bookable: 136876,
        email: user.email,
        fields: {
          name: user.user_metadata.full_name,
          'appsumo-code': code
        }
      }

      const schedule = window.appointlet(opts)
      schedule.show()
    }
  }

  let cardBody
  switch (status) {
    case 'active':
      cardBody = <>
        <p>
          Your AppSumo Code is active and gives you access to a 1 hour
          conference call with Aditya (the creator of RecallGraph).
        </p>
        <p>
          You could use this to understand core concepts, best practices for
          modelling your temporal data, or anything related to setup,
          configuration and usage.
        </p>
        <p>
          Your code also gives you free lifetime access to all current and future
          premium features of RecallGraph.
        </p>
      </>
      break

    case 'redeemed':
      cardBody = <>
        <p>
          Your AppSumo Code has already been redeemed for a 1 hour
          conference call.
        </p>
        <p>
          You still have free lifetime access to all current and future
          premium features of RecallGraph.
        </p>
      </>
      break

    case 'cancelled':
      cardBody = <>
        <p>
          Your AppSumo Code was cancelled. This means that you have opted to
          get a full refund for the purchase amount of the coupon.
        </p>
        <p>
          Your lifetime access to current and future premium features of
          RecallGraph stands revoked.
        </p>
      </>
      break

    default:
      cardBody = null
  }

  return (
    <Card>
      <CardHeader color={color}>
        <h1>Your AppSumo Code</h1>
      </CardHeader>
      <CardBody>
        <h2>{code} <Chip label={status.toUpperCase()} size="small"
                         color={statusChipColorMap[status]} /></h2>
        {cardBody}
      </CardBody>
      {status === "active" ? (
        <CardFooter>
          <Button color={color} size="lg" onClick={show}>
            <Schedule className={classes.icons} /> Book Your Call Now!
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  )
}