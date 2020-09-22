/*eslint-disable*/
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
                href="https://github.com/RecallGraph/RecallGraph"
                className={classes.block}
                target="_blank"
              >
                RecallGraph
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://adityamukho.com/tag/historical-graphs/"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/RecallGraph/RecallGraph/blob/development/LICENSE"
                className={classes.block}
                target="_blank"
              >
                License
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
