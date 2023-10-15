import React from 'react';
import one from '../../../assets/png/GEPACK hero.svg'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './DesignSystem.css'
const DesignSystem = () => {
    // const [width] = useWindowSize();

    return (
        <>
        <div style={{width:"100%", height:"100%"}} >
            <Image src={one} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
        </div>

        <Container className="mt-5" style={{ width:  '70%'}}>
				<Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Introduction</h3>
							</Col>
							<Col  md={12}>
							<p className="para2 mb-5"> In my first role as a full-time product designer at [Cliff.com](http://cliff.com/) (now [Quantive.com](http://quantive.com/)), we had an open-source design system that we used to develop our products. Later, we began a new project to redesign the entire product, and as requirements grew, our design team expanded from one designer to four designers. At this point, we encountered a number of challenges in the process of bringing consistency to our designs and synchronizing them. As a result, we introduced new tools for our work, laying the foundations for our new design system.

                            My goal in this case study is to share my experience building a new design system for a SaaS product, which helped standardize the product and also enhance the productivity of designers and developers.

                            Before delving into the case study, let's establish the foundation by exploring key design system concepts, its pivotal role in organizational structures, the reasons for its adoption, and the numerous advantages it offers those who adhere to its principles.
                            </p>
							</Col>
					</Row>

                    <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>What is a Design System?</h3>
							</Col>
							<Col  md={12}>
							<p className="para2"> In simple words, a Design System is a systematic approach to product development complete with guidelines, processes, components, and code. It encompasses everything from typography and color schemes to UI components and interaction patterns.

                            </p>
							</Col>
					</Row>

                    <Row className="mt-4">
                        <Row className='d-flex'> 
                        <Col className='col-auto' style={{alignItems: 'stretch' }}>
                            <div className='my-auto' style={{height :'100%', width: '3px', backgroundColor: 'black', flex: 1 }}></div>
                        </Col>
                        <Col style={{ display: 'flex'}}>
                            <p className="para2 my-auto double-quote-text">
                                <i>
                            "A design system is an investment in efficiency and consistency, leading to cost savings, higher quality, and more delightful user experiences." - Brad Frost

                                </i>
                            </p>
                        </Col>
                        </Row>
                        <Row className="mt-4 mb-5">
							<Col  md={12}>
							<p className="para2 "> Companies develop design systems comprising style guides and reusable components maintained in a library. Developers code these components and collaborate with designers to maintain consistency during design updates.
                            </p>
							</Col>
					</Row>
                    </Row>


                    <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Why do we need a Design System??</h3>
							</Col>
                    </Row>
                    <Row className='d-flex'> 
                        <Col className='col-auto' style={{alignItems: 'stretch' }}>
                            <div className='my-auto' style={{height :'100%', width: '3px', backgroundColor: 'black', flex: 1 }}></div>
                        </Col>
                        <Col style={{ display: 'flex'}}>
                            <p className="para2 my-auto double-quote-text">
                                <i>
                            "Design systems are not just about aesthetics, they're about creating an ecosystem that fosters collaboration and innovation." - Jina Anne, Design Systems Handbook
                                </i>
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
							<Col  md={12}>
							<p className="para2"> Let's delve into why companies require a design system by understanding the challenges faced by designers and developers in their projects. I will now elaborate on the obstacles we confronted.
                            </p>
							</Col>
							<Col  md={12} >
                                <p className="para0 mb-1"> The Challenges we encountered
                                </p>
                                <p className="para2"> The following challenges/problems we encountered while revamping the cliff.ai product:
                            </p>
							</Col>
                            <Col md={12} className='mb-4'>
                                <ul>
											<li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Inconsistency:</span>Without a design system, our design approach lacked uniformity, resulting in varied styles and elements. This hindered the creation of a consistent user experience, leading to user confusion.</li>
                                            <li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Inconsistent Development:</span>Varied design styles and components posed challenges for developers, resulting in extra effort during implementation.</li>
											<li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Difficulty in Collaborating:</span>Absence of a common design language hindered effective collaboration within the design team and between design and development teams, causing miscommunications and misunderstandings in project discussions.</li>
											<li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Limited Reusability:</span>Without a design system, the absence of reusable design and code components hampered project efficiency and progress.</li>
											<li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Frequent Product Iterations:</span>5. Due to inconsistencies, our designs required frequent iterations to align with evolving design standards, resulting in longer development cycles.6.</li>
                                            <li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Onboarding Challenges:</span>To familiarize the new team members with a variety of design and coding practices was redundant, which hindered their productivity and integration.</li>
											<li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Longer Hand-off Processes:</span>7. Absence of standardized design components complicated the hand-off between designers and developers, causing misunderstandings and delaying development cycles.</li>

							</ul> 
							</Col>

                            <Col  md={12}>
                                <p className="para0 mb-1"> Our objective in developing a design system
                                </p>
                                <p className="para2"> We aimed to achieve the following objectives:
                            </p>
							</Col>
                            <Col md={12}>
                                <ul>
											<li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Consistency:</span>We ensured to have visual consistency and cohesion across our products and interfaces, reinforcing our brand's identity.</li>
                                            <li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Efficiency:</span>We strived for efficiency, streamlining design and development to eliminate redundancy, thus conserving valuable time and resources for our project.</li>
											<li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Improved Collaboration:</span>We aimed to foster improved collaboration by enhancing communication and teamwork among design, development, and other cross-functional teams for our project.</li>
											<li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Reusability:</span>Our focus was on creating reusable components to streamline and expedite design and development processes.</li>
                                            <li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Scalability:</span>To accommodate the growth of the organization and the expansion of product offerings without compromising design integrity.</li>
											<li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>User-Centered Design:</span>We focused on user-centered design, prioritizing user needs to deliver a more intuitive, user-friendly experiences.</li>
											<li  className="para2 mb-2"> <span className='para1' style={{marginRight:'5px'}}>Cost Savings:</span>We aimed to reduce long-term maintenance and development costs by eliminating design inconsistencies.</li>

							</ul> 
							</Col>
					</Row>

                
                    <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>The Process</h3>
							</Col>
                            <Col md={12}>
								<p className='para2'>Image will be here</p>
							</Col>

							<Col  md={12}>
							<p className="para2"> Previously, we used an open-source design system for our product, but limitations with UI components affected our designs. We sought to create a custom design system to infuse creativity into atoms and molecules, enhancing visual appeal and flexibility. Our goal was to provide detailed generalizations, even for the smallest component elements. Here's our design system creation process:
                            </p>
							</Col>
                            <Col  md={12}>
                                <p className="para0 mb-1 para0-green-color"> Step 1: Audit of the existing design and build a strategy
                                </p>
                                <p className="para2"> This initial step in building our design system marked the foundation of the entire process. The objective was twofold: to gain a clear understanding of the design elements currently in use and to lay the groundwork for structuring these elements into the design system effectively. It involved the following steps:
                            </p>
							</Col>
                            <Col md={12} className='mb-4'>
                                <ul>
											<li  className="para2 mb-2"> 
                                            <span className='para1' style={{marginRight:'5px'}}>Auditing the Existing Design:</span>
                                            <p>Our audit encompassed a meticulous review of all design components and elements employed in our products. This included the exploration of the UI components, as well as an examination of interactive elements like buttons, input fields, and navigation patterns. This audit helped us identify areas where inconsistencies and redundancies existed in our design, offering insights into the areas where a design system would be most beneficial.</p>
                                            </li>
                                            
                                            <li  className="para2 mb-2"> 
                                            <span className='para1' style={{marginRight:'5px'}}>Categorizing into Molecules and Atoms:</span>
                                            <p>One significant outcome of our audit was the categorization of design elements into the foundational building blocks of a design system: atoms and molecules (I’ll talk about them in the next section). This categorization process provided us with a structured approach to organizing our design elements, laying the groundwork for the subsequent phases of the design system's development.</p>
                                            </li>

                                            <li  className="para2 mb-2"> 
                                            <span className='para1' style={{marginRight:'5px'}}>Refining Flow and Architecture:</span>
                                            <p>During this phase, we also assessed the user flow and application architecture. We identified areas where improvements and optimizations could be made to enhance the user experience. These changes were considered in conjunction with the design audit, ensuring that the design system aligned with the desired user journey and product architecture.</p>
                                            </li>

                                            <li  className="para2 mb-2"> 
                                            <span className='para1' style={{marginRight:'5px'}}>Creating a Screen Inventory and strategic Screen, Mode, and Interaction Planning:</span>
                                            <p>Our design system development seamlessly united inventory and strategic planning. We compiled a comprehensive list of screens for both mobile and web, catering to diverse device usage. We introduced dark and light modes to accommodate varying visual preferences and settings. Additionally, we outlined interaction modes, including hover, press, and select. This integration enabled a versatile, user-centric design system, catering to diverse user behaviors and scenarios.</p>
                                            </li>

							</ul> 
							</Col>
                            <Col md={12}>
								<p className='para2'>Image will be here</p>
							</Col>
                            <Col md={12}>
                            <p className="para2"> By the end of this initial step, we had laid a solid foundation for the design system. We had not only audited our existing design landscape but also gained clarity on the atoms and molecules we needed to incorporate into our design system. This set the stage for the subsequent phases, enabling us to move forward with a clear vision and strategy for our design system's development. The audit provided us with the insights needed to address design inconsistencies, streamline the development process, and, most importantly, ensure a consistent and user-friendly product experience.
                            </p>

                            <p className="para2"> We started by selecting screens and strategically analyzing the required atoms, molecules, and organisms for each. This method allowed us to craft tailored components that enhance the user experience on each screen.
                            </p>
							</Col>
                            <Col  md={12}>
                                <p className="para0 mb-1 para0-green-color"> Step 1: Style guide (Visual)
                                </p>
								<p className='para2'>Image will be here</p>
                                <p className="para2"> The second phase of our design system implementation was dedicated to the development of a comprehensive visual style guide. This guide served as the bedrock of our design system, laying down the principles and standards that would shape the visual identity of our brand.
                                </p>

                                <p className="para2"> A Unified Visual Language provided a clear and consistent framework for all design elements, ensuring that our products and interfaces would speak the same visual dialect, reinforcing our brand identity. Also, we tried multiple colors and typefaces on the existing designs to ensure that each visual element was not only aesthetically pleasing but also in harmony with our brand's essence.
                                </p>
                                <p className="para2">Because naming conventions are so important to design systems, we paid careful attention to them.They provide consistency, clarity, and efficient communication, ensuring that every team member easily understands and implements design components, fostering a seamless and cohesive product.
                                </p>
							</Col>

                            <Col  md={12}>
                                <p className="para0 mb-1 para0-green-color"> Step 3: Atoms
                                </p>
								<p className='para2'>Image will be here</p>
                                <p className="para2"> The third phase of our design system journey brought us to the realm of "atoms." Atoms are the smallest design elements like buttons, check box, icons etc. They serve as the foundational components for building more complex structures in our design system. These atomic elements are the primary tools our designers and developers work with, each serving a distinct purpose and function in creating a seamless and cohesive user experience.
                                </p>

                               
                                <p className="para2">Like a toolbox, our well-defined atoms helped us create more complex structures, known as "molecules" and "organisms.”
                                </p>
							</Col>


                            <Col  md={12}>
                                <p className="para0 mb-1 para0-green-color"> Step 4: Molecules
                                </p>
								<p className='para2'>Image will be here</p>
                                <p className="para2"> With the foundational work on atoms completed, our design system journey elevated to the next tier, molecules which represent more complex and interactive components made up of atoms.
                                </p>
							</Col>

                            <Col  md={12}>
                                <p className="para0 mb-1 para0-green-color"> Step 5: Organisms
                                </p>
								<p className='para2'>Image will be here</p>
                                <p className="para2"> Organisms represent the seamless collaboration of atoms and molecules to construct comprehensive and interactive design components. The incorporation of these structured design components allows us to efficiently construct entire interface sections. This approach ensures that our products not only look unified but also provide consistent structures that enhance user understanding and interaction.
                                </p>
							</Col>

                            <Col  md={12}>
                                <p className="para0 mb-1 para0-green-color"> Step 6: The Hand-off Process
                                </p>
                                <p className="para2"> In the final step of our design system journey, we carried out the essential "hand-off" to our development team. This process bridges the gap between design and implementation. It involves the systematic transfer of design assets, specifications, and guidelines to developers.
                                </p>
                                <p className="para2"> Key components of our hand-off process include:
                                </p>

                                <ul>
                                    <li className="para2 mb-2">
                                    Detailed Documentation: We create comprehensive documentation with design specifications, asset libraries, and guidelines to provide developers with a clear roadmap.
                                    </li>
                                    <li className="para2 mb-2">
                                    Open Communication: We maintain ongoing communication between design and development teams to address questions or clarifications promptly.
                                    </li>
                                </ul>

                                <p className="para2 mb-5"> The hand-off phase marks the transition from design to development, ensuring our well-defined design elements are transformed into real, user-centric products that adhere to our brand identity and user experience standards.
                                </p>
							</Col>
					</Row>
                    <p className="para2 "> This journey marks the creation of our brand new design system, a significant milestone in our ongoing pursuit of excellence in design and development. The world of design systems is expansive, and continuous learning is at its core. I hope you found my journey engaging and insightful. I eagerly await your comments and suggestions, your feedback is invaluable to me.
                    </p>

                    <p className="para0 mb-1 mb-5 mt-3"> Thank you for reading! 
        </p>
                    <Row>

                    </Row>
        </Container>
        </>
        )
        }

export default DesignSystem