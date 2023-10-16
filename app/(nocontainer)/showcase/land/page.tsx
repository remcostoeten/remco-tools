import { experiencesData } from '@/config/data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline';
import 'react-vertical-timeline/style.css';


import React from "react";

export default function page() {
    return (
        <div>
            <VerticalTimeline>
                {experiencesData.map((experience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={experience.date}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={experience.icon}
                    >
                        <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
                        <p>{experience.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};