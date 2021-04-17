// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Timeline from './pages/Timeline';
import NavBar from './pages/NavBar';
import Pictures from './pages/Pictures';
import Daytrips from './pages/DayTrips';
import Sleep from './pages/Sleep';


import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar className="header-region" />
        <Route exact path='/' component={Home} />
        <Route exact path='/Pictures' component={Pictures} />
        <Route exact path='/Timeline' component={Timeline} />
        <Route exact path='/DayTrips' component={Daytrips} />
        <Route exact path='/Sleep' component={Sleep} />
      </Router>

    </div>
  );
}

export default App;
