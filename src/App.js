import "./App.css";
import React, { Component } from "react";
import { AboutPage } from "./features/about";
import { HomePage } from "./features/home";
import { ProjectsPage } from "./features/projects";
import { LeadershipPage } from "./features/leadership";
import { Switch, Route, NavLink, BrowserRouter } from "react-router-dom";

require("./common/styles/styles.css");

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div>
          <div>
            <div className="nav-home-adjust">
              <NavLink
                activeStyle={{ color: "black" }}
                style={{ textDecoration: "none", color: "#3b5249" }}
                className="title-text"
                to="/thomasn90-github.io"
              >
                Home
              </NavLink>
            </div>
            <div className="nav-about-adjust">
              <NavLink
                activeStyle={{ color: "black" }}
                style={{ textDecoration: "none", color: "#3b5249" }}
                className="regular-text"
                to="/thomasn90-github.io/about"
              >
                About
              </NavLink>
            </div>
            <div className="nav-projects-adjust">
              <NavLink
                activeStyle={{ color: "black" }}
                style={{ textDecoration: "none", color: "#3b5249" }}
                className="regular-text"
                to="/thomasn90-github.io/projects"
              >
                Projects
              </NavLink>
            </div>
            <div className="nav-leadership-adjust">
              <NavLink
                activeStyle={{ color: "black" }}
                style={{ textDecoration: "none", color: "#3b5249" }}
                className="regular-text"
                to="/thomasn90-github.io/leadership"
              >
                Leadership
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/thomasn90-github.io">
              <HomePage />
            </Route>
            <Route path="/thomasn90-github.io/about">
              <AboutPage />
            </Route>
            <Route path="/thomasn90-github.io/projects">
              <ProjectsPage />
            </Route>
            <Route path="/thomasn90-github.io/leadership">
              <LeadershipPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
