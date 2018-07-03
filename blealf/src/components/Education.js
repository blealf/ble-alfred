import React, { Component } from 'react'

const Education = ({education}) =>
    <div className="details" key={education.id}>
        <div className="right">
            <h3>{Intl.DateTimeFormat('en-US', { month: "short", year: "numeric" })
                .format(Date.parse(education.start_date))} - {" "}
                {Intl.DateTimeFormat('en-US', { month: "short", year: "numeric" })
                    .format(Date.parse(education.end_date))}
            </h3>
        </div>
        <div className="left">
            <h2> {education.institution} </h2>
            <h3>{education.degree} in {education.course}</h3>
            <ul>
                <li class="edu">{education.additional_info}</li>
            </ul>
        </div>
    </div>

export default Education