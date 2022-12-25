import React, { useContext,useEffect,useState } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';
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
            <div className='mt-2' style={{color: textColor, display:'flex'}}> <small  className="para2 adjust-para2-font-size disable-on-sm">ADPList Mentorship : </small> <p style={{marginLeft:'10px'}} className="para1 adjust-para2-font-size">Book a session with me on <u>ADPList</u></p></div>
            <div className='mt-2'> <small style={{color: textColor}} className="para2 adjust-para2-font-size disable-on-sm">Find me on : </small>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                                className='m-0'
                            >
                                <FaLinkedin
                                    className='footer--social'
                                    style={{ color: textColor }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='footer--social'
                                    style={{ color: textColor  }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='footer--social'
                                    style={{ color: textColor  }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='footer--social'
                                    style={{ color: textColor  }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaBlogger
                                    className='footer--social'
                                    style={{ color: textColor  }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
            </div>
        </div>
    )
}

export default Footer

