import React, { useContext } from 'react'
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


function Footer() {

    // const shortname = (name) => {
    //     if(name.length > 10) {
    //         return name.split(" ")[0]
    //     } else {
    //         return name
    //     }
    // }

    const { theme }  = useContext(ThemeContext)

    const textColor  = theme.type === 'light' ? theme.secondary : theme.tertiary
    
    return (
        <div className="footer" style={{backgroundColor: theme.primary}}>
            <p style={{color: textColor}}>
                  💁🏻‍♀️ Get in touch ✨
            </p>
            <div> <small style={{color: textColor}} className="footer-small-text">Follow me on : </small>
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
            <div className='mt-3' style={{color: textColor, display:'flex'}}> <small  className="footer-small-text">Reach out to me : </small> <p style={{marginLeft:'10px'}} className="section-p" >swati.pal2804@gmail.com</p></div>
            <div className='mt-3' style={{color: textColor, display:'flex'}}> <small  className="footer-small-text">ADPList Mentorship : </small> <p style={{marginLeft:'10px'}} className="section-p">Book a session with me on <u>ADPList</u></p></div>

        </div>
    )
}

export default Footer

