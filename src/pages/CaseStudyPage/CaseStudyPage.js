import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import EmployeeManagement from '../../components/CaseStudies/EmployeeManagement/EmployeeManagement';
import Geepack from '../../components/CaseStudies/Geepack/Geepack';
import ModernDataStack from '../../components/CaseStudies/ModernDataStack/ModernDataStack';
import CaseStudyNav from '../../components/Navbar/CaseStudyNav'
import {SimilarCaseStudies}  from '../../components';
import { selectedWork } from '../../data/selectedWork';
import { ThemeContext } from '../../contexts/ThemeContext';
import { 
  darkTheme, lightTheme
} from '../../theme/theme'

const CaseStudyPage = ({history}) => {
  const { theme} = useContext(ThemeContext);
  const [themes, setThemes] = useState(theme)
    const lastSegment = history.location.pathname.split("/").pop()
    console.log('lastSegment',lastSegment);
    const themechnage = localStorage.getItem('theme')
    // console.log('CaseStudyPage',theme);

    useEffect(() => {
     const themess =  localStorage.getItem('theme')
     console.log('inside useEffect', themess);
     if(themess === 'dark') {
      setThemes(darkTheme)
  } else {
      setThemes(lightTheme)
  }
    }, [themechnage])
    
    
  const data = selectedWork.filter(item  => item.slug !== lastSegment)
  console.log('CaseStudyPage',themes);
  return (
    <>
    <CaseStudyNav />
    {lastSegment === 'incident-management-system' && (
      <EmployeeManagement themes={themes} />
    )}
    {lastSegment === 'geepack' && (
      <Geepack />
    )}
    {lastSegment === 'moderndatastack' && (
      <ModernDataStack />
    )}
    <SimilarCaseStudies  data={data}/>
    </>
  )
}

export default withRouter(CaseStudyPage)