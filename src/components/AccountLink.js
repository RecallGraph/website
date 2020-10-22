import Avatar from "@material-ui/core/Avatar"
import ListItem from "@material-ui/core/ListItem"
import withStyles from "@material-ui/core/styles/withStyles"
import { ExitToApp } from "@material-ui/icons"
import { Link } from "gatsby"
import React, { useState } from "react"
import Gravatar from "react-gravatar"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import RenderOnMount from "./RenderOnMount"
import Button from "../assets/material-kit/components/CustomButtons/Button"
import CustomDropdown from "../assets/material-kit/components/CustomDropdown/CustomDropdown"
import headerLinksStyle from "../assets/material-kit/styles/headerLinksStyle"

function AccountLink(props) {
  const { classes } = props
  const identity = useIdentityContext()
  const [dialog, setDialog] = useState(false)
  const isLoggedIn = identity && identity.isLoggedIn

  return (
    <ListItem
      className={classes.listItem}
      title={isLoggedIn ? identity.user.user_metadata.full_name : undefined}
    >
      <RenderOnMount>
        {isLoggedIn ? (
          <Dropdown
            setDialog={setDialog}
            email={identity.user.email}
            {...props}
          />
        ) : (
          <Button
            className={classes.navLink}
            color="transparent"
            onClick={() => setDialog(true)}
          >
            <ExitToApp className={classes.icons} /> Login
          </Button>
        )}
      </RenderOnMount>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={() => setDialog(false)}
      />
    </ListItem>
  )
}

function Dropdown(props) {
  const { classes, setDialog, email } = props
  const profile = <Gravatar email={email} size={20} />

  return (
    <CustomDropdown
      caret={true}
      noLiPadding
      buttonProps={{
        className: classes.navLink,
        color: "transparent",
      }}
      buttonIcon={() => (
        <Avatar style={{ height: "20px", width: "20px" }}>
          {profile}
        </Avatar>
      )}
      dropdownList={[
        <Link to="/account" className={classes.dropdownLink}>
          {profile}
          &nbsp;ACCOUNT
        </Link>,
        <Button onClick={() => setDialog(true)} className={classes.dropdownLink} color="transparent">
          <ExitToApp className={classes.icons} /> Logout
        </Button>,
      ]}
    />
  )
}

export default withStyles(headerLinksStyle)(AccountLink)