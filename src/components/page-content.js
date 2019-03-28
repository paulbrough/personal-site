import React from "react"
import Container from "../components/container"
import pageContentStyles from "./page-content.module.scss"


export default ({ children }) => (
    <div className={pageContentStyles.pageContent}>
        <Container>
            {children}
        </Container>
    </div>

)