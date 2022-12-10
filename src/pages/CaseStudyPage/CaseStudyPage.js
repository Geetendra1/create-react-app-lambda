import React from 'react';
import { withRouter } from 'react-router-dom';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import EmployeeManagement from '../../components/CaseStudies/EmployeeManagement/EmployeeManagement';
import Geepack from '../../components/CaseStudies/Geepack/Geepack';
import CaseStudyNav from '../../components/Navbar/CaseStudyNav'
const CaseStudyPage = ({history}) => {
    const lastSegment = history.location.pathname.split("/").pop()
    console.log('lastSegment',lastSegment);
    // const { theme } = useContext(ThemeContext);

  return (
    <>
    <CaseStudyNav/>
    {lastSegment === 'employee-management' && (
      <EmployeeManagement/>
    )}
    {lastSegment === 'geepack' && (
      <Geepack/>
    )}

    </>
  )
}

export default withRouter(CaseStudyPage)