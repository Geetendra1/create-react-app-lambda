import React from 'react'
import { Helmet } from 'react-helmet'

import { Landing, WorkSection } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            {/* <Navbar />         */}
            <Landing />
            <WorkSection/>
            {/* <About /> */}
            {/* <Education />
            <Skills />
            <Experience />
            // <Projects />
            <Achievement />
            <Services />
            <Testimonials />
            <Blog />
            <Contacts />
           */}
             {/* <Projects /> */}
             {/* <Footer />  */}
        </div>
    )
}

export default Main
