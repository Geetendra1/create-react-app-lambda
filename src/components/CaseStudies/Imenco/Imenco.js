import React from 'react'
import Image from 'react-bootstrap/Image'
// import one from '../../../assets/svg/about/overlay.svg'
import two from '../../../assets/png/IMENCO hero.png'
import three from '../../../assets/png/content.png'
import four from '../../../assets/png/bulbs.svg'
import five from '../../../assets/png/process 1.png'
import six from '../../../assets/png/Survey results.png'
import seven from '../../../assets/png/survey insights.png'
import eight from '../../../assets/png/illustration.png'
import nine from '../../../assets/png/secondary content.png'
import ten from '../../../assets/png/CA 1.png'
import eleven from '../../../assets/png/User Persona 1.png'
import twelve from '../../../assets/png/User Persona 2.png'
import thirteen from '../../../assets/png/Frame 50-1.png'
import fourteen from '../../../assets/png/Group 36186.png'
import fifteen from '../../../assets/png/wf.png'
import sixteen from '../../../assets/png/home.png'
import seventeen from '../../../assets/png/add new room.png'
import eighteen from '../../../assets/png/add new device.png'
import ninteen from '../../../assets/png/planner.png'
import twenty from '../../../assets/png/insights.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Imenco = (props) => {
    const themes = props.themes
    console.log('themes', themes);

  return (
    
    <>
    <div style={{width:"100%", height:"100%"}} >
        <Image src={two} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
    </div>
    <div className='mt-5 mx-auto' style={{ width:"87%"}}>
					<Row className="g-first-container" >
								<Col lg={3} md={6} sm={12}className="text-lg-start text-md-start text-center" >
									<Row className=''>
											<Col md={12}>
												<h3 className="heading4">Goal</h3>
											</Col>
											<Col md={12} className="text-start para2">
												<small>To encourage people to live more sustainable lives by reducing their energy consumption, saving money, & contribute in reducing the carbon footprints.</small>
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
											<li><small>1st version: 6 weeks</small></li>
											{/* <li><small>2nd version: 2 weeks</small></li> */}
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
											<li><small>Research & UX Design: Primary & secondary research, personas, affinity mapping, user flow, information architecture, wireframing, user-testing</small></li>
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
											<small>Primary & secondary research (qualitative & quantitative analysis), user flow, information architecture, wireframing, user testing, interaction design, user interface, Figma, Illustrator.</small>
										</Col>
								</Row>
							</Col>
					</Row>
		</div>
    <Container className="mt-5" style={{ width:  '70%'}}>
				<Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>What is IMENCO?</h3>
							</Col>
							<Col  md={12}>
							<p className="para2"> IMENCO, an application for households, stands for "Impactful Energy Consumption", which helps its users achieve effective consumption by limiting weekly consumption, managing usage, and saving money on electricity bills. This application allows users to track and monitor their energy usage in real-time, identify the usage trends and patterns for each appliance, set goals for limiting consumption each week, and manage their energy usage and costs. It provides users with daily tips for the same.</p>
              <p className="para2 mb-5">Overall, this application would be able to provide users with the insights they need to optimize their energy usage, and let them control the consumption through the planner, which is scheduled beforehand, helping them to save energy and electricity costs, reduce their carbon footprint, and improve their sustainability efforts.</p>
							</Col>
					</Row>
          <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Why this project?</h3>
                <p className="para2 mb-5">The growing prominence of global warming and the impact of energy consumption on it compel considering and exploring this challenge.</p>
							</Col>
							<Col  md={12}>
							<p className="para1"> But what's the backstory?</p>
              <p className="para2">Indianapolis seemed clean and green when we first arrived. But shockingly, Indiana is the most polluted state in the US. Our group had the chance to collaborate on a project as part of our study. As the majority of our team members are more interested in sustainability, we decided to stay on topic and dig deeper to discover why.</p>
              <p className="para2 mb-5"> After conducting some more background research, we figured out that electricity production and consumption have contributed to almost 31.3% of the total US greenhouse gas emissions in 2018, and this is the highest of any sector (transportation (29.2%), industry (21.1%)). Additionally, studies indicate that 35% of home energy consumption in the US is wasted. Thus, we decided to take up electricity consumption waste as our core problem.</p>
							</Col>
					</Row>
          
          <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>The problem statement</h3>
                <p className="para2 mb-5">We defined our problem statement as: “ How might we design a solution for people to easily track and manage their electricity consumption so that they can consume energy efficiently and reduce wastage, carbon footprints, and their spending habits? ”</p>
							</Col>
							<Col  md={12}>
							<p className="para1"> Field observation</p>
              <p className="para2">Often, due to our busy schedules, we forget to turn off appliances and unplug chargers. Consequently, we fail to manage our energy consumption, which leads to energy waste. For understanding the reason behind the waste of energy, I observed a few people, and here are some photos from the field observation:</p>
							</Col>
							<Col md={12} className='mt-5 mb-5'>
              <Image src={three} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
              </Col>
					</Row>

          <Row className="mt-5">
							<Col md={12}>
                <Row>
                  <Col md={8}>
                      <h3 className='heading4'>Solutions</h3>
                      <p className="para2 mb-0">It takes a lot of thinking and research to make a sustainable and energy-efficient lifestyle and it is even more difficult to make it affordable. We need to cut down on the amount of energy we waste, and the amount of carbon dioxide that we release into the atmosphere. In light of these considerations, we developed a mobile application called IMENCO, which stands for "Impactful Energy Consumption".</p>
                      <p className='para2'>With the help of IMENCO, its users may cut down on energy use and waste, therefore reducing the harmful impact on the environment. The way this can be accomplished is by providing users with the means to monitor and schedule individual appliance usage. This will enable them to place limits on their energy intake and to learn how to reduce their electricity bill through sustainable energy consumption.</p>
                  </Col>

                  <Col md={4} className='d-flex justify-content-end'>
                  <Image className='my-auto' src={four} alt={'Employee Management'} style={{width:"90%", height:"65%"}} fluid />
                  </Col>
                </Row>
							</Col>
							<Col  md={12}>
							<p className="para1 mb-0 mt-5"> <span>&#8226;</span> Solution 1: Connection & Control</p>
              <p className="para2 m-0">a) This system will allow users to monitor their appliances' status and control them in real time.</p>
              <p className="para2 m-0">b) This application can be easily connected to any smart device owned by the user.</p>
              <p className="para2 m-0">c) Even those appliances that are not smart can be plugged into smart plugs to make it easy to track and control them.</p>

              <p className="para1 mb-0 mt-5"> <span>&#8226;</span> Solution 2: Planner & Milestone</p>
              <p className="para2 m-0">a) Users can access planners to view the usage schedules for each device. They will get these schedules weekly and need to follow in order to reduce electricity waste.</p>
              <p className="para2 m-0">b) Charts that display users' conservation journey, progress, and future goals.</p>

              <p className="para1 mb-0 mt-5"><span>&#8226;</span> Solution 3: Insights & Motivation</p>
              <p className="para2 m-0">a) Real-time insights displaying daily consumptions, savings and carbon emissions  along with detailed statistics on each.</p>
              <p className="para2 mb-5">b) Tip of the day provides customers with an energy-saving tip each day.</p>
              <p className="para2 mb-5">This app is meant to help households reduce their electricity consumption and help them save money. It also encourages households to adopt sustainable practices and reduce their carbon footprint. It provides them with tips and advice on how to reduce their electricity consumption and save money along with resources and tools that can help them track their electricity consumption and make informed decisions on how to save energy.</p>

							</Col>
					</Row>

          <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>The target audiences</h3>
                <p className="para2 mb-5">As we primarily considered electricity consumption waste as our core problem, the target audiences for this project would be the people who are using electricity in their daily lives at home, which includes homeowners and tenants living in both one and multi-unit buildings.</p>
							</Col>
					</Row>

          <Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>The process</h3>
                <p className="para2">The process we followed was to first identify and validate the problem we were trying to solve. This included understanding the context of the problem, researching and gathering data through observation, survey and interviews, and thus, developing a hypothesis. We then worked on describing, ideating and designing a solution which included understanding the customer or user, creating high-fidelity screens, prototype, and testing the prototype.</p>
							</Col>
							
			<Col md={12} className='mb-5' >
              <Image src={five} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid  />
              </Col>
					</Row>


          <Row className="mt-5">
				<Col md={12}>
								<h3 className='heading4'>Primary research</h3>
                <p className="para2">To validate the problem, we gathered and analyzed the data first-hand through quantitative and qualitative analysis. The primary research helped us in understanding the complexities of the problem and its impact on the individuals by collecting data directly from the potential users.</p>
                <p className="para2">We used two methods to conduct the primary research:</p>
                
				<p className="para2 mb-5"><span className='para1'><span>&#8226;</span> Survey : </span>In order to uncover the underlying causes of the issues by learning about potential users' behavior and attitudes regarding the issue, we developed a set of closed-ended questions to ask them. Following are the results we got:</p>
				<Col>
                      <Image src={six} alt={'Employee Management'} style={{width:"100%", height:"100%"}} />
				</Col>
				<p className="para2 mt-5">
				The key insights of the survey are:
				</p>
				<Col className='mt-5'>
                      <Image src={seven} alt={'Employee Management'} style={{width:"100%", height:"100%"}} />
				</Col>
				<p className="para2 mt-5">
				Additionally, the majority of customers are unaware of which appliances use the most or somewhat more energy.
				</p>

				<Row className='mt-5'>
					<Col md={9} >
					<p className="para2"><span className='para1'> <span>&#8226;</span> Interview : </span>To collect detailed, in-depth data to validate the problems, we interviewed individuals who are directly affected by the given problem. As a result, by obtaining users’ perspectives and gaining insights, we got a more comprehensive understanding of the problem, which enabled us to develop a more effective solution that addresses the issues we identified and meets the needs of our users.</p>
					<p className="para2 mt-5">The following are the main takeaways from the interviews and observations:</p>

					</Col>
					<Col md={3} className='d-flex justify-content-end'>
					<Image src={eight} alt={'Employee Management'} style={{width:"80%", height:"100%"}} />
					</Col>

					<Col className='mt-5'>
					<p className="para2">1.<span className='para1'> Forget to turn off in hurry: </span>People leaving the house in a hurry frequently forget to check if all the appliances are turned off.</p>
					<p className="para2">2.<span className='para1'> Lack of awareness on consumption units:  </span>People aren't aware of the amount of electricity that they consume and don’t
						know ways to manage their usage. They are concerned about their electric bills since these are often higher than anticipated, and they are unsure of what caused such increased rates. Users believe that the AC is what drains power the most.</p>
					<p className="para2">3.<span className='para1'> Making efforts is hard for people:  </span>Users trying to adopt a more sustainable lifestyle find it difficult to do so as it requires too much effort and they are unsure of what to do.</p>
					<p className="para2">4.<span className='para1'> Misuse of the appliance: </span>People tend to switch on lights even during the daytime due to the low light level inside the room. This is usually done unconsciously early in the morning, and they let it stay on for a longer time during the earlier part of the day.</p>
					<p className="para2">5.<span className='para1'> Management issues: </span>People co-living with roommates have management issues regarding shared resources like the use of appliances at home, which leads to taking the least responsibility over those resources and lessens the sense of ownership among them.</p>
					<p className="para2">6.<span className='para1'> Operating the appliances improperly: </span>When people are organizing their stuff in the refrigerator or finding something, they leave it open for too long, which results in a waste of energy.</p>
					<p className="para2">7.<span className='para1'> Using old and inefficient equipment: </span>Some people continue to use old and inefficient
			equipment, resulting in massive consumption.</p>
					<p className="para2 mb-5">8.<span className='para1'> Comfort >> Sustainability: </span>Most people choose comfort over being sustainable.</p>

					</Col>
				</Row>
			</Col>				
            </Row>

			<Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Secondary research</h3>
                <p className="para2">Key findings from the secondary research include the following:</p>
							</Col>
							
							<Col md={12} className='mb-5 mt-5'>
              <Image src={nine} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
              </Col>
			</Row>

			<Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Competitive analysis</h3>
                <p className="para2">You might think this is
