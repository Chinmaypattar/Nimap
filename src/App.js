import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Switch, Router } from "react-router-dom";
import Home from "../src/Pages/Home";
import Tasks from "./Pages/Tasks";
import HeaderComponent from "../src/Components/HeaderComponent";
import User from "./Pages/User";
import Login from "./Pages/Login";
import ChangePassword from "./Pages/ChangePassword";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
   
  }

  activateLink = () => {
    this.setState({ isActive: false });
  };
  disableLink = () => {
    this.setState({ isActive: true });
  };
  render() {
    return (
      <React.Fragment>
        <HeaderComponent isActive={this.state.isActive} />
        <BrowserRouter>
          <Switch>
            <Route>
              <Route
                exact
                path="/"
                render={(props) => (
                  <User {...props} activateLink={this.activateLink} />
                )}
              ></Route>
              <Route path="/home">
                <Home  activateLink={this.activateLink}/>
              </Route>
              <Route
                path="/tasks"
                render={(props) => (
                  <Tasks {...props} activateLink={this.activateLink} />
                )}
              ></Route>
              <Route
                path="/login"
                render={(props) => (
                  <Login {...props} activateLink={this.activateLink} disableLink={this.disableLink} />
                )}
              ></Route>
              <Route
                path="/changePassword"
                render={(props) => (
                  <ChangePassword {...props} disableLink={this.disableLink} />
                )}
              ></Route>
        
            </Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
