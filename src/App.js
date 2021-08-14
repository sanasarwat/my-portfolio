import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/project/Projects";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <div className="app__sidebar">
              <SideBar />
            </div>
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <About />
                </Route>
                <Route exact path="/resume">
                  <Resume />
                </Route>
                <Route exact path="/projects">
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
