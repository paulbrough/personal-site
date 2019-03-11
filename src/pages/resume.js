import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Resume from "../components/resume"




export default ({ data }) => {
    console.log(data)

    // Get the single item in the array
    const entry = data.craft.entries[0];
    return (
        <Layout>
            <Resume entry={entry}></Resume>
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