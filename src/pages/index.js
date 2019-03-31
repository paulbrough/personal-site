import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import PageContent from "../components/page-content"
import Portfolio from "../components/portfolio"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <PageHeader>
      <div>
        <h1>Hello</h1>
        <p className="lead">I am a full-stack web developer located in Palmer Lake, Colorado (an easy drive to Denver, Castle Rock, or Colorado Springs). 
        I am available for hire for a wide variety of projects. 
        Take a look at my <Link to="/portfolio">portfolio</Link> and <Link to="/resume">resume</Link>, and <Link to="/contact">contact</Link> me to discuss your next project.</p>
      </div>
    </PageHeader>
    <PageContent>
      <h2>Selected Projects</h2>
      <Portfolio entries={data.craft.entries}></Portfolio>
    </PageContent>





  </Layout>
)

export const query = graphql`{
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