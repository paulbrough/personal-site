import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Resume from "../components/resume"
import PageHeader from "../components/page-header"
import PageContent from "../components/page-content"
import SEO from "../components/seo"


export default ({ data }) => {
  console.log(data)

  // Get the single item in the array
  const entry = data.craft.entries[0];
  return (
    <Layout>
      <SEO title="Resume" />
      <PageHeader>
        <h1>Resume</h1>
      </PageHeader>
      <PageContent>
        <Resume entry={entry}></Resume>
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
{
    craft {
      entries(section: [resume]) {
        ... on Craft_Resume {
          title
          skills {
            ... on Craft_SkillsSkillGroup {
              __typename
              heading
              description {
                totalPages
                content
              }
              skills {
                skill
              }
            }
          }
          workHistory {
            ... on Craft_WorkHistoryCompany {
              __typename
              company
              positions {
                id
                position
                startDate
                startDateFormatted
                endDate
                endDateFormatted
                responsibilities {
                  responsibility
                }
              }
            }
          }
        }
      }
    }
  }
`