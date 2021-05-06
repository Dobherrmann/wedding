// import logo from './logo.svg';
import './App.css';

import Wedding from './pages/Wedding';
import Timeline from './pages/Timeline';
import NavBar from './pages/NavBar';
import Pictures from './pages/Pictures';
import Daytrips from './pages/DayTripsV2';
import Sleep from './pages/Sleep';
import Impressum from './pages/Impressum';
import Footer from './pages/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar className="header-region" />
        
        <Route exact path='/Wedding' component={Wedding} />
        <Route exact path='/Pictures' component={Pictures} />
        <Route exact path='/Timeline' component={Timeline} />
        <Route exact path='/DayTripsV2' component={Daytrips} />
        <Route exact path='/Sleep' component={Sleep} />
        <Route exact path='/Impressum' component={Impressum} />
        <Footer className="footer-region"/>
      </Router>
    </div>
  );
}

export default App;
