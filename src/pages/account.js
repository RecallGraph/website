import { CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import Gravatar from "react-gravatar"
import { useIdentityContext } from "react-netlify-identity-widget"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer.js"
import GridItem from "../assets/material-kit/components/Grid/GridItem.js"
import accountPageStyle from "../assets/material-kit/styles/accountPageStyle"
import AppSumoCode from "../components/AppSumoCode"
import RenderOnMount from "../components/RenderOnMount"

const useStyles = makeStyles(accountPageStyle)

function AccountPage () {
  const classes = useStyles();
  const identity = useIdentityContext()
  const isLoggedIn = identity && identity.isLoggedIn
  const [coupon, setCoupon] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCode = async () => {
      const response = await fetch("/.netlify/functions/appSumo", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${identity.user.token.access_token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: 'getByCode'
        })
      })
      const data = await response.json()

      setLoading(false)
      if (Object.keys(data).length) {
        setCoupon(data)
      }
    }

    if (isLoggedIn) {
      getCode()
    }
  }, [isLoggedIn, identity])

  if (isLoggedIn) {
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div className={classNames(classes.main, classes.mainRaised)} key={"main"}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <Gravatar email={identity.user.email} size={160} className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>{identity.user.user_metadata.full_name}</h3>
                </div>
              </div>
            </GridItem>
            {loading ?
              <GridItem xs={12} md={6} style={{ marginTop: "30px", textAlign: "center" }}>
                <CircularProgress />
              </GridItem>
              : coupon ?
                <GridItem xs={12} md={6} style={{ marginTop: "30px" }}>
                  <AppSumoCode coupon={coupon} user={identity.user} classes={classes} />
                </GridItem>
                : null}
          </GridContainer>
        </div>
      </div>
    );
  }

  if (typeof window !== 'undefined') {
    navigate("/", { replace: true })
  }

  return 'Redirecting...'
}

export default function() {
  return <RenderOnMount>
    <AccountPage />
  </RenderOnMount>
}