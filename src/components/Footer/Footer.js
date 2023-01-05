import React, { useContext,useEffect,useState } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'

import linkedinLogo from '../../assets/png/linkedin-logo.png'
import mediumLogo from '../../assets/png/medium 1.png'
import dribbleLogo from '../../assets/png/Dribbble logo filled 1.png'
import behanceLogo from '../../assets/png/behance-logo.png'
import twitterLogo from '../../assets/png/twitter-logo.png'


import { socialsData } from '../../data/socialsData';
import { 
    darkTheme, lightTheme
  } from '../../theme/theme'

function Footer() {

    // const shortname = (name) => {
    //     if(name.length > 10) {
    //         return name.split(" ")[0]
    //     } else {
    //         return name
    //     }
    // }

    const { theme }  = useContext(ThemeContext)
    const [themes, setThemes] = useState(theme)

    const textColor  = themes.type === 'light' ? themes.secondary : themes.tertiary
    const themeChange = localStorage.getItem('theme')

    useEffect(() => {
        const themess =  localStorage.getItem('theme')
        if(themess === 'dark') {
         setThemes(darkTheme)
     } else {
         setThemes(lightTheme)
     }
       }, [themeChange])
    return (
        <div className="footer" style={{backgroundColor: themes.primary}}>
            <p style={{color: textColor}} className="heading2 mt-1 mb-4">
                  💁🏻‍♀️ Get in touch ✨
            </p>

            <div className='mt-3' style={{color: textColor, display:'flex'}}> <small  className="para2 adjust-para2-font-size disable-on-sm">Reach out to me : </small> <p style={{marginLeft:'10px'}} className="para1 adjust-para2-font-size" >swati.pal2804@gmail.com</p></div>
            <div className='mt-2' style={{color: textColor, display:'flex'}}> <small  className="para2 adjust-para2-font-size disable-on-sm">ADPList Mentorship : </small> <p style={{marginLeft:'10px'}} className="para1 adjust-para2-font-size">Book a session with me on <a href="https://adplist.org/mentors/swati-pal" style={{textDecoration:'none', color: textColor, }} target="_blank"                                 rel='noreferrer'
><u>ADPList</u></a></p></div>
            <div className='mt-2'> <small style={{color: textColor}} className="para2 adjust-para2-font-size disable-on-sm">Find me on : </small>
            {socialsData.medium && (
                            <a
                                href={socialsData.medium}
                                target='_blank'
                                rel='noreferrer'
                            >
                                 <img className='footer--social'  alt="logo" src={mediumLogo} style={{ width:'30px' }}/>

                            </a>
                        )}
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                                className='m-0'
                            >
                                <img className='footer--social'  alt="logo" src={linkedinLogo} style={{ width:'30px' }}/>
                            </a>
                        )}
                        
                        {socialsData.behance && (
                            <a
                                href={socialsData.behance}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img className='footer--social'  alt="logo" src={behanceLogo} style={{ width:'30px' }}/>

                            </a>
                        )}

                        {socialsData.dribble && (
                            <a
                                href={socialsData.dribble}
                                target='_blank'
                                rel='noreferrer'
                            >
                            <img className='footer--social'  alt="logo" src={dribbleLogo} style={{ width:'30px' }}/>

                            </a>
                        )}
                      
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                
                            <img className='footer--social'  alt="logo" src={twitterLogo} style={{ width:'30px' }}/>
                            

                            </a>
                        )}
            </div>
        </div>
    )
}

export default Footer

