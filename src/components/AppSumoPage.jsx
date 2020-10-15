import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import { graphql, StaticQuery } from "gatsby"
import React from "react"
import landingPageStyle from "../assets/material-kit/styles/landingPageStyle"
import AppSumoForm from "./AppSumoForm"
import HeroSection from "./HeroSection"

class AppSumoPage extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <>
        <StaticQuery
          query={graphql`
            {
              allFile(filter: { name: { eq: "Rg-1-bg" } }) {
                nodes {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <HeroSection image={data.allFile.nodes[0].childImageSharp.fluid} />
          )}
          key={"hero"}
        />

        <div
          className={classNames(classes.main, classes.mainRaised)}
          key={"main"}
          id={"main"}
        >
          <div className={classes.container} style={{ marginTop: "10px" }}>
            <AppSumoForm />
          </div>
        </div>
      </>
    )
  }
}

export default withStyles(landingPageStyle)(AppSumoPage)