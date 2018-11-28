import React, { Component } from 'react';

//Components
import ToDoList from "./components/ToDoList";
import LoginPassword from "./components/login-password";
import Signup from "./components/signup";
import Fullname from "./components/fullname";
import UserCountry from "./components/user-country";
import Usertag from "./components/usertag";
import Zipcode from "./components/zipcode";
import Home from "./components/home";
import Send from "./components/send";

//Routing + Authorization
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";
import { compose } from '../../../../Library/Caches/typescript/3.1/node_modules/redux';

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
          
          <Route path="/home" component={requireAuth(Home)} />
          <Route exact path="/fullname" component={requireAuth(Fullname)} />
          <Route exact path="/usercountry" component={requireAuth(UserCountry)} />
          <Route exact path="/usertag" component={requireAuth(Usertag)} />
          <Route exact path="/zipcode" component={requireAuth(Zipcode)} />
          <Route exact path="/send" component={requireAuth(Send)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);