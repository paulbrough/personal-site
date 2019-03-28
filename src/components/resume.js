import React from "react"

import resumeStyles from "./resume.module.scss"

function PositionDates(props) {
    if (props.dateEnd) {
        return <div className="positionDates">{props.dateStart} - {props.dateEnd}</div>;
    } else {
        return <div className="positionDates">{props.dateStart} - Present</div>;
    }
  }


export default (props) => {
    return (
        <div className={resumeStyles.resume}>
            {props.entry.workHistory.map((item, index) => (
                <div key={index} className="workSection">
                    <h2 className="resumeCompany">{item.company}</h2>
                    <div className="positions">
                        {item.positions.map((position, index) => (
                            <div className="position" key={index}>
                                <header className='positionHeader'>
                                    <h3 className={resumeStyles.resumePosition}>{position.position}</h3>
                                    <PositionDates dateStart={position.startDateFormatted} dateEnd={position.endDateFormatted} ></PositionDates>
                                </header>
                                <ul>
                                    {position.responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility.responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
    
    
                </div>
            ))}
    
            {props.entry.skills.map((skill, index) => (
                <div key={index} className={resumeStyles.skills}>
                    <h2>{skill.heading}</h2>
                    <ul>
                        {skill.skills.map((skill, index) => (
                            <li key={index}>{skill.skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
    
    
    
    
        </div>
    )
}