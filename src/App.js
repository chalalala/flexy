import './styles/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/homepage';
import Features from './pages/features';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"> <Layout children={<Homepage />} /> </Route>
        <Route path="/features"> <Layout children={<Features />} /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
