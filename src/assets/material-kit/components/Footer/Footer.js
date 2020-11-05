import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
import { List, ListItem, withStyles } from "@material-ui/core"

import footerStyle from "../../styles/footerStyle"

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://blog.recallgraph.tech/"
                className={classes.block}
                target="_blank"
                rel={"noopener"}
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://recallgraph.loopinput.com/5f83e431823e4d00170bf0bd"
                className={classes.block}
                target="_blank"
                rel={"noopener noreferrer"}
              >
                Feedback
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.termsfeed.com/live/e3f4aeec-1e62-4c27-9682-f6cf06adc647"
                className={classes.block}
                target="_blank"
                rel={"noopener noreferrer"}
              >
                Disclaimer
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.termsfeed.com/live/1a357325-8f3e-4b1b-b913-217f1cadb42a"
                className={classes.block}
                target="_blank"
                rel={"noopener noreferrer"}
              >
                Cookies Policy
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()},{" "}
          <a
            href="https://github.com/RecallGraph"
            className={aClasses}
            target="_blank"
            rel={"noopener noreferrer"}
          >
            RecallGraph
          </a>
          . All rights reserved.
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
