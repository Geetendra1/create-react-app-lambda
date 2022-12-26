import React,{ useLayoutEffect, useState} from 'react';
import one from '../../../assets/png/GEPACK hero.svg'
import three from '../../../assets/svg/about/cubes 9 2.svg'
import five from '../../../assets/svg/about/Rectangle 3.svg'
import six from '../../../assets/svg/about/flow.svg'
import seven from '../../../assets/png/font & colors.png'
import nine from '../../../assets/svg/about/home.svg'
import ten from '../../../assets/svg/about/tab bar content (1).svg'
import eleven from '../../../assets/svg/about/scan baggage.svg'
import twelve from '../../../assets/svg/about/Group 36173.svg'
import thirteen from '../../../assets/svg/about/status.svg'
import fifteen from '../../../assets/svg/about/UI 9.svg'
import eighteen from '../../../assets/png/navigation.png'
import sixteen from '../../../assets/svg/about/UI 10.svg'
import seventeen from '../../../assets/png/15.png'
import mdspointer from '../../../assets/png/checkbox_square 1.png'
import icon1 from '../../../assets/png/Group 36059.png'
import icon2 from '../../../assets/png/Group 36060.png'
import icon3 from '../../../assets/png/Group 36060-1.png'
import icon4 from '../../../assets/png/Group 36060-2.png'
import icon5 from '../../../assets/png/Group 36060-3.png'
import icon6 from '../../../assets/png/Group 36060-4.png'



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
    const [width] = useWindowSize();      

    return (
        <>
        <div style={{width:"100%", height:"100%"}} >
            <Image src={one} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
        </div>

    {/* overview section */}
				<div className='mt-5 mx-auto' style={{ width:"87%"}}>
					<Row className="g-first-container" >
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

                {/* rest of the case study */}
				<Container className="mt-5" style={{width:"70%"}}>
				<Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>What is GEPACK?</h3>
							</Col>
							<Col  md={12}>
							<p className="para2 mb-5"> GEPACK is a baggage tracking app that helps its users track their baggage from the very beginning of their journey until they receive it from the belt. It helps the users stay relaxed and relieved while traveling as they can track their baggage and check the status anytime, along with many other features.</p>
							</Col>
					</Row>


					<Row className="mt-5" >
							<Col md={12}>
								<h3 className='heading4'>Why did I pick up this project?</h3>
							</Col>
							<Col  md={12}>
							<p className="para2"> During this COVID-19 pandemic, as soon as the flight started operating, I decided to go back to my home. When I was dropping my bag on the counter for check-in, the luggage tag was not fastened properly, which got me concerned for my luggage. It’s a headache if you lose your property at the airport!</p>
                            <p className="para2"> After landing, it took more time than usual to bring the bags to the belt. I kept waiting. Minutes later, a few bags were on the belt. As soon as people saw it coming, they rushed to the belt, forgetting about social distancing.</p>
                            <p className="para2"> After watching all this, I thought it would be a nice idea to design an application that could track the luggage to prevent all the hassle!</p>
							</Col>
					</Row>




                    <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>User’s Pain-Points</h3>
							<p className="para2"> GEPACK is a baggage tracking app that helps its users track their baggage from the very beginning of their journey until they receive it from the belt. It helps the users stay relaxed and relieved while traveling as they can track their baggage and check the status anytime, along with many other features.</p>
							</Col>
                            <Col md={12} className="mt-2">
							<Row className='mt-2 mb-5' >
                        <Col md={12} sm={12} lg={6}>
                            <Row>
                                <Col className='col-auto '><img src={mdspointer} alt="Inadequate Search Engine Optimization" /></Col>
                                <Col><p className='para2'>Sometimes <span className='para1'>baggage are not loaded </span> on the flight due to some valid reasons or are mishandled by the airline staff.</p></Col>
                            </Row>
                        </Col>

                        <Col md={12} sm={12} lg={6}>
                            <Row>
                                <Col className='col-auto '><img src={mdspointer} alt="Inadequate Search Engine Optimization" /></Col>
                                <Col><p className='para2'>Getting the <span className='para1'>info of the belt no. </span>to pick the baggage (considering the probability that traveler missed the announcement made in the flight).</p></Col>
                            </Row>
                        </Col>

                        <Col md={12} sm={12} lg={6}> 
                            <Row>
                                <Col className='col-auto'><img src={mdspointer} alt="Outdated or incorrect information " /></Col>
                                <Col><p className='para2'>Waiting for <span className='para1'>fragile baggage details,</span>  as these baggage are not loaded on the belt and thus have to ask any airline staff about it.</p></Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6}>
                             <Row>
                                <Col className='col-auto '><img src={mdspointer} alt="Information Overload "/></Col>
                                <Col><p className='para2'>No social distancing near the belt. <span className='para1'>Gathering of all the travelers</span> should be avoided, especially amidst the COVID-19 crisis</p></Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6}> 
                            <Row>
                                <Col className='col-auto '><img src={mdspointer} alt="Identifying relevant content"/></Col>
                                <Col><p className='para2'><span className='para1'>Uncertain waiting </span>for baggage and paying attention to every single baggage on the belt (sometimes travelers have to wait uncertainly too long).</p></Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6}> 
                            <Row>
                                <Col className='col-auto '><img src={mdspointer} alt="Complexity of the Data Stack"/></Col>
                                <Col><p className='para2'> <span className='para1'>Navigation</span> at the airport is sometimes complicated (language limitation could be one of the reasons).</p></Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6}> 
                            <Row>
                                <Col className='col-auto '><img src={mdspointer} alt="Limited access"/></Col>
                                <Col><p className='para2'>Sometimes travelers, by mistake,<span className='para1'>exchange their baggage</span>  or leave their baggage behind at the airport.</p></Col>
                            </Row>
                        </Col>
                    </Row>							
					</Col>
                            <Col  md={12} className="">
							<p className="para2 mb-5"> In 2020, 3.5 mishandled baggage reports were filed per 1000 passengers worldwide. In 2020, the total cost of bag mishandling to the aviation industry stood at around 600 million U.S. dollars, down from 2.5 billion U.S. dollars in the previous year.</p>
							</Col>
					</Row>

                    <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Key Insights</h3>
							</Col>
							<Col  md={12}>
							<p className="para2"> While traveling, people deal with different problems and challenges at the airport. I did research and found some of the problems exist in real and have written down in the form of user cases:</p>
							</Col>
                            <Col md={12} className="mt-2">
							<Image src={three} alt={'Employee Management'} style={{width:"80%", height:"80%"}} fluid />
							</Col>
					</Row>

                    <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Proposed Solutions</h3>
							</Col>
							<Col  md={12}>
							<p className="para2"> To validate the pain points and user cases, I interviewed few of my friends and relatives asking them about their travel experiences and to know about their pain points. Based on this I concluded that these problems do exist and proposed following solutions:</p>
							</Col>
                            <Col md={12} className="mt-2">
							<Row className='mt-2 mb-5' >
                        <Col md={12} sm={12} lg={6} className='mt-3'>
                            <Row>
                                <Col className='col-auto '><img src={icon1} alt="Inadequate Search Engine Optimization" /></Col>
                                <Col className='my-auto'><p className='para2'>At the time of loading, because of any issue (eg. power bank in the bag), <span className='para1'>if the baggage is not loaded, the user will be notified at that very moment</span> .</p></Col>
                            </Row>
                        </Col>

                        <Col md={12} sm={12} lg={6} className='mt-3'>
                            <Row>
                                <Col className='col-auto '><img src={icon2} alt="Inadequate Search Engine Optimization" /></Col>
                                <Col className='my-auto'><p className='para2'>As the flight lands, the users should get <span className='para1'>notified about the baggage belt number.</span>  Also, the navigation to the belt can help the traveler a lot (eg. in case of language barrier).</p></Col>
                            </Row>
                        </Col>

						<Col md={12} sm={12} lg={6} className='mt-5'> 
                            <Row>
                                <Col className='col-auto '><img src={icon3} alt="Limited access"/></Col>
                                <Col className='my-auto'><p className='para2'>Uncertain waiting time and paying attention to every single bag can be avoided with this brand new feature. From <span className='para1'>unloading the baggage till it reaches the belt, user will be updated continuously.</span> </p></Col>
                            </Row>
                        </Col>

                        <Col md={12} sm={12} lg={6} className='mt-5'> 
                            <Row>
                                <Col className='col-auto'><img src={icon4} alt="Outdated or incorrect information " /></Col>
                                <Col className='my-auto'><p className='para2'>Traveler can <span className='para1'>proceed towards the belt after getting a notification</span> of their baggage arriving at the belt. Thus, the gathering of people can be avoided</p></Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6} className='mt-5'>
                             <Row>
                                <Col className='col-auto '><img src={icon5} alt="Information Overload "/></Col>
                                <Col className='my-auto'><p className='para2 my-auto'>For the fragile baggage, the <span className='para1'>user will get a notification about the process to collect it.</span></p></Col>
                            </Row>
                        </Col>
                        <Col md={12} sm={12} lg={6} className='mt-5 mb-5'> 
                            <Row className=''>
                                <Col className='col-auto '><img src={icon6} alt="Complexity of the Data Stack"/></Col>
                                <Col className='my-auto'><p className='para2 my-auto'><span className='para1'>Notification on receiving the baggag</span> e will help in resolving the issue of baggage exchange or loss.</p></Col>
                            </Row>
                        </Col>

                    </Row>	
							</Col>
					</Row>


                    <Row className="mt-5 disppla">
                            <Col md={7} style={{display:'flex',justifyContent: 'start', alignItems:'center'}}>
                                <Row >
                                    <Col md={12}>
                                        <h3 className='heading4'>Target Users</h3>
                                    </Col>
                                    <Col  md={12}>
                                        <p className="para2"> Travelers of any age, traveling with family or alone, anyone can use the app to track and find his/her luggage at the airport.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={5} className="mb-5">
							    <Image src={five} className='mb-5' alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>

                    <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>User Flow</h3>
							</Col>
							<Col  md={12}>
						    	<p className="para2"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
							</Col>
                            <Col md={12} className="mt-2 d-flex justify-content-center" >
							<Image src={six} alt={'Employee Management'} style={{width:"70%", height:"100%"}} fluid />
							</Col>
					</Row>


                    <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Typography & Colors</h3>
							</Col>
                            <Col md={12} className="mt-2" >
							<Image src={seven} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>


                    <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Visuals</h3>
							</Col>
							<Col  md={12}>
						    	<p className="para2"> After the research and wireframing, I moved further into the visual design and created 50+ screens.</p>
							</Col>
                            <Col md={12} className="mt-2 d-flex justify-content-center" >
							<Image src={nine} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
							</Col>
					</Row>
                 </Container>

                 <Row className='g-second-container pb-5' style={{width:"100%"}}>
                    <Col className='d-flex justify-content-center' md={12} >
                    <Row className={`mt-5 text-center ${width > 1000 ? "w-25" : "w-75"}`}>
							<Col md={12}>
								<h3 className='heading4'>Tab Bar</h3>
                                <p className="para2"> After the research and wireframing, I moved further into the visual design and created 50+ screens.</p>
                                <p className='m-0'>1. Scan QR Code</p>
								<p className="para2"> 2. Add a new trip</p>
							</Col>
					</Row>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                    <Row className="mt-5" style={{width:"70%"}}  >
                    <Image src={ten} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                    </Row>
                    </Col>
                 </Row>

                 <Container className="mt-5" style={{width:"70%"}}>
                 <Image src={eleven} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                 </Container>

                 <Row className='g-second-container pb-5 mt-5' style={{width:"100%"}}>
                    <Col className='d-flex justify-content-center'>
                    <Row className="mt-5" style={{width:"70%"}}>
                    <Image src={twelve} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                    </Row>
                    </Col>
                 </Row>


                 <Container className="mt-5" style={{width:"70%"}}>
                 <Image src={thirteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                 </Container>

                 <Row className='g-second-container pb-5 mt-5' style={{width:"100%"}}>
                    <Col className='d-flex justify-content-center'>
                    <Row className="mt-5" style={{width:"70%"}}>
                    <Image src={eighteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                    </Row>
                    </Col>
                 </Row>

                 <Container className="mt-5" style={{width:"70%"}}>
                 <Image src={seventeen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                 </Container>


				{/* light mode */}
				<Row className='pb-5 m-0 p-0' style={{width:"100%"}}>
                    <Image src={fifteen} className="m-0 p-0" alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                 </Row>
				 {/* dark mode */}
                 <Row className='pb-5 m-0 p-0' style={{width:"100%"}}>
                    <Image src={sixteen} className="m-0 p-0" alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
                 </Row>
        </>
    )
}

export default Geepack