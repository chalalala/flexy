import './styles/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Header from './components/Header';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import Features from './pages/features';

function App() {
  return (
    <Router>
      <Header />
      <SocialLinks />
      <Switch>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
