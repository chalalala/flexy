import './styles/styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from './components/Layout';
import Homepage from './pages/homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"> <Layout children={<Homepage />} /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
