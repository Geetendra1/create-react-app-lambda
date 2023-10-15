

import React, { useContext, useState,useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
// import Fade from 'react-reveal/Fade';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import { withRouter } from 'react-router-dom';
import Pdf from '../../swati-resume.pdf';

import { 
    darkTheme, lightTheme
} from '../../theme/theme'
import './CaseStudyNav.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
function CaseStudyNav({history}) {
    const { theme, setHandleDrawer } = useContext(ThemeContext);
    const [themes, setThemes] = useState(theme)
    const lastSegment = history.location.pathname.split("/").pop()
    console.log('lastSegment',lastSegment);
    const [open, setOpen] = useState(false);
    const themeChange = localStorage.getItem('theme')


    useEffect(() => {
        const themess =  localStorage.getItem('theme')
        console.log('inside useEffect', themess);
        if(themess === 'dark') {
         setThemes(darkTheme)
     } else {
         setThemes(lightTheme)
     }
       }, [themeChange])
    
    
    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();

    };


    // const handleTheme = () => {
    //     if(theme.type === 'dark') {
    //         localStorage.setItem('theme', 'light')
    //         setTheme(lightTheme)
    //     } else {
    //         setTheme(darkTheme)
    //         localStorage.setItem('theme', 'dark')
    //     }
    // }

    const useStyles = makeStyles((t) => ({
        navMenuOpen : {
            display:"flex",
            [t.breakpoints.down('md')]: {
                display:'none'
             },
        },
        navMenuOpenItems : {
            color: themes.tertiary,
            fontWeight: 'normal',
            fontSize: '16px',
            opacity: '1',
            marginLeft:'100px',
            '&:hover': {
                color: themes.tertiary,
                opacity: '0.7',
            },
        },
        navMenu: {
            fontSize: '2.5rem',
            color: themes.tertiary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            '&:hover': {
                color: themes.primary,
            },
            [t.breakpoints.up('lg')]: {
              display:'none'
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '2rem',
            },
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: themes.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            [t.breakpoints.down('sm')]: {
                width: '12em',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: themes.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: themes.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
            },
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: themes.secondary,
            color: themes.primary,
            width: '85%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: themes.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: themes.primary,
                color: themes.secondary,
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                padding: '0 25px',
                height: '55px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '50%',
            fontSize: '1.3rem',
            fontWeight: 600,
            [t.breakpoints.down('sm')]: {
                fontSize: '1.125rem',
            },
        },
        drawerIcon: {
            fontSize: '1.6rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.385rem',
            },
        },
    }));

    const classes = useStyles();

    const shortname = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    return (
        <div className='navbar-c' style={{backgroundColor:themes.secondary}}>
            <div className='navbar--container-c m-5' style={{backgroundColor:themes.secondary}}>
            <a href="/" style={{textDecoration:'none'}}>
              <p className='navbar--container-p ' style={{ color: themes.type === 'light' ? themes.tertiary : themes.tertiary  , fontFamily:'Inter' }}>
                    {shortname(headerData.name)}
                </p>
            </a>
                <IoMenuSharp
                    className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
                
                <div className={`${classes.navMenuOpen}`}>
               
                <div className={classes.navMenuOpenItems}>
                {lastSegment === '' ? (
                            <a href='/' style={{textDecoration:'none'}}>  <p style={{fontFamily:'Inter' , fontWeight:'500',color:'black'}}>Home</p></a>
                        ) : (
                            <a href='/' style={{textDecoration:'none'}}> <p style={{fontFamily:'Inter' , fontWeight:'300',color:'black'}}>Home</p></a>
                        ) }
                </div>
                        <div className={classes.navMenuOpenItems} >
                        {lastSegment === 'resume' ? (
                                         <a href={Pdf} without rel="noopener noreferrer" target="_blank" style={{textDecoration:'none'}}>
                                         <p style={{fontFamily:'Inter' , fontWeight:'500',color:'black'}}>Resume</p> </a>
                        ) : (
                            <a href={Pdf} without rel="noopener noreferrer" target="_blank" style={{textDecoration:'none'}}>
                            <p style={{fontFamily:'Inter' , fontWeight:'300',color:'black'}}>Resume</p></a>
                        ) }
                        </div>
                       
                    <div className={classes.navMenuOpenItems}>
                        {lastSegment === 'about' ? (
                          <a href='/about' style={{textDecoration:'none'}} >  <p style={{fontFamily:'Inter' , fontWeight:'500' , color:'black'}}> About Me</p></a>
                        ) : (
                            <a href='/about' style={{textDecoration:'none'}} > <p style={{fontFamily:'Inter' , fontWeight:'300' , color:'black'}}>About Me</p></a>
                        ) }
                        </div>

                    {/* <img onClick={handleTheme} src={themes.themeLogo} alt="s" /> */}
                </div>
                
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container-c'>
                        <div left>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <IoHomeSharp
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Home
                                    </span>
                                </div>
                            </NavLink>
                        </div>

                        <div left>
                            <NavLink
                                to='/#about'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaUser className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        About
                                    </span>
                                </div>
                            </NavLink>
                        </div>

                        <div left>
                            <NavLink
                                to='/#resume'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <HiDocumentText
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Resume
                                    </span>
                                </div>
                            </NavLink>
                        </div>

                        <div left>
                            <NavLink
                                to='/#services'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <BsFillGearFill
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Services
                                    </span>
                                </div>
                            </NavLink>
                        </div>

                        <div left>
                            <NavLink
                                to='/#blog'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaFolderOpen
                                        className={classes.drawerIcon}      
                                    />
                                    <span className={classes.drawerLinks}>
                                        Blog
                                    </span>
                                </div>
                            </NavLink>
                        </div>

                        <div left>
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <MdPhone className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        Contact
                                    </span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default withRouter(CaseStudyNav);
