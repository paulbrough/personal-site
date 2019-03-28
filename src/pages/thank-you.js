import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import PageContent from "../components/page-content"



export default ({ data }) => {
    console.log(data)

    // Get the single item in the array
    return (
        <Layout>
            <PageHeader>
                <h1>Thank You!</h1>
            </PageHeader>
            <PageContent>
                <p>Thanks for reaching out! I will be in touch with you shortly.</p>
            </PageContent>
        </Layout>
    )
}
