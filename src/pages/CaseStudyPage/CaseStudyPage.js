import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import EmployeeManagement from '../../components/CaseStudies/EmployeeManagement/EmployeeManagement';
import Geepack from '../../components/CaseStudies/Geepack/Geepack';
import CaseStudyNav from '../../components/Navbar/CaseStudyNav'
import {SimilarCaseStudies}  from '../../components';
import { selectedWork } from '../../data/selectedWork';
import { ThemeContext } from '../../contexts/ThemeContext';
import { 
  darkTheme, lightTheme
} from '../../theme/theme'

const CaseStudyPage = ({history}) => {
  const { theme, setTheme} = useContext(ThemeContext);
  const [themes, setThemes] = useState(theme)
    const lastSegment = history.location.pathname.split("/").pop()
    console.log('lastSegment',lastSegment);
    // console.log('CaseStudyPage',theme);

    useEffect(() => {
     const themess =  localStorage.getItem('theme')
     if(themess === 'dark') {
      setThemes(darkTheme)
  } else {
      setThemes(lightTheme)
  }
    }, [])
    
    
  const data = selectedWork.filter(item  => item.slug !== lastSegment)
  console.log('CaseStudyPage',themes);
  return (
    <>
    {/* <CaseStudyNav /> */}
    {lastSegment === 'employee-management' && (
      <EmployeeManagement themes={themes} />
    )}
    {lastSegment === 'geepack' && (
      <Geepack />
    )}

    <SimilarCaseStudies  data={data}/>
    </>
  )
}

export default withRouter(CaseStudyPage)