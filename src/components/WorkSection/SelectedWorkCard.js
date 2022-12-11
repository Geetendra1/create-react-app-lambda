import React from 'react'
import Fade from 'react-reveal/Fade';

import './WorkSection.css'

function SelectedWorkCard({ theme, key,id, slug,projectName, projectDesc, projectShortDesc, image }) {
    
    return (
        <Fade>
            <a key={id} rel="noreferrer" style={{textDecoration:"none"}} href={`/case-study/${slug}`}>
                <div className="singleBlog--image" style={{backgroundColor: theme.secondary}}>
                    <img src={image} alt={projectName} style={{width:"100%", height:"100%"}}/>
                </div>
                <div className="singleBlog--body">
                    <h3 className='mt-3 selected-work-heading' style={{color: theme.tertiary}}>{projectName}</h3>
                    <p style={{color: theme.tertiary}} className="selected-work-subheading">{projectDesc}</p>
                    <p style={{color: theme.tertiary}} className="selected-work-description">{projectShortDesc}</p>  
                </div>
            </a>
        </Fade>
    )
}

export default SelectedWorkCard
