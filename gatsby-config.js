module.exports = {
  siteMetadata: {
    title: `Adamite Docs`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@adamitejs`,
    components: [
      {
        path: "/architecture",
        name: "Architecture",
        groups: []
      },
      {
        type: "divider",
        title: "Components"
      },
      {
        path: "/sdk",
        name: "SDK",
        version: "0.1.0",
        groups: [
          {
            path: "/sdk",
            name: "Get Started",
            pages: [
              { path: "/sdk", name: "Introduction" },
              { path: "/sdk/examples", name: "Examples" }
            ]
          },
          {
            path: "/sdk/database",
            name: "Database",
            pages: [
              {
                path: "/sdk/database/querying",
                name: "Querying Data",
                subpages: [
                  {
                    path: "/sdk/database/querying/filtering",
                    name: "Filtering Data"
                  },
                  {
                    path: "/sdk/database/querying/sorting",
                    name: "Sorting Data"
                  },
                  {
                    path: "/sdk/database/querying/limiting",
                    name: "Limiting Data"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: "/functions",
        name: "Functions",
        version: "0.1.0",
        groups: []
      },
      {
        path: "/database",
        name: "Database",
        version: "0.1.0",
        groups: [
          {
            path: "/database",
            name: "Get Started",
            pages: [{ path: "/database", name: "Introduction" }]
          },
          {
            path: "/database/security",
            name: "Security",
            pages: [
              {
                path: "/database/security",
                name: "Writing Security Rules",
                subpages: [
                  { path: "/database/security/reads", name: "Securing Reads" },
                  {
                    path: "/database/security/writes",
                    name: "Securing Writes"
                  },
                  {
                    path: "/database/security/deletes",
                    name: "Securing Deletes"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: "/auth",
        name: "Auth",
        version: "0.1.0",
        groups: []
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout")
      }
    },
    `gatsby-plugin-sass`
  ]
};
