import React, { useContext, useState, useEffect } from 'react';
// import { Button } from '@material-ui/core';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import { 
    darkTheme, lightTheme
  } from '../../theme/theme'

function Landing() {
    const { theme, drawerOpen, } = useContext(ThemeContext);
    const [themes, setThemes] = useState(theme)

    useEffect(() => {
        const themess =  localStorage.getItem('theme')
        if(themess === 'dark') {
         setThemes(darkTheme)
     } else {
         setThemes(lightTheme)
     }
       }, [localStorage.getItem('theme')])


    return (
        <>
        <Navbar/>
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: themes.primary }}
                >
                    
                    <div className='lcl--content'>
                    <Row className='w-100'>
                        <Col md={12} className="d-flex justify-content-center">
                            <Row>
                                <Col className='col-auto disable-on-sm '>
                                <small style={{ color: themes.type === 'light' ? themes.secondary : themes.tertiary  }} >find me on :</small>
                                </Col>
                                <Col className='p-0'>
                            {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: themes.type === 'light' ? themes.secondary : themes.tertiary }}
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
                                    className='landing--social'
                                    style={{ color: themes.type === 'light' ? themes.secondary : themes.tertiary  }}
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
                                    className='landing--social'
                                    style={{ color: themes.type === 'light' ? themes.secondary : themes.tertiary  }}
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
                                    className='landing--social'
                                    style={{ color: themes.type === 'light' ? themes.secondary : themes.tertiary  }}
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
                                    className='landing--social'
                                    style={{ color: themes.type === 'light' ? themes.secondary : themes.tertiary  }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} className="d-flex justify-content-center">
                        <Row>
                                <Col className='col-auto disable-on-sm'>
                                <small  style={{ color: themes.type === 'light' ? themes.secondary : themes.tertiary  }}>Reach out to me :</small>
                                </Col>
                                <Col className='p-0'>
                                    <small style={{ color: themes.type === 'light' ? themes.secondary : themes.tertiary  }} className="left-section-strong">swati.pal2804@gmail.com</small>
                                </Col>
                                </Row>
                        </Col>
                    </Row>
                        
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: themes.tertiary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: themes.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: themes.tertiary }}
                    >
                        <p className='right-section-p'>Hi 👋</p>
                        <h3><span className='right-section-p'>I'm</span> {headerData.name}</h3>
                        {/* <span style={{display:'flex'}}><span className=''></span><h3>{headerData.name}</h3></span> */}
                        <p className='right-section-p'>A designer who’s passionate about learning design techniques to solve problems and to improve user experiences.</p>
                        <p className='right-section-p'>Currently pursuing MS in Human-Computer Interaction @<strong> Indiana University - Purdue University Indianapolis, United States.</strong> </p>
                        <p className='right-section-p'>I previously have designed products at Cliff.ai (GTM Hub) & Nickelfox Technologies.</p>
                        {/* <p>{headerData.desciption}</p> */}

                        {/* <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Download CV
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default Landing;