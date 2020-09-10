module.exports = {
  siteMetadata: {
    title: `RecallGraph`,
    description: `A versioning data store for time-variant graph data.`,
    author: `@rkr-dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `recallgraph`,
        short_name: `recallgraph`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
