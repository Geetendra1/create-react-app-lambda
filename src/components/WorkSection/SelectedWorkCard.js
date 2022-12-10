import React from 'react'
import Fade from 'react-reveal/Fade';

import './WorkSection.css'

function SelectedWorkCard({ theme, key,id, slug,projectName, projectDesc, projectShortDesc, image }) {
    console.log('theme',theme);
    
    return (
        <Fade >
            <a className="singleBlog" key={id} rel="noreferrer" style={{textDecoration:"none"}} href={`/case-study/${slug}`}>
                <div className="singleBlog--image" style={{backgroundColor: theme.secondary}}>
                    <img src={image} alt={projectName} style={{width:"100%", height:"100%"}}/>
                </div>
                <div className="singleBlog--body">
                    <h3 style={{color: theme.tertiary}}>{projectName}</h3>
                    <h6 style={{color: theme.tertiary}}>{projectDesc}</h6>
                    <p style={{color: theme.tertiary}}>{projectShortDesc}</p>  
                </div>
            </a>
        </Fade>
    )
}

export default SelectedWorkCard
