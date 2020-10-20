import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import withStyles from "@material-ui/core/styles/withStyles"
import { Event, GetApp, HelpOutline, Notes, Subject } from "@material-ui/icons"
import { Link } from "gatsby"
import React from "react"
import "react-netlify-identity-widget/styles.css"
import AccountLink from "../../../../components/AccountLink"
import headerLinksStyle from "../../styles/headerLinksStyle"
import Button from "../CustomButtons/Button"
import CustomDropdown from "../CustomDropdown/CustomDropdown"

function HeaderLinks(props) {
  const { classes } = props

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="https://github.com/RecallGraph/RecallGraph/releases"
          color="transparent"
          target="_blank"
          rel={"noopener noreferrer"}
          className={classes.navLink}
        >
          <GetApp className={classes.icons} /> Downloads
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Documentation"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={HelpOutline}
          dropdownList={[
            <a
              href="https://docs.recallgraph.tech/"
              target="_blank"
              rel={"noopener noreferrer"}
              className={classes.dropdownLink}
            >
              <Notes className={classes.icons} /> Introduction
            </a>,
            <a
              href="https://docs.recallgraph.tech/working-with-recallgraph/guide"
              target="_blank"
              rel={"noopener noreferrer"}
              className={classes.dropdownLink}
            >
              <Subject className={classes.icons} /> Guide
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/schedule"} className={classes.navLink}>
          <Event className={classes.icons} /> Schedule a Call
        </Link>
      </ListItem>
      <AccountLink {...props} />
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
