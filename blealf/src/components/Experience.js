import React, { Component } from 'react';
import Duties from './Duties'

const Experience  = ({experience}) =>

    <div className="details" key={experience.id}>
        <div className="right">
            <h3>{Intl.DateTimeFormat('en-US', { month: "short", year: "numeric" })
                .format(Date.parse(experience.start_date))} - {" "}
                {Intl.DateTimeFormat('en-US', { month: "short", year: "numeric" })
                    .format(Date.parse(experience.end_date))}
            </h3>
        </div>
        <div className="left">
            <h2> {experience.job_title} </h2>
            <h3>{experience.company}</h3>

            <Duties id={experience.id} />
            
        </div>
    </div>


export default Experience;
   