/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  module.exports = {
    siteMetadata: {
      title: "BackRoads",
      description: `Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure.`,
      author: "@nicolegibson",
      siteUrl: "https://backroads-tours-demo.netlify.com",
      image: "/defaultBcg.jpeg",
      twitterUsername: "@dev_with_me",
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
      `gatsby-plugin-playground`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-transition-link`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      },
      `gatsby-plugin-sitemap`,
      {
        resolve: "gatsby-plugin-robots-txt",
        options: {
          host: "https://backroads-tours-demo.netlify.com",
          sitemap:
            "https://backroads-tours-demo.netlify.com/sitemap.xml",
          policy: [{ userAgent: "*", allow: "/" }],
        },
      },
      `gatsby-plugin-offline`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `BackRoads Tour Company`,
          short_name: `BackRoads`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          display: `standalone`,
          icon: "src/images/icon.jpg",
        },
      },
    ],
  }
