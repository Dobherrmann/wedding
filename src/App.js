// import logo from './logo.svg';
import './App.css';

import Wedding from './pages/wedding';
import Timeline from './pages/timeline';
import Navbar from './pages/navbar';
import Pictures from './pages/pictures';
import Daytrips from './pages/daytrips';
import Sleep from './pages/sleep';
import Impressum from './pages/impressum';
import Footer from './pages/footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="header-region" />
        
        <Route exact path='/wedding' component={Wedding} />
        <Route exact path='/pictures' component={Pictures} />
        <Route exact path='/timeline' component={Timeline} />
        <Route exact path='/daytrips' component={Daytrips} />
        <Route exact path='/sleep' component={Sleep} />
        <Route exact path='/impressum' component={Impressum} />
        <Footer className="footer-region"/>
      </Router>
    </div>
  );
}

export default App;
