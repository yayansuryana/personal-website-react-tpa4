import './styles/App.css';
import Navbar from './Navbar';
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './About';
import Blog from './Blog';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />

      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/portfolio">
            <Blog />
          </Route>
        </Switch>
        
      </div>
    </div>
    </Router>



  );
}

export default App;