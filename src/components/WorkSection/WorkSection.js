import React,{ useContext,useLayoutEffect, useState} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selectedWork } from '../../data/selectedWork'
import SelectedWorkCard from '../WorkSection/SelectedWorkCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './WorkSection.css'


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

function WorkSection() {
    const { theme } = useContext(ThemeContext);
    const [width, height] = useWindowSize();

    return (
        <>
                 <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                     <div className="work--header" style={{ width: width >= 1000 ?  "94%" : " 90%"}}>
                         <h2 style={{color: theme.tertiary}}>work</h2>
                    </div>
                        <Row className='' style={{justifyContent:'space-between', width: width >= 1000 ?  "100%" : " 90%" }}>
                        {selectedWork.slice(0, 2).map(work => (
                            <Col lg={6} md={12} sm={12} className="p-lg-5">
                            <SelectedWorkCard  
                            theme={theme}
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
                   
                       
                       
                       
               
        

        </>
    )
}

export default WorkSection