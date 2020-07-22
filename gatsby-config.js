module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `key7A3Z2oliOyRdvy`,
        tables: [
          {
            baseId: `appUupdiPvAlAzVdL`,
            tableName: `Collaborateur`
          },
          {
            baseId: `appUupdiPvAlAzVdL`,
            tableName: `Client`
          },
        ]
      }
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'NjQ4OTM3MzQtZWM4Ni00ZmQzLWI2MTMtYzJkYmQ4M2I2MWNhNjM3MzEwMDYxMjI1MzI4OTU1'
      }
    }
  ],
}
