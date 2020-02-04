const title = `Jonas Røssum – Web Developer`

module.exports = {
  siteMetadata: {
    title,
    description: `Jonas Røssum is a self-taught web application developer and user experience creator based in Copenhagen, Denmark. `,
    author: `@gatsbyjs`
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: `Jonas Røssum`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2979ff`,
        display: `standalone`,
        icon: `graphics/icon.svg` // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-material-ui',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline'
    'gatsby-plugin-remove-serviceworker'
  ]
}
