import './styles/styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './pages/homepage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/"> <Homepage /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
