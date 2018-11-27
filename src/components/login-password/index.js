import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions";
import PropTypes from "prop-types";

class LoginPassword extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.goSignUp = this.goSignUp.bind(this);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentWillUpdate(nextProps) {
        if (nextProps.auth) {
            this.context.router.history.push("/home");
        }
    }

    goSignUp(){
        this.context.router.history.push("/signup");
    }

    handleClick(){
        this.props.signIn(this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="login-login-7">
                <div className="login-0" />
                <div className="login-1">
                    <div className="login-1-0" />
                    <div className="login-sign_in_to_seampay_-5">
                        <div>Sign In to SeamPay</div>
                        <br />
                    </div>
                    <div className="login-1-2" />
                </div>
                <div className="login-2" />
                <div className="login-3">
                    <input onChange={this.onChange} type="text" placeholder="Email" name="username" className="login-username-2" />
                </div>
                <div className="login-4" />
                <div className="login-5">
                    <input type="password" onChange={this.onChange} placeholder="Password" name="password" className="login-password-3" />
                </div>
                <div className="login-6" />
                <div className="button-size">
                    <button className="button-style" onClick={this.handleClick}>Sign In</button>
                </div>               
                <div className="login-8" />
                <div className="login-9">
                    <div className="login-9-0" />
                    <button onClick={this.goSignUp} className="goButton-style">
                        Don't have an account? 
                        <br />
                        Sign up
                    </button>
                    <div className="login-9-2" />
                </div>
                <div className="login-10" />
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { signIn })(LoginPassword);

//onClick={this.props.signIn}