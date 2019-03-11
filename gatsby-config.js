module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
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
        refetchInterval: 60
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}