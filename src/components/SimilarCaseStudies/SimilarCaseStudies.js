import React,{ useContext,useLayoutEffect, useState} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selectedWork } from '../../data/selectedWork'
import SelectedWorkCard from '../WorkSection/SelectedWorkCard';

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import '../WorkSection/WorkSection.css'


function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

function SimilarCaseStudies(props) {
    const data = props.data
    const { theme } = useContext(ThemeContext);
    const [width] = useWindowSize();
    return (
        <>
                 <div id="projects" style={{backgroundColor: theme.secondary}}>
                     <div className="work--header">
                         <h1 className='work-container-selected-work-header' style={{color: theme.tertiary}} >Selected Work</h1>
                    </div>
                    <Row className='m-0 p-5 pt-3' >
                           {data.slice(0, 3).map(work => (
                            <Col lg={4} md={12} sm={12} className="p-lg-5 pt-lg-0">
                            <SelectedWorkCard  
                            theme={theme}
                            key={work.id}
                            slug={work.slug}
                                        id={work.id}
                                        projectName={work.projectName}
                                        projectDesc={work.projectDesc.slice(0,50)}
                                        projectShortDesc={work.projectShortDesc.slice(0,100)}
                                        image={work.image}/>
                            </Col>
                        ))}
                   </Row>
                   </div>
                   {/* side projects */}
                   


        </>
    )
}

export default SimilarCaseStudies