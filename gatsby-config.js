require("dotenv").config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `RecallGraph`,
    description: `A versioning data store for time-variant graph data.`,
    author: `@rkr-dev,`,
    image: `static/Rg-1-trans.png`,
    keywords: ["recallgraph", "temporal graphs", "dynamic networks", "data versioning", "streaming graph data",
      "foxx microservice", "arangodb"],
    siteUrl: "https://recallgraph.tech/",
    siteVerification: {
      google: "",
      bing: ""
    },
    social: {
      twitter: "@recallgraph"
    },
    socialLinks: {
      github: `https://github.com/RecallGraph/RecallGraph`,
      twitter: ``,
      facebook: ``,
      instagram: ``,
      linkedin: ``,
      email: `info@recallgraph.tech`
    },
    organization: {
      name: `RecallGraph`,
      url: `https://github.com/RecallGraph`
    }
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    "gatsby-plugin-sass",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-165340753-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "recallgraph.tech"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `recallgraph`,
        short_name: `recallgraph`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/logo.png` // This path is relative to the root of the site.
      }
    }
  ]
}
