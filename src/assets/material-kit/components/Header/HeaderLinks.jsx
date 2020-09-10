/*eslint-disable*/
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import withStyles from "@material-ui/core/styles/withStyles"
import Tooltip from "@material-ui/core/Tooltip"
import { Apps, Forum } from "@material-ui/icons"
import React from "react"
import { FaGithub } from "react-icons/fa"
import headerLinksStyle from "../../styles/headerLinksStyle"
import Button from "../CustomButtons/Button"
import CustomDropdown from "../CustomDropdown/CustomDropdown"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Documentation"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a
              href="https://docs.recallgraph.tech/working-with-recallgraph/guide"
              target="_blank"
              className={classes.dropdownLink}
            >
              Get Started
            </a>,
            <a
              href="https://docs.recallgraph.tech/"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://gitter.im/RecallGraph/community"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Forum className={classes.icons} /> Community
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Follow us on Github"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/RecallGraph/RecallGraph"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaGithub />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
