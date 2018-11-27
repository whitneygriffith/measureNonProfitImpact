import React, { Component } from 'react';

//Components
import ToDoList from "./components/ToDoList";
import LoginPassword from "./components/login-password";
import Signup from "./components/signup";
import Fullname from "./components/fullname";
import UserCountry from "./components/user-country";

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
          <Route exact path="/fullname" component={requireAuth(Fullname)} />
          <Route exact path="/usercountry" component={requireAuth(UserCountry)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);