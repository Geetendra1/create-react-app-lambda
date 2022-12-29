import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import CaseStudyNav from '../../components/Navbar/CaseStudyNav'
import  aboutImage from '../../assets/svg/about/about-image.svg';
import './About.css'
import { 
    
    darkTheme, lightTheme
  } from '../../theme/theme'
  import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import one from '../../assets/png/doodle.png'

import two from '../../assets/png/saloni.png'

import three from '../../assets/png/Rectangle 4559 (1).png'

import four from '../../assets/png/Rectangle 4560 (1).png'

import five from '../../assets/png/Rectangle 4561 (1).png'

import six from '../../assets/png/Rectangle 4561.png'
import seven from '../../assets/png/Rectangle 4559.png'
import eight from '../../assets/png/Rectangle 4560.png'

import nine from '../../assets/png//Rectangle 4561 (2).png'
// import ten from '../../assets/png/Rectangle 4559.png'


const About = () => {
    const { theme} = useContext(ThemeContext);
    const [themes, setThemes] = useState(theme)
    const themechnage = localStorage.getItem('theme')

    useEffect(() => {
        const themess =  localStorage.getItem('theme')
        console.log('inside useEffect', themess);
        if(themess === 'dark') {
         setThemes(darkTheme)
     } else {
         setThemes(lightTheme)
     }
       }, [themechnage])

  return (
    <div style={{backgroundColor:themes.secondary}}>
        <CaseStudyNav />

        <div className='hero-section' style={{width:"100%", height:"560px", backgroundColor:themes.primary}}  >
            <div className='hero-left' > 
            </div>
             <img
                    src={aboutImage}
                    alt=''
                    className='hero--img'
                />
                <Row className='hero-right mt-5' style={{color: 'white'}}>
                    <Col md={12}>
                    <p className='heading6'>The philosphy I follow</p>
                    <h1 className='heading0'>The only way to do great work is to do what you love & love what you do.</h1>
                    </Col>
                </Row>
        </div>
        {/* <div className='about-description mb-5' style={{width:"100%", height:"100%", backgroundColor:themes.secondary}}  > */}
            <Container className='about-description mb-5' style={{ width:"70%", height:"100%", backgroundColor:themes.secondary}}>

            <Row className='d-flex justify-content-center'>
                <Col className='d-flex justify-content-start'>
                    <div style={{color:themes.tertiary}}>
                        <h1 className='heading1' style={{color:themes.tertiary}} >About Me 🚀</h1>
                        <p style={{color:themes.tertiary}} className='para1'>An Engineer  »»  A Banker  »»  & Finally a Designer 👩🏻‍💻</p>
                        <p className='para2'>I graduated as an engineer, worked as a banker, gave everything up to learn product design
                        from scratch and now I’m pursuing master’s in Human-Computer Interaction at Indiana University - Purdue University Indianapolis.</p>
                        <p className='para2'>My interest in technology encouraged me to pursue engineering and then I pursued diploma in banking. At the bank, I was irked by using the unfriendly banking software mainly because I found it hard to navigate. At the same time, I got introduced to UI/UX Design and got a chance to work on it. I started exploring more about this industry and worked on a few concept based side projects and freelance work and thus, I realized that design is
                        the place for me to be in and decided to work on the same to make users’ experiences better by solving the problems they encounter.</p>
                        <p className='para2'>I am super excited to have experience working as a designer in the US. It is a great opportunity for me to learn more about design and the creative industry. I'm looking forward to using the skills I have developed from my studies to create intuitive and effective designs. I'm eager to collaborate with other experienced designers and learn from their experiences and insights. I'm also looking forward to the challenge of adapting to a new culture and working environment. I know this will be an invaluable learning experience and I'm eager to get started!</p>
                    </div>
                </Col>
            </Row>
            </Container>
        {/* </div> */}
        <div className='about-interestes pb-5' style={{ backgroundColor:themes.primary}}  >
          <Container style={{width:"70%", height:"100%"}}>
            <Row className='d-flex justify-content-center'>
                <Col md={12} className='d-flex justify-content-start mb-4    '>
                <div className='mt-5'>
                <h1 className='heading1' style={{color:'white'}} >My interests & hobbies</h1>
                <p className='para2' style={{color:'white'}}>I love to explore new places and capture the beauty of the world around them. I believe and feel that these two activities can provide endless opportunities for adventure, creativity, and self-expression. Additionally, I love doing activities which allow me to express myself, that is, art and doodle.</p>
                </div>
                </Col>
            </Row>
          </Container>
          <Container style={{width:"70%", height:"100%"}}>
            <Row className='d-flex justify-content-center'>
                <Col md={12} className='d-flex justify-content-start mb-5'>
                <div className='w-100 p-1'>
                {/* <p className='para2' style={{color:'white'}}>I love to explore new places and capture the beauty of the world around them. I believe and feel that these two activities can provide endless opportunities for adventure, creativity, and self-expression. Additionally, I love doing activities which allow me to express myself, that is, art and doodle.</p> */}
                <h3 style={{color:'white'}} className='heading3'>I love to click  📸</h3>
                <Row>
                <Col md={4} className='p-2'>
                    <img
                    style={{width:"100%", height:"100%"}}
                    src={seven}
                    alt=''
                />
                    </Col>
                    <Col md={4} className='p-2'>
                    <img
                    style={{width:"100%", height:"100%"}}
                    src={eight}
                    alt=''
                />
                    </Col>
                    <Col md={4} className='p-2'>
                    <img
                    style={{width:"100%", height:"100%"}}
                    src={six}
                    alt=''
                />
                    </Col>
                </Row>



                <h3 style={{color:'white'}} className='heading3 mt-5'>Traveling is the best medicine for me 🏖</h3>
                <Row>
                <Col md={4} className='p-2'>
                    <img
                    style={{width:"100%", height:"100%"}}
                    src={three}
                    alt=''
                />
                
                    </Col>
                    <Col md={4} className='p-2'>
                    <img
                    style={{width:"100%", height:"100%"}}
                    src={four}
                    alt=''
                />
                    </Col>
  
                   
                    <Col md={4} className='p-2'>
                    <img
                    style={{width:"100%", height:"100%"}}
                    src={nine}
                    alt=''
                />
                    </Col>


                </Row>
                
                
                <h3 style={{color:'white'}} className='heading3 mt-5'>I greatly enjoy digital art and doodling 🌈</h3>
                <Row>
                <Col md={4} className='p-2'>
                    <img
                    style={{width:"100%", height:"100%"}}
                    src={two}
                    alt=''
                />
                    </Col>
                    <Col md={4} className='p-2'>
                    <img
                    style={{width:"100%", height:"100%"}}
                    src={five}
                    alt=''
                />
                    </Col>
                    <Col md={4} className='p-2'>
                    <img
                    style={{width:"100%", height:"100%"}}
                    src={one}
                    alt=''
                />
                    </Col>


                
                </Row>
                </div>
                </Col>
            </Row>
            <Row>
                
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default About