just another smart
home app. But nope! It's not!
This one's better with many additional features.</p>
<p className='para1'>How is it better as compared to others?</p>
<p className='para2'>We did comparative research on existing applications with comparable functionalities, such as <span className='para1'>Google Home, Alexa, Samsung SmartThings, HomePod,</span>  and others. The majority of them are centered on the main goal of remotely monitoring and managing household appliances, and the majority of them were developed with devices that were part of their system in mind. So we identified many places where we could improve our solution and genuinely solve our core problem. The following are the areas that we identified as being missing in the existing applications:</p>

<ul>
	<li className='para2'><span className='para1'>View energy consumption: </span>Users were unable to determine their daily consumption.</li>
	<li className='para2'><span className='para1'>Appliance tracking: </span>Users were unaware of how much electricity is consumed by individual appliances.</li>
	<li className='para2'><span className='para1'>Goals & Milestones: </span>Users didn't feel motivated to take active steps to reduce their electricity consumption.</li>
	<li className='para2'><span className='para1'>Suggestive Alerts: </span>Some of the applications did have alert systems when appliances were turned on, but most of them did not remind the user if they were still using them. Also, users were not given suggestions on more effective ways to conserve electricity.</li>

</ul>

							</Col>
							<Col md={12} className='mb-5 mt-5 d-flex justify-content-center'>
              <Image src={ten} alt={'Employee Management'} style={{width:"75%", height:"100%"}} fluid />
              </Col>
			</Row>


			<Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Persona</h3>
                <p className="para2">Here are the two personas: one is that of Bianca Flores, who is a software engineer, and the second is that of Franco Diaz, who is a PHD student at Indiana University:</p>
							</Col>
							
			<Col md={12} className=' mt-5 d-flex justify-content-center'>
              <Image src={eleven} alt={'Employee Management'} style={{width:"75%", height:"100%"}} fluid />
              </Col>
			  <Col  md={12} className='mb-5 mt-5 d-flex justify-content-center'>
			  <Image src={twelve} alt={'Employee Management'} style={{width:"75%", height:"100%"}} fluid />
			  </Col>
			</Row>


			<Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Empathy mapping</h3>
                <p className="para2">We followed this method to identify the needs and wants of the users and how to best serve them, as well as to analyze the tasks and activities necessary for the app and how to best manage and coordinate them. The results of the mapping are as follows:</p>
							</Col>
							
			<Col md={12} className='mb-5 mt-5 d-flex justify-content-center'>
              <Image src={thirteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
              </Col>
			</Row>

			<Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>User flow</h3>
                <p className="para2">To identify users’ journey throughout the app and to understand and determine the most effective and efficient way for a user to interact with it, we created the flow of the application.</p>
							</Col>
							
			<Col md={12} className='mb-5 mt-5 d-flex justify-content-center'>
              <Image src={fourteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
              </Col>
			</Row>


			<Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Wireframing</h3>
                <p className="para2">Before creating the final design, we further developed the application's structure and
				 layout to map out the navigation and interface components.</p>
							</Col>
							
			<Col md={12} className='mb-5 mt-5 d-flex justify-content-center'>
              <Image src={fifteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
              </Col>
			</Row>



			<Row className="mt-5">
							<Col md={12}>
								<h3 className='heading4'>Visuals</h3>
                <p className="para2">I designed the high-fidelity screens to showcase the functionalities and features that we gave as a solution to our end users. The screens displayed the product’s interface, providing users with information about the product’s features and how to use them.</p>
							</Col>
							
			<Col md={12} className='mb-5 mt-5 d-flex justify-content-center'>
              <Image src={sixteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
              </Col>
			</Row>



			<Row className="mt-5">

			<Col md={12} className='mb-5 mt-5 d-flex justify-content-center'>
              <Image src={seventeen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
              </Col>
			</Row>

					<Row className="mt-5">

		<Col md={12} className='mb-5 mt-5 d-flex justify-content-center'>
		<Image src={eighteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
		</Col>
		</Row>


		<Row className="mt-5">

<Col md={12} className='mb-5 mt-5 d-flex justify-content-center'>
<Image src={ninteen} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
</Col>
</Row>



<Row className="mt-5">

<Col md={12} className='mb-5 mt-5 d-flex justify-content-center'>
<Image src={twenty} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
</Col>
</Row>

      </Container>
    </>
  )
}

export default Imenco