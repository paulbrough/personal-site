import React from "react"
import portfolioStyles from "./portfolio.module.scss"
import { makeEntryPath } from "../utils"

export default (props) => {
    return (
        <div>
            <div className={portfolioStyles.portfolio}>
                {props.entries.map((entry, index) => (
                    <div key={index} className={portfolioStyles.portfolioItem}>
                        <a href={makeEntryPath(entry)} >
                            <img src={entry.screenshot[0].screenshotMedium}  alt={entry.screenshot[0].title} className={portfolioStyles.portfolioItemScreenshot} />
                        </a>
                        <h3 className={portfolioStyles.portfolioItemTitle}>{entry.title}</h3>
                        <p className={portfolioStyles.portfolioItemClient}>{entry.client}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

