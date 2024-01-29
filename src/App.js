import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import Mercury from './pages/mercury';
import Venus from './pages/venus'
import Earth from './pages/earth'
import Mars from './pages/mars'
import Jupiter from './pages/jupiter'
import Saturn from './pages/saturn'
import Neptune from './pages/neptune'
import Uranus from './pages/uranus'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/mercury" component={Mercury} />
        <Route path="/venus" component={Venus} />
        <Route path="/earth" component={Earth} />
        <Route path="/mars" component={Mars} />
        <Route path="/jupiter" component={Jupiter} />
        <Route path="/saturn" component={Saturn} />
        <Route path="/neptune" component={Neptune} />
        <Route path="/uranus" component={Uranus} />
      </Switch>
      <MainBody />
      <Footer />
    </Router>
  );
}


export default App;
