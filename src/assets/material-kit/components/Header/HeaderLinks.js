import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import withStyles from "@material-ui/core/styles/withStyles"
import { Forum, GetApp, HelpOutline } from "@material-ui/icons"
import React from "react"
import { FaGithub } from "react-icons/fa"
import "react-netlify-identity-widget/styles.css"
import headerLinksStyle from "../../styles/headerLinksStyle"
import Button from "../CustomButtons/Button"
import CustomDropdown from "../CustomDropdown/CustomDropdown"
import AccountLink from "../../../../components/AccountLink";

function HeaderLinks(props) {
  const { classes } = props

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="https://github.com/RecallGraph/RecallGraph/releases"
          color="transparent"
          target="_blank"
          rel={"noreferrer"}
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
              rel={"noreferrer"}
              className={classes.dropdownLink}
            >
              Introduction
            </a>,
            <a
              href="https://docs.recallgraph.tech/working-with-recallgraph/guide"
              target="_blank"
              rel={"noreferrer"}
              className={classes.dropdownLink}
            >
              Guide
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://gitter.im/RecallGraph/community"
          color="transparent"
          target="_blank"
          rel={"noreferrer"}
          className={classes.navLink}
        >
          <Forum className={classes.icons} /> Community
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://github.com/RecallGraph/RecallGraph"
          target="_blank"
          rel={"noreferrer"}
          color="transparent"
          className={classes.navLink}
        >
          <FaGithub /> Source
        </Button>
      </ListItem>
      <AccountLink {...props}/>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
