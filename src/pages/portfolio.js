import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import PageHeader from "../components/page-header"
import PageContent from "../components/page-content"
import SEO from "../components/seo"

export default ({ data }) => (
	<Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} description="test description" />

    <PageHeader>

      <h1>Portfolio</h1>
      <p className="lead">Below you will find a few projects that represent the work I have done over the last several years.</p>
    </PageHeader>
    <PageContent>

      <Portfolio entries={data.craft.entries}></Portfolio>
    </PageContent>
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
          title
          screenshotSmall: url(transform: screenshotSmall)
          screenshotMedium: url(transform: screenshotMedium)
        }
        description
      }
    }
  }
}

  
`