import React, { useContext } from 'react';
// import { Button } from '@material-ui/core';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    console.log('theme',theme);

    // const useStyles = makeStyles((t) => ({
    //     resumeBtn: {
    //         color: theme.primary,
    //         borderRadius: '30px',
    //         textTransform: 'inherit',
    //         textDecoration: 'none',
    //         width: '150px',
    //         fontSize: '1rem',
    //         fontWeight: '500',
    //         height: '50px',
    //         fontFamily: 'var(--primaryFont)',
    //         border: `3px solid ${theme.primary}`,
    //         transition: '100ms ease-out',
    //         '&:hover': {
    //             backgroundColor: theme.tertiary,
    //             color: theme.secondary,
    //             border: `3px solid ${theme.tertiary}`,
    //         },
    //         [t.breakpoints.down('sm')]: {
    //             width: '180px',
    //         },
    //     },
    //     contactBtn: {
    //         backgroundColor: theme.primary,
    //         color: theme.secondary,
    //         borderRadius: '30px',
    //         textTransform: 'inherit',
    //         textDecoration: 'none',
    //         width: '150px',
    //         height: '50px',
    //         fontSize: '1rem',
    //         fontWeight: '500',
    //         fontFamily: 'var(--primaryFont)',
    //         border: `3px solid ${theme.primary}`,
    //         transition: '100ms ease-out',
    //         '&:hover': {
    //             backgroundColor: theme.secondary,
    //             color: theme.tertiary,
    //             border: `3px solid ${theme.tertiary}`,
    //         },
    //         [t.breakpoints.down('sm')]: {
    //             display: 'none',
    //         },
    //     },
    // }));

    // const classes = useStyles();

    return (
        <>
        <Navbar/>
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.type === 'light' ? theme.secondary : theme.tertiary }}
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
                                    style={{ color: theme.type === 'light' ? theme.secondary : theme.tertiary  }}
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
                                    style={{ color: theme.type === 'light' ? theme.secondary : theme.tertiary  }}
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
                                    style={{ color: theme.type === 'light' ? theme.secondary : theme.tertiary  }}
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
                                    style={{ color: theme.type === 'light' ? theme.secondary : theme.tertiary  }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.tertiary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <p>Hi 👋</p>
                        <h3>{headerData.title}</h3>
                        {/* <span style={{display:'flex'}}><span className=''></span><h3>{headerData.name}</h3></span> */}
                        <p>A designer who’s passionate about learning design techniques to solve problems and to improve user experiences.</p>
                        <p>Currently pursuing MS in Human-Computer Interaction @ Indiana University - Purdue University Indianapolis, United States.</p>
                        <p>I previously have designed products at Cliff.ai (GTM Hub) & Nickelfox Technologies.</p>
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