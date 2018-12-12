import React, { Component } from 'react';

//Components
import LoginPassword from "./components/login-password";
import Signup from "./components/signup";
import City from "./components/city";
import Country from "./components/country";
import Legalname from "./components/legalname";
import Street from "./components/street";
import State from "./components/state";
import Zipcode from "./components/zipcode";
import Website from "./components/website";
import Bank from "./components/bank";
import Goal from "./components/goal";
import Home from "./components/home";
import Send from "./components/send";

//Routing + Authorization
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";


class App extends Component {
  
  constructor(props){
    super(props);


  }
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
          <Route exact path="/legalname" component={requireAuth(Legalname)} />
          <Route exact path="/street" component={requireAuth(Street)} />
          <Route exact path="/city" component={requireAuth(City)} />
          <Route exact path="/country" component={requireAuth(Country)} />
          <Route exact path="/state" component={requireAuth(State)} />
          <Route exact path="/zipcode" component={requireAuth(Zipcode)} />
          <Route exact path="/website" component={requireAuth(Website)} />
          <Route exact path="/goal" component={requireAuth(Goal)} />
          <Route exact path="/send" component={requireAuth(Send)} />
          <Route exact path="/bank" component={requireAuth(Bank)} />

        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);