
const path = require(`path`)
const { makeEntryPath } = require(`./src/utils`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
        craft {
            entries(section: [portfolio]) {
              ... on Craft_Portfolio {
                id
                slug
                title
                client
                dateCreated
                screenshot {
                  id
                  url
                }
                description
              }
            }
          }
    }
  `)

  data.craft.entries.forEach(entry => {
    actions.createPage({
      path: makeEntryPath(entry),
      component: path.resolve(`./src/components/portfolio-item.js`),
      context: {
        slug: entry.slug,
      },
    })
  })
}