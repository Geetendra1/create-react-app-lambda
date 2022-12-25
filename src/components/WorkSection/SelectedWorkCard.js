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
                    <h3 className='mt-3 heading3' style={{color: theme.tertiary}}>{projectName}</h3>
                    <p style={{color: theme.tertiary}} className="para1 mt-3">A UX Case Study • Product Design • 2021</p>
                    <p style={{color: theme.tertiary}} className="para2">{projectShortDesc}</p>  
                </div>
            </a>
        </Fade>
    )
}

export default SelectedWorkCard
