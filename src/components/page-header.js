import React from "react"
import Container from "../components/container"
import pageHeaderStyles from "./page-header.module.scss"

export default ({ children }) => (
    <div className={pageHeaderStyles.pageHeader}>
        <Container>
            <div className={pageHeaderStyles.content}>
                {children}
            </div>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,100, 0,95, 100,0 100,100" />
        </svg>
    </div>
)