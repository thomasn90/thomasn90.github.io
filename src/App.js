import "./App.css";
import React, { Component } from "react";
import { AboutPage } from "./features/about";
import { HomePage } from "./features/home";
import { ProjectsPage } from "./features/projects";
import { LeadershipPage } from "./features/leadership";
import { Switch, Route, NavLink, HashRouter as BrowserRouter } from "react-router-dom";

require("./common/styles/styles.css");

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
        <div>
          <div>
            <div className="nav-home-adjust">
              <NavLink
                activeStyle={{ color: "black" }}
                style={{ textDecoration: "none", color: "#3b5249" }}
                className="title-text"
                to="/"
              >
                Home
              </NavLink>
            </div>
            <div className="nav-about-adjust">
              <NavLink
                activeStyle={{ color: "black" }}
                style={{ textDecoration: "none", color: "#3b5249" }}
                className="regular-text"
                to="/about"
              >
                About
              </NavLink>
            </div>
            <div className="nav-projects-adjust">
              <NavLink
                activeStyle={{ color: "black" }}
                style={{ textDecoration: "none", color: "#3b5249" }}
                className="regular-text"
                to="/projects"
              >
                Projects
              </NavLink>
            </div>
            <div className="nav-leadership-adjust">
              <NavLink
                activeStyle={{ color: "black" }}
                style={{ textDecoration: "none", color: "#3b5249" }}
                className="regular-text"
                to="/leadership"
              >
                Leadership
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/leadership">
              <LeadershipPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
