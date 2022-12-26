import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import one from '../../../assets/png/MDS hero.svg'
import two from '../../../assets/svg/about/mock up.svg'
import three from '../../../assets/svg/about/illust.svg'
import six from '../../../assets/svg/about/process.svg'

import eleven from '../../../assets/svg/about/user flow.svg'
import mdspointer from '../../../assets/svg/about/mds-pointer.svg'
import thirteen from '../../../assets/png/4.png'
import fourteen from '../../../assets/png/MDS - Homepage 2.png'
import fifteen from '../../../assets/png/uc 1.png'

import sixteen from '../../../assets/png/uc 2.png'

import seventeen from '../../../assets/png/uc 3.png'

import eighteen from '../../../assets/png/uc 4.png'

import nineteen from '../../../assets/png/colors.png' 

import categories from '../../../assets/png/categories.png' 
import companies from '../../../assets/png/companies.png' 
import job from '../../../assets/png/categories (3).png' 
import profile from '../../../assets/png/companies (3).png' 
import journal from '../../../assets/png/categories (2).png' 
import podcast from '../../../assets/png/companies (2).png' 
import resources from '../../../assets/png/categories (1).png' 
import community from '../../../assets/png/companies (1).png' 

import twenty from '../../../assets/png/14.png' 
import twentyone from '../../../assets/png/more screens 1.png' 

import './ModernDataStack.css'



