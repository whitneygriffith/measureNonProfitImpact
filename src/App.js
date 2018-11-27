import React, { Component } from 'react';

//Components
import ToDoList from "./components/ToDoList";
import LoginPassword from "./components/login-password";
import Signup from "./components/signup";

//Routing + Authorization
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={LoginPassword} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/home" component={requireAuth(ToDoList)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);