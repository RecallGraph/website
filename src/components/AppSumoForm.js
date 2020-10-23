import { CircularProgress, Fade, Snackbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { navigate } from "gatsby"
import React, { useState } from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import Recaptcha from "react-recaptcha"
import Button from "../assets/material-kit/components/CustomButtons/Button"
import CustomInput from "../assets/material-kit/components/CustomInput/CustomInput"
import GridContainer from "../assets/material-kit/components/Grid/GridContainer"
import GridItem from "../assets/material-kit/components/Grid/GridItem"
import workStyle from "../assets/material-kit/styles/workStyle"

const useStyles = makeStyles(workStyle)

// const encode = data =>
//   Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&")

export default function AppSumoForm () {
  const identity = useIdentityContext()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [code, setCode] = useState("")
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [verified, setVerified] = useState(false)
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState('primary')
  const classes = useStyles()

  const isLoggedIn = identity && identity.isLoggedIn
  let finished = false
  const fieldSetterMap = {
    name: setName,
    email: setEmail,
    password: setPassword,
    code: setCode
  }

  function handleChange (e) {
    fieldSetterMap[e.target.name](e.target.value)
  }

  async function handleSubmit (e) {
    e.preventDefault()
    setLoading(true)
    if (verified) {
      try {
        setMessage('Verifying AppSumo Code...')
        setOpen(true)
        let response = await fetch("/.netlify/functions/appSumo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: 'getByCodeAndStatus',
            code,
            status: 'free'
          })
        })
        let coupon = await response.json()

        if (Object.keys(coupon).length) {
          setMessage('Registering user...')
          setOpen(true)
          await identity.signupUser(email, password, {
            full_name: name,
            appsumo_code: code
          })

          setMessage('Logging in...')
          setOpen(true)
          const user = await identity.loginUser(email, password, true)

          setMessage('Activating AppSumo Code...')
          setOpen(true)
          await fetch("/.netlify/functions/appSumo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${user.token.access_token}`
            },
            body: JSON.stringify({
              action: 'activate'
            })
          })

          setMessage('Redirecting to account page...')
          setOpen(true)
          finished = true
          await navigate('/account')
        }
        else {
          setMessage(`AppSumo Code '${code}' was not found in the system.`)
          setOpen(true)
          setColor('secondary')
        }
      }
      catch (e) {
        setMessage(e.message)
        setOpen(true)
        setColor('secondary')
      }
      finally {
        if (!finished) {
          setLoading(false)
        }
      }

      // fetch("/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: encode({
      //     "form-name": "register-appsumo",
      //     name,
      //     email,
      //     password,
      //     code,
      //   }),
      // })
      //   .then(() => {
      //     navigate('/account')
      //   })
      //   .catch(() => {
      //     setStatus("Registration failed. Please try again")
      //     setOpen(true)
      //   })
    }
    else {
      setMessage("Captcha not verified. Please select again.")
      setOpen(true)
      setLoading(false)
    }
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        {isLoggedIn && !loading ?
          <GridItem xs={12}>
            <h1 className={classes.title}>Registration is open to new users only.</h1>
          </GridItem>
          :
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Register with an AppSumo Code.</h2>
            <h4 className={classes.description}>
              Get free lifetime access to upcoming premium features!
            </h4>
            <form onSubmit={handleSubmit} name={"register-appsumo"} data-netlify={'true'}>
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
                      value: name,
                      name: "name",
                      onChange: handleChange,
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
                      value: email,
                      name: "email",
                      onChange: handleChange,
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
                      value: password,
                      name: "password",
                      onChange: handleChange,
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
                      value: code,
                      name: "code",
                      onChange: handleChange,
                    }}
                  />
                </GridItem>
                <GridContainer>
                  <GridItem xs={12} md={7}>
                    {typeof window === "undefined" ? null : (
                      <Recaptcha
                        sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                        verifyCallback={() => setVerified(true)}
                      />
                    )}
                  </GridItem>
                  <GridItem xs={10} md={4} className={classes.textCenter}>
                    <Button color="primary" type="submit">
                      Register
                    </Button>
                  </GridItem>
                  <GridItem xs={1} sm={1} md={1}>
                    {loading && <CircularProgress />}
                  </GridItem>
                  <GridItem>
                    <Snackbar
                      open={open}
                      onClose={() => setOpen(false)}
                      message={message}
                      TransitionComponent={Fade}
                      autoHideDuration={3000}
                      color={color}
                    />
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        }
      </GridContainer>
    </div>
  )
}
