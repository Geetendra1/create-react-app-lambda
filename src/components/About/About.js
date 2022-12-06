import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selectedWork } from '../../data/selectedWork'

import SelectedWorkCard from '../WorkSection/SelectedWorkCard';

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
                    <div className="about--header">
                        <h1 style={{color: theme.primary}}>selected work</h1>
                    </div>           
                <div className="about-body">
                <div className="about-description">
                    {selectedWork.map(work => (
                        <SelectedWorkCard 
                        theme={theme}
                            key={work.id}
                            id={work.id}
                            projectName={work.projectName}
                            projectDesc={work.projectDesc}
                            projectShortDesc={work.projectShortDesc}
                            image={work.image}
                        />
                    ))}
                </div>
            </div>
               
        </div>

    )
}

export default About