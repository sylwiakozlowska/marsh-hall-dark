import React from "react";
import Header from "./components/header/Header";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Footer from "./components/footer/Footer";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="header-wrap">
          <Header />
        </div>
        <div className="content-wrap">
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
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </Router>
      <div className="footer-wrap">
        <Footer />
      </div>
    </div>
  );
}

export default App;
