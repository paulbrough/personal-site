module.exports = {
  siteMetadata: {
    title: `Paul Brough`,
    description: `I am a full-stack web developer located in Palmer Lake, Colorado (an easy drive to Denver, Castle Rock, or Colorado Springs). I am available for hire for a wide variety of projects. Take a look at my portfolio and resume, and contact me to discuss your next project.`,
    author: `Paul Brough`,
    image: ``,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paul Brough`,
        short_name: `PaulBrough`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#13547A`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        fieldName: `craft`,
        typeName: `Craft`,
        url: `http://personal.loc/api`,
        headers: {
          Authorization: `bearer F6zCNHqDDd5n0-bCg63oi5siqzrOREPvusD-SGRMpguH62-sA944I0vVP09vsQ7a`,
        },
        refetchInterval: 60,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137251375-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
  ],
}