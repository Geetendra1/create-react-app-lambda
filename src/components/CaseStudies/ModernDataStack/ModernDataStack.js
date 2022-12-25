import React, {useLayoutEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import one from '../../../assets/svg/about/mdshero.svg'
import two from '../../../assets/svg/about/mock up.svg'
import three from '../../../assets/svg/about/illust.svg'
import four from '../../../assets/svg/about/MDS - Landing page 1.svg'
import five   from '../../../assets/svg/about/Landing page influencers banner 1.svg'
import six from '../../../assets/svg/about/process.svg'
import seven from '../../../assets/svg/about/uc 1.svg'
import eight from '../../../assets/svg/about/uc 2.svg'
import nine from '../../../assets/svg/about/uc 3.svg'
import ten from '../../../assets/svg/about/uc 4.svg'
import eleven from '../../../assets/svg/about/user flow.svg'
import twelve from '../../../assets/svg/about/Group 36177.svg'
import './ModernDataStack.css'

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

const ModernDataStack = () => {
    const [width] = useWindowSize();

    return (
        <>
        <div style={{width:"100%", height:"100%"}} >
            <Image src={one} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
        </div>
            {/* overview section */}
				<div className='mx-auto mt-5' style={{ width:"87%"}}>
					<Row className="mds-first-container" >
								<Col lg={3} md={6} sm={12}className="text-lg-start text-md-start text-center" >
									<Row className=''>
											<Col md={12}>
												<h3 className="heading4">Goal</h3>
											</Col>
											<Col md={12} className="text-start para2">
												<small>To improve the user experience by redefining and analyzing the loopholes of the product. For this, I collaborated with Engineering and deveopment teams.</small>
											</Col>
									</Row>
								</Col>
								<Col lg={3} md={6} sm={12} className="text-lg-start text-md-start text-center">
								<Row className=''>
										<Col md={12}>
											<h3 className="heading4">Duration</h3>
										</Col>
										<Col md={12} className="text-start">
										<ul className='para2'>
											<li><small>1st version: 8 weeks</small></li>
											<li><small>2nd version: 2 weeks</small></li>
										</ul> 
										</Col>
								</Row>
							</Col>
							<Col lg={3} md={6} sm={12} className="text-lg-start text-md-start text-center">
								<Row className=''>
										<Col md={12}>
											<h3 className="heading4">Role</h3>
										</Col>
										<Col md={12} className="text-start">
										<ul className='para2'>
											<li><small>Research & UX Design: Competitive analysis, user flow, information architecture, wireframing</small></li>
											<li><small>UI Design: Visuals</small></li>
										</ul> 
										</Col>
								</Row>
							</Col>
							<Col lg={3} md={6} sm={12} className="text-lg-start text-md-start text-center">
								<Row className=''>
										<Col md={12}>
											<h3 className="heading4">Skills</h3>
										</Col>
										<Col md={12} className="text-start para2">
											<small>Competitive analysis, user flow, information architecture, wireframing, user testing, interaction design, user interface</small>
										</Col>
								</Row>
							</Col>
					</Row>
				</div>
                <Container className='mt-5' style={{ width:"70%"}}>
					<Row>
							<Col md={6}>
                                <Row>
                                    <Col>
                                    <h3>Project brief</h3>
                                    <p>MDS is a platform having everything related to data stack be it companies, tools, article & video resources, and influencers at one place, It showcases how some of the most amazing companies in the world are organising their data stacks, what tools they are using and why.</p>
                                   
                                    <h3 className='mt-5'>Problem Statement</h3>
                                    <p>People not finding authentic information related to the modern data stack.   </p>
                                    </Col>  
                                </Row>
							</Col>
							<Col md={6} >
                             <Image src={two} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>
                </Container>

                <Container className='mt-5' style={{ width:"70%"}}>
					<Row>
							<Col md={6} className='p-5'>
                                <Row>
                                    <Col >
                                    <h3 className='mt-4'>Motivation behind building MDS</h3>
                                    <Image className='mt-4' src={three} alt={'Employee Management'} style={{width:"100%", height:""}} fluid />
                                    <p className='mt-3'>We were having a discussion with our customers when we came up with the idea of having detailed information about data stacks in one place. This motivated us to take up this project. We wanted to help people with data stack resources, so that they could know which stacks are trending in the top companies, learn best practices about data stacks, and choose stacks for their own use cases!</p>
                                    </Col> 
                                </Row>
                                <Row className='mt-5'>
                                    <Col>
                                    <h3>The Landing Page</h3>
                                    <p className='mt-3'>We wanted to keep our landing page DYNAMIC. So, we defined the top rated content in every section to keep it zestful for our new as well as existing users.
                                    Along with that, we keep updating the upcoming events on the home page.</p>
                                    <p className='mt-5' >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <Image className='mt-5' src={five} alt={'Employee Management'} style={{width:"100%"}} fluid />
                                    </Col> 
                                </Row>
							</Col>
							<Col md={6} className='p-3'>
                             <Image src={four} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>


                </Container>
                <Container className='mt-5' style={{ width:"70%"}}>
					<Row >
							<Col md={12} className='mt-5'>
                                <Row>
                                    <Col>
                                    <h3>My Process</h3>
                                    <p className='mt-3'>MDS is a platform having everything related to data stack be it companies, tools, article & video resources, and influencers at one place, It showcases how some of the most amazing companies in the world are organising their data stacks, what tools they are using and why.</p>
                                    </Col>  
                                </Row>
							</Col>
							<Col md={12} className='mt-4'>
                             <Image src={six} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>

                    <Row className='mt-5'>
							<Col md={12} className='mt-5'>
                                <Row>
                                    <Col>
                                    <h3>Use Cases</h3>
                                    <p className='mt-3'>For designing a brand new platform, I explored all the possible use cases. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </Col>  
                                </Row>
							</Col>
					</Row>
                </Container>
                <div className='mt-5 d-flex justify-content-end' style={{width:"100%", height:"100%"}}>
                    <Row className='w-100  d-flex justify-content-end'>
                        <Col md={3} className="my-auto">
                        <h3>Case 1</h3>
                        <p>There is no option to get <strong>detailed information at one place</strong> about data stacks</p>
                        <p>We organized details about data stacks, their categories, and what all stacks organisations use, etc. This will help the people who want to learn about data stacks in many ways.</p>
                        </Col>
                        
                        <Col md={6}>
                        <Image src={seven} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                        </Col>
                    </Row>
				</div>
                <div className='mt-5 d-flex justify-content-start' style={{width:"100%", height:"100%"}}>
                    <Row className='w-100  d-flex justify-content-start'>
                    <Col md={6}>
                        <Image src={eight} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                        </Col>
                        <Col md={3} className="my-auto">
                        <h3>Case 2</h3>
                        <p>It would be nice if we had a reliable source where we could analyze and <strong>compare various data stacks</strong>compare various data stacks, all in one place.</p>
                        <p>In every company details page, users will be able to compare similar companies side by side so that they can see the ins and outs of each company and their data stacks.</p>
                        </Col>
                    </Row>
				</div>
                <div className='mt-5 d-flex justify-content-end' style={{width:"100%", height:"100%"}}>
                    <Row className='w-100  d-flex justify-content-end'>
                        <Col md={3} className="my-auto">
                        <h3>Case 3</h3>
                        <p>If the platform allows, we would love to <strong>share the data stack information</strong> that we use in our organization!</p>
                        <p>Users can create data stacks and publish them on the MDS platform, which would help them promote and let their followers know what they are up to with their data stacks. And we’ll let the best stack vote out in a democratized manner.</p>
                        </Col>
                        
                        <Col md={6}>
                        <Image src={nine} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                        </Col>
                    </Row>
				</div>
                <div className='mt-5 d-flex justify-content-start' style={{width:"100%", height:"100%"}}>
                    <Row className='w-100  d-flex justify-content-start'>
                    <Col md={6}>
                        <Image src={ten} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                        </Col>
                        <Col md={3} className="my-auto">
                        <h3>Case 4</h3>
                        <p>I would love to connect with the <strong>key influential people</strong>  who can help our organization choose the right data stacks.</p>
                        <p>In every company details page, users will be able to compare similar companies side by side so that they can see the ins and outs of each company and their data stacks.</p>
                        </Col>
                    </Row>
				</div>
                <Container className='mt-5' style={{ width:"70%"}}>
					<Row >
							<Col md={12} className='mt-5'>
                                <Row>
                                    <Col>
                                    <h3>User Flow</h3>
                                    <p className='mt-3'>After a feasibility study, I brainstormed various flow ideas and ended up with the one below!</p>
                                    </Col>  
                                </Row>
							</Col>
							<Col md={12} className='mt-4'>
                             <Image src={eleven} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>
                </Container>
                <Container className='mt-5' style={{ width:"70%"}}>
					<Row >
							<Col md={12} className='mt-5'>
                                <Row>
                                    <Col>
                                    <h3>User Flow</h3>
                                    <p className='mt-3'>After a feasibility study, I brainstormed various flow ideas and ended up with the one below!</p>
                                    </Col>  
                                    <Col md={12} className='mt-4'>
                             <Image src={twelve} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
                                </Row>
							</Col>
					</Row>
                </Container>
             
                
                
        </>
  )
}

export default ModernDataStack