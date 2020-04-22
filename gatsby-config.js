module.exports = {
  siteMetadata: {
    title: `Mars Weather`,
    description: `An app to display the weather on Mars using Nasa's InSight Mars Weather Service API.`,
    author: `Ger Hynes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `mars-weather-app`,
        short_name: `mars-weather`,
        start_url: `/`,
        background_color: `#822118`,
        theme_color: `#822118`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
