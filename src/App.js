import './styles/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Features from './pages/features';
import ContactUs from './pages/contact';
import AboutUs from './pages/aboutUs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact"> <ContactUs /> </Route>
        <Route path="/features"> <Features /> </Route>
        <Route path="/about-us"> <AboutUs /> </Route>
        <Route path="/"> <Homepage /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
