module.exports = {
  siteMetadata: {
    title: `Paul Brough`,
    description: `I am a full-stack web developer located in Palmer Lake, Colorado (an easy drive to Denver, Castle Rock, or Colorado Springs). I am available for hire for a wide variety of projects. Take a look at my portfolio and resume, and contact me to discuss your next project.`,
    author: `Paul Brough`,
    image: ``,
  },
  plugins: [
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
        trackingId: "UA-137251375-2",
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