const ModernDataStack = () => {

    return (
        <>
        <div style={{width:"100%", height:"100%"}} >
            <Image src={one} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
        </div>
            {/* overview section */}
				<div className='mx-auto mt-5 mb-5' style={{ width:"87%"}}>
					<Row className="mds-first-container" >
								<Col lg={3} md={6} sm={12}className="text-lg-start text-md-start text-center" >
									<Row className=''>
											<Col md={12}>
												<h3 className="heading4">Goal</h3>
											</Col>
											<Col md={12} className="text-start para2">
												<small>To compile useful and reliable information about the modern data stack in one place, making it accessible to anyone who is interested in learning more about it.</small>
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
											<li><small>2nd version: 6 weeks</small></li>
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
											<li><small>Research & UX Design: Design strategy, user flow, information architecture, wireframing, user-testing</small></li>
											<li><small>UI Design: Visuals, user-testing</small></li>
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
											<small>Design strategy, user flow, information architecture, wireframing, user testing, interaction design, user interface, Figma, Illustrator.</small>
										</Col>
								</Row>
							</Col>
					</Row>
				</div>
                <Container className='mt-5' style={{ width:"70%"}}>
                    {/* project brief */}
					<Row className=''>
							<Col md={6} lg={6} sm={12} className="my-auto">
                                <Row>
                                    <Col>
                                    <h3 className='heading4'>Project brief</h3>
                                    <p className='para2'>The Modern Data Stack is a set of technologies that are used to collect, store, process, and analyze data in a modern data infrastructure to gain valuable insights and enable organizations to make informed decisions.</p>
                                    <p className='para2'>This is a platform that has everything related to data stacks, be it the data stacks and tools used by the companies, journals, podcasts, articles, or videos on modern data stacks, and influencers all in one place, It showcases how some of the most amazing companies in the world are organizing their data stacks, what tools they are using, and why. </p>
                                    </Col>  
                                </Row>
							</Col>
							<Col md={6} lg={6} sm={12} className="d-flex justify-content-end" >
                             <img src={two} alt={'Employee Management'} style={{width:"auto", height:"500px"}} />
							</Col>
					</Row>


                    {/* problems */}
                    <Row className='mt-5'>
                    <h3 className='heading4'>Problems</h3>
                    <p className='para2'>Being the only designer in the team, my product manager gave me a statement to work on, that is, “I need a platform which has everything related to the modern data stack”. I started exploring to understand its meaning, purpose, and the problems that exist currently. The main problems I discovered were:</p>
                    <Row className='mt-2 mb-5' >
                        <Col md={12} sm={12} lg={6}>
                            <Row>
                                <Col className='col-auto p-2'><img src={mdspointer} alt="Inadequate Search Engine Optimization" /></Col>
                                <Col><p className='para2'><span className='para1'>Inadequate Search Engine Optimization (SEO) -</span> Many websites are not optimized for search engines, making it difficult to find relevant information.</p></Col>
                            </Row>
                        </Col>

                        <Col md={12} sm={12} lg={6}> 
                            <Row>
                                <Col className='col-auto p-2'><img src={mdspointer} alt="Outdated or incorrect information " /></Col>
                                <Col><p className='para2'><span className='para1'>Outdated or incorrect information -</span> With the rapid pace of change in the field, it can be challenging to ensure that the information you are accessing is up-to-date and accurate.</p></Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6}>
                             <Row>
                                <Col className='col-auto p-2'><img src={mdspointer} alt="Information Overload "/></Col>
                                <Col><p className='para2'><span className='para1'>Information Overload -</span> There is an overwhelming amount of data available, making it difficult to find the most relevant information.</p></Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6}> 
                            <Row>
                                <Col className='col-auto p-2'><img src={mdspointer} alt="Identifying relevant content"/></Col>
                                <Col><p className='para2'><span className='para1'>Identifying relevant content -</span> With so much information available online, it can be hard to identify what content is relevant and useful.</p></Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6}> 
                            <Row>
                                <Col className='col-auto p-2'><img src={mdspointer} alt="Complexity of the Data Stack"/></Col>
                                <Col><p className='para2'><span className='para1'>Complexity of the Data Stack -</span> With so many different technologies and tools that make up the data stack, it can be difficult to understand how they all fit together and how they can be used to search for specific information.</p></Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6}> 
                            <Row>
                                <Col className='col-auto p-2'><img src={mdspointer} alt="Limited access"/></Col>
                                <Col><p className='para2'><span className='para1'>Limited access -</span> Depending on the specific information you are looking for, you may not have access to the necessary resources or data sets.</p></Col>
                            </Row>
                        </Col>
                    </Row>
                    </Row>

                    {/* Solution */}
                    <Row className='mt-5'>
                    <h3 className='heading4'>Solutions</h3>
                    <p className='para2'><span className='para1'>Together with my product manager,</span> we discussed the issues and the causes behind them, and we came to the conclusion that a website would be the best place to gather all the knowledge about modern data stacks.</p>
                    <p className='para2 mb-5'>Thus, we created a website with <spann>the details of the companies, their data stacks and the tools they employ.</spann>  Additionally, we collected informative content on the modern data stack, including <span className='para1'>journals, podcasts, articles, and videos.</span> We also included the <span className='para1'>key influential people</span>  from this field, a <span className='para1'>discussion forum</span> for topics relating to the modern data stack, and a feature to<span className='para1'> compare companies</span> to analyze the usage of the stacks and tools.</p>
                    </Row>

                    {/* effect approch */}
                    <Row className='mt-5 mb-5'>
                    <h3 className='heading4'>What effects did my approach have?</h3>
                    <Col className='d-flex justify-content-center mb-5'>
                    <img className='mt-2 ' src={thirteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} />
                    </Col>
                    </Row>

                    {/* motivation */}
                    <Row className='mt-5 mb-5'>
							<Col md={6} lg={6} sm={12} className="my-auto">
                                <Row>
                                    <Col>
                                    <h3 className='heading4'>Motivation behind building The MDS</h3>
                                    <p className='para2'>In the discussions with our clients, we observed that people are fed up with browsing about the modern data stack online, and this was the pain-point we identified as something we could simplify for our users by having detailed information about data stacks in one place. This motivated us to take up this project. We wanted to help people with data stack resources, so that they could know which stacks are trending in the top companies, learn best practices about data stacks, and choose stacks for their own use cases!</p>
                                    </Col>  
                                </Row>
							</Col>
							<Col md={6} lg={6} sm={12} className="d-flex justify-content-end" >
                             <img src={three} alt={'Employee Management'} style={{width:"100%", height:"300px"}} />
							</Col>
					</Row>

			        {/* landing page */}
					<Row >
							<Col md={12} className='mt-5'>
                                <Row>
                                    <Col>
                                    <h3 lassName='heading4'>The Landing Page</h3>
                                    <p className='para2'>We wanted to keep our landing page dynamic. So, we defined the top rated content in every section to keep it interesting and engaging for our new as well as existing users. Along with that, we keep updating the upcoming events on the home page. Apart from that, we also have a newsletter subscription option at the bottom of the page for the users to get updates about the latest events, offers and promotions from our website. View the website here.</p>
                                    </Col>  
                                </Row>
							</Col>
							<Col md={12} className='mt-4 mb-5'>
                             <Image src={fourteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>

                   {/* my process */}
					<Row className='mt-5'>
							<Col md={12} className='mt-5'>
                                <Row>
                                    <Col>
                                    <h3 lassName='heading4'>My Process</h3>
                                    <p className='para2'>Based on the project’s requirements, I followed these steps in order to finish the design lifecycle and to provide the best possible solution to the users.</p>
                                    </Col>  
                                </Row>
							</Col>
							<Col md={12} className='mt-4 mb-5'>
                             <Image src={six} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>


                    {/*use cases*/}
                    <Row className='mt-5 mb-5'>
							<Col md={12} className='mt-5 mb-5'>
                                <Row>
                                    <Col>
                                    <h3 className='heading4'>Use Cases</h3>
                                    <p className='mt-3 para2' >For designing a brand new platform, I explored all the possible use cases. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </Col>  
                                    <Col lg={12} md={12}>
                                    <Image src={fifteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                                    </Col>
                                    <Col lg={12} md={12}>
                                    <Image src={sixteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                                    </Col>
                                    <Col lg={12} md={12}>
                                    <Image src={seventeen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                                    </Col>
                                    <Col lg={12} md={12}>
                                    <Image className='' src={eighteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                                    </Col>
                                </Row>
							</Col>
					</Row>

                    {/* user flow */}
					<Row className='mt-5 mb-5'>
							<Col md={12} className='mt-5'>
                                <Row>
                                    <Col>
                                    <h3 className='heading4'>User Flow</h3>
                                    <p className='mt-3 para2'>After a feasibility study, I brainstormed various flow ideas and ended up with this because it gives a clear understanding in an organized and efficient manner. Additionally, the user flow is designed to optimize the user experience by providing a clear path to complete tasks and take advantage of all the features available.</p>
                                    </Col>  
                                </Row>
							</Col>
							<Col md={12} className='mt-4'>
                             <Image src={eleven} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>
                </Container>

                <Container className='mt-5' style={{ width:"70%"}}>
                     {/* Typography */}
					<Row className='mt-5'>
							<Col md={12} className='mt-5'>
                                <Row>
                                    <Col>
                                    <h3 lassName='heading4'>Typography & colors</h3>
                                    <p className='para2'>I chose this typography and color scheme because it is modern and contemporary. The font is easy to read with modern and energetic touch.</p>
                                    </Col>  
                                </Row>
							</Col>
							<Col md={12} className='mt-4'>
                                <Row className='d-flex justify-content-center'>
                                    <Col className='d-flex justify-content-center'>
                                    <h1 className='typography-big-text'>POPPINS</h1>
                                    </Col>
                                </Row>
							</Col>
                            <Col md={8} className='mt-4 mx-auto'>
                                <Row className='d-flex justify-content-center'>
                                    <Col lg={3} md={3} sm={6} className='d-flex justify-content-center'>
                                        <p className='typography-bold-text'>Bold</p>
                                    </Col>
                                    <Col lg={3} md={3} sm={6} className='d-flex justify-content-center'>
                                        <p className='typography-semi-bold-text'>Semi-Bold</p>
                                    </Col>
                                    <Col lg={3} md={3} sm={6} className='d-flex justify-content-center'>
                                        <p className='typography-medium-text'>Medium</p>
                                    </Col>
                                    <Col lg={3} md={3} sm={6} className='d-flex justify-content-center'>
                                        <p className='typography-regular-text'>Regular</p>
                                    </Col>
                                </Row>
							</Col>
                            <Col md={10} className="mx-auto mt-4">
                             <Image src={nineteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                            </Col>
					</Row>

                    {/* high fidility  */}
                    <Row className='mt-5'>
							<Col md={12} className='mt-5'>
                                <Row>
                                    <Col>
                                    <h3 lassName='heading4'>high-fidelity screens</h3>
                                    <p className='para2'>After the research and wireframing, I moved further into the visual design and created 50+ screens.</p>
                                    </Col>  
                                </Row>
							</Col>
							<Col md={6} className='mt-4 mb-5 p-4'>
                             <Image src={categories} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
                            <Col md={6} className='mt-4 mb-5 p-4'>
                             <Image src={companies} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>

                            <Col md={6} className='mt-4 mb-5 p-4'>
                             <Image src={resources} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
                            <Col md={6} className='mt-4 mb-5 p-4'>
                             <Image src={community} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>

                            <Col md={6} className='mt-4 mb-5 p-4'>
                             <Image src={journal} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
                            <Col md={6} className='mt-4 mb-5 p-4'>
                             <Image src={podcast} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>

                            <Col md={6} className='mt-4 mb-5 p-4'>
                             <Image src={job} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
                            <Col md={6} className='mt-4 mb-5 p-4'>
                             <Image src={profile} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>
                </Container>

                <div className=''>
                <Container className='mt-5' style={{ width:"70%"}}>
                    <Row>
                    <h3 className='heading4'>More screens</h3>
                    <p className='mt-3 para2' >These are the visuals of the entire platform. It includes empty state, welcome screens, Navigation bar, error state etc</p>
                    </Row>
                </Container>

            <Row className='mt-5'>
            <Image className='mb-5' src={twentyone} alt={'Employee Management'} style={{width:"100%", height:"100%"}} />
            </Row>
                </div>
        
        <Container className='mt-5' style={{ width:"70%"}}>
            <Row className='mt-5'>
            <Image className='' src={twenty} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />

            </Row>
        </Container>
                    
                
        </>
  )
}

export default ModernDataStack