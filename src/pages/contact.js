import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import PageContent from "../components/page-content"
import SEO from "../components/seo"



export default ({ data }) => {
    console.log(data)

    // Get the single item in the array
    return (
        <Layout>
            <SEO title="Contact" />
            <PageHeader>
                <h1>Contact Me</h1>
            </PageHeader>
            <PageContent>

                <form name="Contact" method="POST" data-netlify="true" action="/thank-you">
                    <input type="hidden" name="form-name" value="Contact" />
                    <p className="form-group">
                        <label htmlFor="field_name">Your Name:</label>
                        <input className="form-control" id="field_name" type="text" name="name" />
                    </p>
                    <p className="form-group">
                        <label htmlFor="field_email">Your Email:</label>
                        <input className="form-control" id="field_email" type="email" name="email" />
                    </p>
                    <p className="form-group">
                        <label htmlFor="field_message">Tell Me About Your Project:</label>
                        <textarea className="form-control" id="field_message" name="message" rows="5"></textarea>
                    </p>
                    <p className="form-group">
                        <button className="button button-primary" type="submit">Send</button>
                    </p>
                </form>

            </PageContent>
        </Layout>
    )
}
