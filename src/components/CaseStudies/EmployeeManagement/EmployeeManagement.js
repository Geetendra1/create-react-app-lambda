		import React from 'react';
		import './EmployeeManagement.css'
		import one from '../../../assets/svg/about/hero.svg'
		import first from '../../../assets/png/old user flow.png'
		import second from '../../../assets/png/new user flow.png'
		// import third from '../../../assets/svg/about/Monitor - List 3 2.svg'
		// import fourth from '../../../assets/svg/about/monitor 2 1.svg' 
		// import fifth from '../../../assets/svg/about/Monitor details page 2.svg'
		// import sixth from '../../../assets/svg/about/IL 1 1.svg'
		// import seventh from '../../../assets/svg/about/incident 2 1.svg'
		// import eight from '../../../assets/svg/about/ID 1.svg'
		// import ninth from '../../../assets/svg/about/ID 3 - similar - details 1.svg'
		// import tenth from '../../../assets/svg/about/EP 5 1.svg'
		// import eleventh from '../../../assets/svg/about/ep 2 1.svg'
		import twelveth from '../../../assets/png/logo.png'
		import thirteen from '../../../assets/png/question.png'
		import fourteen from '../../../assets/png/image 1.png'
		import fifteen from '../../../assets/png/image 2.png'

		import sixteen from '../../../assets/png/image 3.png'

		import seventeen from '../../../assets/png/image 4.png'

		import eighteen from '../../../assets/png/image 5.png'

		import nineteen from '../../../assets/png/image 6.png'

		import twenty from '../../../assets/png/image 7.png'

		import twentyone from '../../../assets/png/image 8.png'
		import twentytwo from '../../../assets/png/image 9.png'




		import Container from 'react-bootstrap/Container'
		import Image from 'react-bootstrap/Image'
		import Row from 'react-bootstrap/Row';
		import Col from 'react-bootstrap/Col';


		// function useWindowSize() {
		// 	const [size, setSize] = useState([0, 0]);
		// 	useLayoutEffect(() => {
		// 	  function updateSize() {
		// 		setSize([window.innerWidth, window.innerHeight]);
		// 	  }
		// 	  window.addEventListener("resize", updateSize);
		// 	  updateSize();
		// 	  return () => window.removeEventListener("resize", updateSize);
		// 	}, []);
		// 	return size;
		//   }
		
		const EmployeeManagement = (props) => {
			// const [width] = useWindowSize();
			const themes = props.themes
				console.log('EmployeeManagement', themes);
				const textColor  =  themes.tertiary
			return (
				<div style={{backgroundColor: themes.secondary}}>
				<div style={{width:"100%", height:"100%"}} >
					<Image src={one} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
				</div>
			
			{/* overview section */}
				<div className='mx-auto' style={{ width:"87%"}}>
					<Row className="em-first-container" >
								<Col lg={3} md={6} sm={12}className="text-lg-start text-md-start text-center" >
									<Row className=''>
											<Col md={12}>
												<h3 className="heading4" style={{color: textColor}}>Goal</h3>
											</Col>
											<Col md={12} className="text-star para2">
												<small style={{color: textColor}}>To improve the user experience by redefining and analyzing the loopholes of the product. For this, I collaborated with Engineering and deveopment teams.</small>
											</Col>
									</Row>
								</Col>
								<Col lg={3} md={6} sm={12} className="text-lg-start text-md-start text-center">
								<Row className=''>
										<Col md={12}>
											<h3 className="heading4" style={{color: textColor}}>Duration</h3>
										</Col>
										<Col md={12} className="text-start">
										<ul className="para2">
											<li style={{color: textColor}}><small>1st version: 8 weeks</small></li>
											<li style={{color: textColor}}><small>2nd version: 2 weeks</small></li>
										</ul> 
										</Col>
								</Row>
							</Col>
							<Col lg={3} md={6} sm={12} className="text-lg-start text-md-start text-center">
								<Row className=''>
										<Col md={12}>
											<h3 className="heading4" style={{color: textColor}}>Role</h3>
										</Col>
										<Col md={12} className="text-start">
										<ul className="para2">
											<li style={{color: textColor}}><small>Research & UX Design: Competitive analysis, user flow, information architecture, wireframing, user-testing</small></li>
											<li style={{color: textColor}}><small>UI Design: Visuals, user-testing</small></li>
										</ul> 
										</Col>
								</Row>
							</Col>
							<Col lg={3} md={6} sm={12} className="text-lg-start text-md-start text-center">
								<Row className=''>
										<Col md={12}>
											<h3 className="heading4" style={{color: textColor}}>Skills</h3>
										</Col>
										<Col md={12} className="text-start para2" >
											<small style={{color: textColor}}>Competitive analysis, user flow, information architecture, wireframing, user testing, interaction design, user interface, Figma, Illustrator.</small>
										</Col>
								</Row>
							</Col>
					</Row>
				</div>

				{/* rest of the case study */}
				<Container className='mt-5' style={{ width:"70%"}}>
					<Row className="">
						<Col md={12} lg={4}>
							<Image src={twelveth} style={{width:'300px'}} />
						</Col>
						<Col md={12} lg={8}>
								<h3 className="heading4" style={{color: textColor}} >Cliff.ai overview</h3>
							   <p className='para2 mb-5'  style={{color: textColor}}>Dashboards are a bit messy, and also because of the large number of data, there is a high risk of missing the anomalies. At Cliff.ai, we work on ‘actively monitoring’ the key metrics and catch unexpected spikes or dips in the metrics <span className='para1'>AUTOMATICALLY and inform our clients.</span></p>
						</Col>
					</Row>

					<Row className="mt-5 " >
							<Col lg={8} md={12}>
								<h3 className="heading4" style={{color: textColor}} >What happened?</h3>
								<p className='para2' style={{color: textColor}}>At Cliff.ai, we had been hearing our users’ complaints about not being able to receive the alert notifications even after the detection of anomalies. We dug deep into the problem and discovered that users weren’t receiving the notifications because of the complex process of setting up the “Alert Rules”. And the functionality of whom and when to notify was bare-bones.</p>
								<p className='para2' style={{color: textColor}}>"To address this, I conducted formative user research to identify the key problems, developed new nomenclature and information hierarchies, and designed a new alert monitoring system"</p>
							</Col>
							<Col md={12} lg={4} className="d-flex justify-content-end mb-5" >
							<Image src={thirteen} style={{width:'320px'}} className="mb-5" />
							</Col>
					</Row>


					<Row className="mt-5" >
							<Col md={12}>
								<h3 className="heading4" style={{color: textColor}} >Use case</h3>
								<p className='para2' style={{color: textColor}}>It’s a festive season and the website sees enormous traffic suddenly. He now wants to be notified when the website records traffic of more than 65K visitors so that he can alert his technology team to prepare for upscaling. 
In order to do so, he sets up a stream, inputs threshold value, and just waits for the traffic notification to pop. Not only does his website traffic surpass 65K threshold mark, but also, he does not receive any notification from cliff when the incident happened. He got frustrated.</p>
								<p className='para2' style={{color: textColor}}>Thankfully, he raised a complaint to our customer satisfaction team regarding the same issue which got us thinking.</p>
								<p className='para2 mb-5' style={{color: textColor}}>We then realized that the user flow needed to be improved. That’s when we started working on our Incident Management System.</p>
							</Col>
					</Row>

					<Row className="mt-5" >
							<Col md={12}>
								<h3 className="heading4" style={{color: textColor}}>Understanding the actual problem</h3>
							</Col>
							<Col  md={12}>
							<p className='para2' style={{color: textColor}}>As a growing product, there’s always something to improve upon and add value. We expect our users to have a successful journey with cliff.ai and we wanted them to utilize the platform to its full capacity. But after actually listening to their experience of using our alert system, we realized that we had to put more work into the design of cliff.ai.</p>
							</Col>
							<Col  md={12}>
							<p className='para2' style={{color: textColor}}>While taking proactive actions to push users to complete the happy path, we always had a strong narrative of getting rid of dashboards. For that, we had an Alert Rule feature. An ideal “Happy Path” which looked something like this.</p>
							</Col>
							<Col  md={12} className="mb-5 d-flex justify-content-center">
							<Image src={first} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>
					</Row>

					<Row className="mt-5 mb-5" >
							<Col md={12}>
								<h3 className="heading4" style={{color: textColor}}>But there were a couple of problems with this flow that we realized after listening to our users.</h3>
							</Col>
							<Col md={12} className="em-border-left mt-5">
							<p className='para2' style={{color: textColor}}><span className='para1'>Problem space 1:</span> Some users <span className='para1'>weren’t able to receive the notifications</span>  whenever there was any anomaly in the metric.</p>
							<p className='para2' style={{color: textColor}}><span className='para1'>Reason:</span> Those users didn’t set up the “Alert Rules” properly. There can be many reasons for them to not set up those rules.</p>
							<ul>
											<li style={{color: textColor}} className="para2">They didn’t know they were supposed to set up Rules to receive notifications on their devices.</li>
											<li style={{color: textColor}} className="para2">They just forgot to set up alert rules.</li>
							</ul> 
							<p className='para2' style={{color: textColor}}><span className='para1'>Solution:</span> Automate the Alert Rule setup process. Provide a Default Monitor (yes we renamed Alert Rules to Monitor). So that even if the user does not set up any Monitor by themselves in the beginning, a base monitor will make sure they keep receiving the notification whenever anomalies occur.</p>
							</Col>


							<Col md={12} className="em-border-left mt-5">
							<p className='para2' style={{color: textColor}}><span className='para1'>Problem space 2:</span>  Users <span className='para1'>could not choose whom and when to notify</span>  in case of occurence of incidents.</p>
							<p className='para2' style={{color: textColor}}><span className='para1'>Reason:</span> Cliff.ai didn’t have the functionality of informing specific people of the team at a specific time. That is, ‘after detection of an anomaly, notify John. If he is unable to acknowledge that within the given time, notify Saahil’ and so on…</p>
							<p className='para2' style={{color: textColor}}><span className='para1'>Solution:</span>  Establish an escalation policy that determines whom, where and when the notifications will be escalated to specific teams or individuals when anomalies occur.</p>
							</Col>

							<Col md={12} className="em-border-left mt-5 mb-5">
							<p className='para2' style={{color: textColor}}><span className='para1'>Problem space 3:</span> It was <span className='para1'>hard to draw insights</span>  about incident patterns on metrics.</p>
							<p className='para2' style={{color: textColor}}><span className='para1'>Reason:</span>There was no insight page or incident “repository”, where users could draw quick critical insights from the metric incidents from a “single place”.</p>
							<p className='para2' style={{color: textColor}}><span className='para1'>Solution:</span>Provide an incident page where users can see all the incidents datewise and help them notice key information about the incidents.</p>
							</Col>
					</Row>


					<Row className="mt-5" >
							<Col md={12}>
								<h3 className="heading4" style={{color: textColor}}>The impact we aimed for our users</h3>
							</Col>
							<Col md={12} className="mt-2">
							<p className='para2' style={{color: textColor}}>1. <strong>Time-saving:</strong> Less interaction with the data saves time. The time saved can be used for something more productive and impactful. Business owners’ time is very valuable and in that same duration, impactful work leads to more value generation.</p>
							<p className='para2 mb-5' style={{color: textColor}}>2. <strong>Business Growth:</strong> Less reliable metric observability creates friction in business. Good tools will make irregularities more predictable which leads to better business planning and hence better business growth for users and cliff.ai as well.</p>
							</Col>
					</Row>



					<Row className="mt-5" >
							<Col md={12}>
								<h3 className="heading4" style={{color: textColor}}>Brainstorming — Deciding the design lifecycle</h3>
							</Col>
							<Col md={12} className="mt-2">
							<p className='para2' style={{color: textColor}}>We started brainstorming about the feasibility of the features. We addressed basic whats, whys, and hows about the overall incident lifecycle.</p>
							<p className='para2' style={{color: textColor}}>While brainstorming, we had to decide the exact design lifecycle aka, the process. We didn’t want to waste our time by randomly incorporating non-impactful design steps just for the sake of following the generic UX design procedure. We decided to Sprint through each part of the user flow one by one. We started with detailed pages of each feature and then designed the insight pages (or list pages) and followed the same reversed order for all the features. So in each sprint, we began with information architecture followed by low-fidelity wireframes. After creating a satisfactory number of iterations, we jumped to high-fidelity screens and worked on them in a similar iterative fashion.</p>
							</Col>
					</Row>

					<Row className="mt-5" >
							<Col md={12}>
								<h3 className="heading4" style={{color: textColor}}>Creating User Flow — drawing Inspiring from companies in the infrastructure monitoring domain</h3>
							</Col>
							<Col md={12} className="mt-2">
							<p className='para2' style={{color: textColor}}>Now that we have a detailed PRD, we more or less know what the flow was going to look like but that’s not enough, to stand out from the competitors, we first need to see what they are good at and what we can do better. Our competitors in terms of IMS were mainly Pagerduty, Squadcast, Opsgenie(Atlassian). As far as visual design was concerned, we had our design guidelines and patterns established already, so we needed to focus on the UX analysis of these products. Concerning our product design, we had some things from each product we could take inspiration from. But for us, Opsgenie resonated with our flow to a larger extent. Hence, we started to analyze its user flow and found it quite intuitive. To a small extent, their flow had some similarities to our flow, which motivated us to modify our user flow for better.</p>
							<p className='para2' style={{color: textColor}}>Changes we made in our flow after competitors’ analysis.</p>

							<p className='para2' style={{color: textColor}}>1. <span className='para1'>Nomenclature:</span> The naming convention is very important when it comes to accessibility. Users should know what the feature is for or what the given action does just by reading the name. Although our naming convention was easily understood by our team, we realized it could be improved for better and made them user-friendly. </p>
							<p className='para2' style={{color: textColor}}>2.  <span className='para1'>Hierarchy:</span>  We improved the overall hierarchy of our system.</p>

							<p className='para2' style={{color: textColor}}>2.  <span className='para1'>Hierarchy:</span>  After brainstorming the feasibility of all the features, we started structuring all the information we had. Our new user flow had these key steps.</p>

							</Col>


							<Col md={12} className='mb-5 d-flex justify-content-center'>
							<Image src={second} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>
					</Row>



					<Row className="mt-5" >
							<Col md={12}>
								<h3 className="heading4" style={{color: textColor}}>How we define our Incident management system</h3>
							</Col>
							<Col md={12} className="mt-2">
							<p className='para2' style={{color: textColor}}>An incident is an event or series of events that are generated when there is any disturbance in service due to numerous reasons. At cliff.ai, after the creation of a Stream, when a bunch of related anomalies is found, we group them to create an Incident.</p>
							<p className='para2' style={{color: textColor}}>Considering the outcomes of competitive analysis, we worked on the user flow and transformed the navigation of the alert system and we realized the importance of segregating to multiple sections and thus decided to divide our existing alert system into three parts: Monitors, Incidents & Escalation Policies.</p>

							<p className='para2 mb-5' style={{color: textColor}}>Let’s go deeper and see all three parts in detail. </p>
							</Col>
					</Row>


					<Row className="mt-5" >
							<Col md={12} className="mt-5">
								<h3 className="heading4" style={{color: textColor}}>Monitors</h3>
								<p className='para2'>Here, users will be able to select the rule, add a stream, multiple measures, and dimensions by setting upper and lower thresholds for related metrics.</p>
							</Col>
							<Col md={12} className="mt-2">
							<Image src={fourteen} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>
							<Col md={12} className="mt-5">
							<p className='para2' style={{color: textColor}}>This is the primary screen of ‘Monitors’ where the users have the list of all the monitors created by them. From this list, users can get the details of the:</p>
							<p className='para2' style={{color: textColor}}>1.  Type of monitor</p>
							<p className='para2' style={{color: textColor}}>2.  The person who has created it and on what date.</p>
							<p className='para2' style={{color: textColor}}>3.  Intertwined stream.</p>
							<p className='para2' style={{color: textColor}}>4.  Number of incidents created under that monitor</p>
							<p className='para2' style={{color: textColor}}>5. Frequency of incidents occurring</p>
							</Col>

							<Col md={12} className="mt-5">
							<Image src={fifteen} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>

							<Col md={12} className="mt-5">
							<p className='para2' style={{color: textColor}}>We tried a couple of high-fidelity iterations before deciding on the final one. We experimented with the layout based on the information we had and finalized the one that seemed consistent with the rest of the application.</p>
							<p className='para2' style={{color: textColor}}>Now, on opening a particular monitor, we can view all the details related to that monitor, out-and-out. This will help in analyzing the top measures and dimensions on which maximum incidents are occurring along with the respectively assigned responders who are handling these incidents.</p>
							<p className='para2' style={{color: textColor}}>Also, the heatmap will help in viewing all the incidents that occurred on this monitor in the past:</p>
							</Col>

							<Col md={12} className="mt-5">
							<Image src={sixteen} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>
					</Row>


					<Row className="mt-5" >
							<Col md={12} className="mt-5">
								<h3 className="heading4" style={{color: textColor}}>Incidents</h3>
								<p className='para2'>If an anomaly occurs due to any monitor, an incident will be created and this process will be done on daily basis.</p>
							</Col>
							<Col md={12} className="mt-2">
								<Image src={seventeen} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>
							<Col md={12} className="mt-5">
								<p className='para2' style={{color: textColor}}>The primary screen of ‘Incidents’ consists of the list of incidents that occurred on anomalies based on the thresholds of the monitors created by the users and the list will be created based on a particular date. It will be the central “hub” where the user can view all the incidents/alerts so far in their data. All the alert management-related actions will happen from this view.</p>
								<p className='para2' style={{color: textColor}}>Users will get a holistic analysis of all the incidents with the help of an insight section and a detailed analysis of any particular incident with a page dedicated to that which increases the accessibility of Incident information manifolds.</p>
							</Col>

							<Col md={12} className="mt-5">
								<Image src={eighteen} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>

							<Col md={12} className="mt-5">
								<p className='para2 p-0' style={{color: textColor}}>The Incident Details Page contains:</p>
								<p className='para2 mb-0' style={{color: textColor}}>1.  Every detail of the incident that occurred is shown on the top.</p>
								<p className='para2 mb-0 ' style={{color: textColor}}>2.  Detailed (graphical) insights of what caused that incident so that users can understand and act upon it quickly.</p>
								<p className='para2 mb-0' style={{color: textColor}}>3.  Responders list and ability to ‘Add New Responder’ to that Incident.</p>
								<p className='para2 mb-0' style={{color: textColor}}>4.  The timeline of activity that happened on that incident will help in maintaining a log of status changes.</p>
								<p className='para2 ' style={{color: textColor}}>5.  Comment section where team members can share their thoughts on that incident.</p>
							</Col>

							<Col md={12} className="mt-5 mb-5">
								<Image src={nineteen} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>

							<Col md={12} className="mt-5">
								<p className='para2' style={{color: textColor}}>The Heatmap is to show when and how many similar incidents happened in the past which has been already resolved:</p>
							</Col>

							<Col md={12} className="mt-5">
								<Image src={twenty} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>
					</Row>



					<Row className="mt-5" >
							<Col md={12} className="mt-5">
								<h3 className="heading4" v>Escalation Policies</h3>
								<p className='para2'>Now here comes the most crucial step — Whom, Where and When to notify. Users have the freedom to select one or multiple users or even teams to notify at different intervals on different platforms like mail, Slack, Viber, etc.</p>
							</Col>
							<Col md={12} className="mt-2">
							    <Image src={twentyone} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>
							<Col md={12} className="mt-5">
								<p className='para2' style={{color: textColor}}>Now comes the fun part, as soon as an Incident is generated, the notifications will be pushed to the respected assigned responders based on the Default Escalation Policy, AUTOMATICALLY!</p>

								<p className='para2' style={{color: textColor}}>i.e., Users do not need to set up anything for the feature to work properly. Our Base Escalation Policy will take care of it for them. Hence one problem is solved.</p>
								<p className='para2' style={{color: textColor}}>However, we had to address the problem of whom and when to escalate the notification. This is where Escalation Policy comes into the picture. By adding any number of users or teams and setting favorable rules so that in case of occurrence of an Incident, the assigned responders would be notified based on those preset rules.</p>
								<p className='para2' style={{color: textColor}}>An escalation policy describes the following three things:</p>
								<p className='para2 mb-0' style={{color: textColor}}>1.  Who to deliver the notifications to.</p>
								<p className='para2 mb-0' style={{color: textColor}}>2.  In what order or interval, notifications should be delivered</p>
								<p className='para2' style={{color: textColor}}>3.  On which platform to deliver the notifications.</p>
							</Col>

							<Col md={12} className="mt-5">
								<Image src={twentytwo} alt={'Employee Management'} style={{width:"80%", height:"100%"}} fluid />
							</Col>

							<Col md={12} className="mt-5">
								<p className='para2' style={{color: textColor}}>Users can decide who to notify in case an alert goes unresolved. The escalation is also controlled by the number of minutes/hours to wait before notifying the next person in the queue.</p>
								<p className='para2 mb-5' style={{color: textColor}}>And, if no one in the escalation queue responds, the actions can be repeated n number of times, which is decided by the user.</p>
							</Col>
					</Row>


					<Row className="mt-5" >
							<Col md={12}>
								<h3 className="heading4" style={{color: textColor}}>My learnings after leading the project</h3>
							</Col>
							<Col md={12} className="mt-2">

								<p className='para2' style={{color: textColor}}>1. <strong>Planning the roadmap:</strong>Pulling off the design journey efficiently was a big challenge especially because this was a huge project I was given ownership for. I ensured that every individual entity including project managers, stakeholders, interns, and engineers were looped into each design decision that I intended to make.</p>
								<p className='para2' style={{color: textColor}}>2.  <strong>Mentoring:</strong>Getting the juniors onboard in every design decision to maximize their participation and learning was one of my priority goals while working on this project. It polished my leadership skills.</p>
								<p className='para2' style={{color: textColor}}>3.  <strong>Giving feedback:</strong> Taking feedback is easier than giving feedback on someone else’s designs. It helped me improve in a way that I could give feedback without overwhelming their thought process.</p>
								<p className='para2' style={{color: textColor}}>4.  <strong>Audits:</strong> The way we iterate while designing, the same way the developers should iterate after audits as nothing can be built perfectly in one go.</p>
							</Col>

					</Row>

				</Container>

				</div>

			)
		}

		export default EmployeeManagement