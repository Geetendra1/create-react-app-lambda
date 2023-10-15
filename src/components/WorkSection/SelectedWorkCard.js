import React from 'react'
// import Fade from 'react-reveal/Fade';

import './WorkSection.css'

function SelectedWorkCard({ theme, key,id, slug,projectName, projectDesc, projectShortDesc, image }) {
    
    return (
        <div>
            <a key={id} rel="noreferrer" style={{textDecoration:"none"}} href={`/case-study/${slug}`}>
                <div className="singleBlog--image mt-2">
                    <img src={image} alt={projectName} style={{width:"100%", height:"100%" , borderRadius:'24px'}}/>
                </div>
                <div className="singleBlog--body mt-4">
                    <h3 className='mt-3 heading3 mb-0 ' style={{color: theme.tertiary}}>{projectName}</h3>
                    <p style={{color: theme.tertiary}} className="para1 mb-2 mt-1">{projectShortDesc}</p>
                    <p style={{color: theme.tertiary}} className="para2 ">{projectDesc}</p>  
                </div>
            </a>
        </div> 
    )
}

export default SelectedWorkCard
