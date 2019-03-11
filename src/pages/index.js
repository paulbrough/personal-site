import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"

export default ({ data }) => (
	<Layout>
		<h1>Hello</h1>
		<p>
			And welcome!
		</p>

		<Portfolio entries={data.craft.entries}></Portfolio>
	</Layout>
)

export const query = graphql`
{
    craft {
      entries(section: [portfolio]) {
        ... on Craft_Portfolio {
          id
		  title
		  slug
          client
          dateCreated
          screenshot {
            id
			url
			screenshotSmall: url(transform: screenshotSmall)
			screenshotMedium: url(transform: screenshotMedium)
          }
          description {
            totalPages
            content
          }
          
  
        }
      }
    }
  }
  
`