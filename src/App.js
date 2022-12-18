import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Footer} from './components'

// import { ThemeContext } from './contexts/ThemeContext';
import { Main,CaseStudyPage,About } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
// import history from './history';
import './App.css'


const App = () => {

  // const { theme } = useContext(ThemeContext);
  // console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/case-study/:id" exact component={CaseStudyPage}/>
          <Redirect to="/" />
        </Switch>
        <Footer/>

      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
