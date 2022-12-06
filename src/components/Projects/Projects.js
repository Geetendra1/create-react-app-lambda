import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { selectedWork } from '../../data/selectedWork'

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import SelectedWorkCard from '../WorkSection/SelectedWorkCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Projects.css'

function Projects() {

    const { theme } = useContext(ThemeContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                // <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                //     <div className="projects--header">
                //         <h2 style={{color: theme.primary}}>Projects</h2>
                //     </div>
                //     <div>
                    <Container>
      <Row>
        {/* <Col>
        as
        </Col> */}
      {selectedWork.slice(0, 6).map(work => (
                                <Col md={4}>
                                    <SelectedWorkCard 
                                    theme={theme}
                                        key={work.id}
                                        id={work.id}
                                        projectName={work.projectName}
                                        projectDesc={work.projectDesc}
                                        projectShortDesc={work.projectShortDesc}
                                        image={work.image}
                                    />
                                    </Col>
                            ))}
      </Row>
    </Container>
                       
                       
                       
               
            )}

        </>
    )
}

export default Projects
