import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import portfolioItemStyles from "./portfolio-item.module.scss"
import PageHeader from "../components/page-header"
import PageContent from "../components/page-content"
import SEO from "../components/seo"


function ProjectLink(props) {
  console.log(props.link);
  if (props.link) {
    return <p>Visit Site: <a href={props.link} >{props.link}</a></p>;
  } else {
    return false;
  }

}

export default ({ data }) => {
  console.log(data);
  const entry = data.craft.entries[0];
  let screenshot = 'https://res.cloudinary.com/pkb/image/fetch/w_800,f_auto/' + entry.screenshot[0].url;
  let ogImage = 'https://res.cloudinary.com/pkb/image/fetch/w_600,h_400/' + entry.screenshot[0].url;
  return (
    <Layout>
      <SEO title={entry.title}  image={ogImage} description={entry.description} />
      <PageHeader>

        <div className={portfolioItemStyles.header}>
          <div className={portfolioItemStyles.intro}>
            <h1>{entry.title}</h1>
            <div className="entry-meta">
              <p>Built for <strong>{entry.client}</strong></p>
            </div>
            <div className="bodyCopy lead">
              <p>{entry.description}</p>
            </div>


          </div>

          <div className={portfolioItemStyles.banner} style={{ backgroundImage: `url( ${screenshot} )` }}> </div>
        </div>

      </PageHeader>
      <PageContent>
        <div className={portfolioItemStyles.gallery}>
          {console.log('gallery')}
        {console.log(entry.gallery)}
          {entry.gallery.map((galleryItem, index) => (
            <div key={index} className={portfolioItemStyles.galleryItem}>
              <figure>
                <img src={'https://res.cloudinary.com/pkb/image/fetch/w_800,h_600,f_auto/' + galleryItem.image[0].url} alt={galleryItem.image[0].title} />
                <figcaption>{galleryItem.caption}</figcaption>
              </figure>
            </div>
          ))}
        </div>


        {entry.sections.map((section, index) => (
          <section key={index} className={portfolioItemStyles.portfolioSection + " " + section.alignImage}>
            <div className={portfolioItemStyles.portfolioSectionText}>
              <h2>{section.heading}</h2>
              <div className="bodyCopy" dangerouslySetInnerHTML={{ __html: section.description.content }}></div>
            </div>
            <div className={portfolioItemStyles.portfolioSectionImage}>
              <img src={'https://res.cloudinary.com/pkb/image/fetch/w_800,f_auto/' + section.screenshot[0].url} alt={section.screenshot[0].title} className={portfolioItemStyles.portfolioItemScreenshot} />
            </div>

          </section>
        ))}
        <ProjectLink link={entry.linkUrl}></ProjectLink>
      </PageContent>


    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  craft {
    entries(section: [portfolio], slug: $slug) {
      ... on Craft_Portfolio {
        id
        title
        client
        dateCreated
        linkUrl
        screenshot {
          id
          url
          screenshotBanner: url(transform: screenshotBanner)
          screenshotMedium: url(transform: screenshotMedium)
        }
        description
        gallery {
          ... on Craft_GalleryImage {
            caption
            image {
              id
              url
              title
              screenshotSmall: url(transform: screenshotSmall)
              screenshotMedium: url(transform: screenshotMedium)
            }
          }
        }
        sections {
          __typename
          ... on Craft_SectionsFeature {
            heading
            description {
              totalPages
              content
            }
            alignImage
            screenshot {
              id
              url
              title
              screenshotSmall: url(transform: screenshotSmall)
              screenshotMedium: url(transform: screenshotMedium)
            }
          }
        }
      }
    }
  }
}
`