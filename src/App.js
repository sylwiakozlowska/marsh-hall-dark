import React from 'react';
import Header from './components/header/Header';
import MenuNav from './menu-nav';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';



function App() {


  return(
    <div>
      <Header/>
      <Router>
      <MenuNav/> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        </Router>       
    </div>
  )
}

export default App;
