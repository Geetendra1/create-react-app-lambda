import React,{ useContext,useLayoutEffect, useState} from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import one from '../../../assets/svg/about/geepack-hero .svg'
import two from '../../../assets/svg/about/pain.svg'
import three from '../../../assets/svg/about/cubes 9 2.svg'
import four from '../../../assets/svg/about/soln.svg'
import five from '../../../assets/svg/about/Rectangle 3.svg'
import six from '../../../assets/svg/about/flow.svg'
import seven from '../../../assets/svg/about/typo.svg'
import eight from '../../../assets/svg/about/colors.svg'
import nine from '../../../assets/svg/about/home.svg'
import ten from '../../../assets/svg/about/tab bar content (1).svg'
import eleven from '../../../assets/svg/about/scan baggage.svg'
import twelve from '../../../assets/svg/about/Group 36173.svg'
import thirteen from '../../../assets/svg/about/status.svg'
import fourteen from '../../../assets/svg/about/ss + wt + ob.svg'
import fifteen from '../../../assets/svg/about/UI 9.svg'
import sixteen from '../../../assets/svg/about/UI 10.svg'

import './Geepack.css'

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

const Geepack = () => {
    const { theme } = useContext(ThemeContext);
    const [width, height] = useWindowSize();


console.log('width: ' + width );
      

    return (
        <>
        <div style={{width:"100%", height:"100%"}} >
            <Image src={one} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
        </div>

    {/* overview section */}
				<Container className='w-100 mt-5'>
					<Row className="g-first-container" >
								<Col lg={3} md={6} sm={12}className="text-lg-start text-md-start text-center" >
									<Row className=''>
											<Col md={12}>
												<h4>Goal</h4>
											</Col>
											<Col md={12} className="text-start">
												<small>To improve the user experience by redefining and analyzing the loopholes of the product. For this, I collaborated with Engineering and deveopment teams.</small>
											</Col>
									</Row>
								</Col>
								<Col lg={3} md={6} sm={12} className="text-lg-start text-md-start text-center">
								<Row className=''>
										<Col md={12}>
											<h4>Duration</h4>
										</Col>
										<Col md={12} className="text-start">
										<ul>
											<li><small>1st version: 8 weeks</small></li>
											<li><small>2nd version: 2 weeks</small></li>
										</ul> 
										</Col>
								</Row>
							</Col>
							<Col lg={3} md={6} sm={12} className="text-lg-start text-md-start text-center">
								<Row className=''>
										<Col md={12}>
											<h4>Role</h4>
										</Col>
										<Col md={12} className="text-start">
										<ul>
											<li><small>Research & UX Design: Competitive analysis, user flow, information architecture, wireframing</small></li>
											<li><small>UI Design: Visuals</small></li>
										</ul> 
										</Col>
								</Row>
							</Col>
							<Col lg={3} md={6} sm={12} className="text-lg-start text-md-start text-center">
								<Row className=''>
										<Col md={12}>
											<h4>Skills</h4>
										</Col>
										<Col md={12} className="text-start">
											<small>Competitive analysis, user flow, information architecture, wireframing, user testing, interaction design, user interface</small>
										</Col>
								</Row>
							</Col>
					</Row>
				</Container>

                {/* rest of the case study */}
				<Container className='mt-5' style={{width: width >= 1000 ?  "60%" : " 90%"}}>
					<Row className="" >
							<Col md={12}>
								<h3>Why did I pick up this project?</h3>
							</Col>
							<Col  md={12}>
							<p>During this COVID-19 pandemic, as soon as the flight started operating, I decided to go back to my home. When I was dropping my bag on the counter for check-in, the luggage tag was not fastened properly, which got me concerned for my luggage. It’s a headache if you lose your property at the airport!</p>
                            <p>After landing, it took more time than usual to bring the bags to the belt. I kept waiting. Minutes later, a few bags were on the belt. As soon as people saw it coming, they rushed to the belt, forgetting about social distancing.</p>
                            <p>After watching all this, I thought it would be a nice idea to design an application that could track the luggage to prevent all the hassle!</p>
							</Col>
					</Row>


                    <Row className="mt-5">
							<Col md={12}>
								<h3>What is GEPACK?</h3>
							</Col>
							<Col  md={12}>
							<p>GEPACK is a baggage tracking app that helps its users track their baggage from the very beginning of their journey until they receive it from the belt. It helps the users stay relaxed and relieved while traveling as they can track their baggage and check the status anytime, along with many other features.</p>
							</Col>
					</Row>

                    <Row className="mt-5">
							<Col md={12}>
								<h3>User’s Pain-Points</h3>
							</Col>
							<Col  md={12}>
							<p>GEPACK is a baggage tracking app that helps its users track their baggage from the very beginning of their journey until they receive it from the belt. It helps the users stay relaxed and relieved while traveling as they can track their baggage and check the status anytime, along with many other features.</p>
							</Col>
                            <Col md={12} className="mt-2">
							<Image src={two} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
                            <Col  md={12} className="mt-5">
							<p>In 2020, 3.5 mishandled baggage reports were filed per 1000 passengers worldwide. In 2020, the total cost of bag mishandling to the aviation industry stood at around 600 million U.S. dollars, down from 2.5 billion U.S. dollars in the previous year.</p>
							</Col>
					</Row>

                    <Row className="mt-5">
							<Col md={12}>
								<h3>Key Insights</h3>
							</Col>
							<Col  md={12}>
							<p>While traveling, people deal with different problems and challenges at the airport. I did research and found some of the problems exist in real and have written down in the form of user cases:</p>
							</Col>
                            <Col md={12} className="mt-2">
							<Image src={three} alt={'Employee Management'} style={{width:"80%", height:"80%"}} fluid />
							</Col>
					</Row>

                    <Row className="mt-5">
							<Col md={12}>
								<h3>Proposed Solutions</h3>
							</Col>
							<Col  md={12}>
							<p>To validate the pain points and user cases, I interviewed few of my friends and relatives asking them about their travel experiences and to know about their pain points. Based on this I concluded that these problems do exist and proposed following solutions:</p>
							</Col>
                            <Col md={12} className="mt-2">
							<Image src={four} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>


                    <Row className="mt-5 disppla">
                            <Col md={7} style={{display:'flex',justifyContent: 'start', alignItems:'center'}}>
                                <Row >
                                    <Col md={12}>
                                        <h3>Target Users</h3>
                                    </Col>
                                    <Col  md={12}>
                                        <p>Travelers of any age, traveling with family or alone, anyone can use the app to track and find his/her luggage at the airport.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={5} className="">
							    <Image src={five} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>

                    <Row className="mt-5">
							<Col md={12}>
								<h3>User Flow</h3>
							</Col>
							<Col  md={12}>
						    	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
							</Col>
                            <Col md={12} className="mt-2 d-flex justify-content-center" >
							<Image src={six} alt={'Employee Management'} style={{width:"70%", height:"100%"}} fluid />
							</Col>
					</Row>


                    <Row className="mt-5">
							<Col md={12}>
								<h3>Typography & Colors</h3>
							</Col>
							<Col  md={12}>
						    	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
							</Col>
                            <Col md={12} className="mt-2" >
							<Image src={seven} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
                            <Col md={12} className="mt-1" >
							<Image src={eight} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>


                    <Row className="mt-5">
							<Col md={12}>
								<h3>Visuals</h3>
							</Col>
							<Col  md={12}>
						    	<p>After the research and wireframing, I moved further into the visual design and created 50+ screens.</p>
							</Col>
                            <Col md={12} className="mt-2 d-flex justify-content-center" >
							<Image src={nine} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>
                 </Container>

                 <Row className='g-second-container pb-5' style={{width:"100%"}}>
                    <Col className='d-flex justify-content-center' md={12}>
                    <Row className="mt-4" style={{width: width >= 1000 ?  "25%" : " 90%"}}>
							<Col md={12}>
								<h3>Tab Bar</h3>
                                <p>After the research and wireframing, I moved further into the visual design and created 50+ screens.</p>
                                <p className='m-0'>1. Scan QR Code</p>
								<p>2. Add a new trip</p>
							</Col>
					</Row>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                    <Row className="mt-4" style={{width: width >= 1000 ?  "50%" : " 100%"}}  >
                    <Image src={ten} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                    </Row>
                    </Col>
                 </Row>

                 <Container className='mt-5' style={{width: width >= 1000 ?  "60%" : " 100%"}}>
                 <Image src={eleven} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                 </Container>

                 <Row className='g-second-container pb-5 mt-5' style={{width:"100%"}}>
                    <Col className='d-flex justify-content-center'>
                    <Row className="mt-4"  style={{width: width >= 1000 ?  "60%" : " 100%"}}>
                    <Image src={twelve} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                    </Row>
                    </Col>
                 </Row>


                 <Container className='mt-5'  style={{width: width >= 1000 ?  "60%" : " 100%"}}>
                 <Image src={thirteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                 </Container>

                 <Row className='pb-5 m-0 p-0' style={{width:"100%"}}>
                    <Image src={fifteen} className="m-0 p-0"  alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                 </Row>
                 <Row className='pb-5 m-0 p-0' style={{width:"100%"}}>
                    <Image src={sixteen} className="m-0 p-0" alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                 </Row>
        </>
    )
}

export default Geepack