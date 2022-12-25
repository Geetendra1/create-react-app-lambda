import React,{ useContext, useState, useEffect} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selectedWork } from '../../data/selectedWork'
import SelectedWorkCard from '../WorkSection/SelectedWorkCard';

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './WorkSection.css'
import { 
  darkTheme, lightTheme
} from '../../theme/theme'

// function useWindowSize() {
//     const [size, setSize] = useState([0, 0]);
//     useLayoutEffect(() => {
//       function updateSize() {
//         setSize([window.innerWidth, window.innerHeight]);
//       }
//       window.addEventListener("resize", updateSize);
//       updateSize();
//       return () => window.removeEventListener("resize", updateSize);
//     }, []);
//     return size;
//   }

function WorkSection() {
    const { theme } = useContext(ThemeContext);
    const [themes, setThemes] = useState(theme)
    const themechange = localStorage.getItem('theme')

    useEffect(() => {
      const themess =  localStorage.getItem('theme')
      if(themess === 'dark') {
       setThemes(darkTheme)
   } else {
       setThemes(lightTheme)
   }
     }, [themechange])
    return (
        <>
                 <div id="projects" className='pt-5' style={{backgroundColor: themes.secondary}}>
                     <div className="work--header">
                         <h1 className='heading1' style={{color: themes.tertiary}} >Selected Work</h1>
                    </div>
                    <Row className='m-0 p-5 pt-3' >
                           {selectedWork.slice(0, 2).map(work => (
                            <Col lg={6} md={12} sm={12} className="p-lg-5 pt-lg-0">
                            <SelectedWorkCard  
                            theme={themes}
                            key={work.id}
                            slug={work.slug}
                                        id={work.id}
                                        projectName={work.projectName}
                                        projectDesc={work.projectDesc}
                                        projectShortDesc={work.projectShortDesc}
                                        image={work.image}/>
                            </Col>
                        ))}
                   </Row>
                   </div>
                   {/* side projects */}
                   <div id="projects" className='pt-5 pb-5' style={{backgroundColor: themes.secondary}}>
                     <div className="side-work--header">
                         <h1 className='heading1' style={{color: themes.tertiary}} >Concept Based Work</h1>
                    </div>
                    <Row className='m-0 p-5 pt-3' >
                           {selectedWork.slice(0, 4).map(work => (
                            <Col lg={6} md={12} sm={12} className="p-lg-5 pt-lg-0">
                            <SelectedWorkCard  
                            theme={themes}
                            key={work.id}
                            slug={work.slug}
                                        id={work.id}
                                        projectName={work.projectName}
                                        projectDesc={work.projectDesc}
                                        projectShortDesc={work.projectShortDesc}
                                        image={work.image}/>
                            </Col>
                        ))}
                   </Row>
                   </div>

                   {/* <SimilarCaseStudies/> */}

        </>
    )
}

export default WorkSection