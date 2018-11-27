import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions";
import PropTypes from "prop-types";

class Signup extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            password2: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.goLogIn = this.goLogIn.bind(this);

    }

    goLogIn() {
        this.context.router.history.push("/");
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentWillUpdate(nextProps) {
        if (nextProps.auth) {
            this.context.router.history.push("/home");
        }
    }

    handleClick(){
        this.props.signUp(this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="centerForm">


                <div className="centerPage" />
                <div className="headingCenter">
                    <div className="headingStyle">
                        <div>Sign up</div>
                        <br />
                    </div>
                </div>



                <div className="space" />


                <div className="inputPosition">
                    <input type="text" name="username" onChange={this.onChange} placeholder="Email " className="inputStyle" />
                </div>


                <div className="space" />
                <div className="inputPosition">
                    <input type="password" name="password" onChange={this.onChange} placeholder="Password" className="inputStyle" />
                </div>

                <div className="space" />
                <div className="inputPosition">
                    <input type="password" name="password2" onChange={this.onChange} placeholder="Password" className="inputStyle" />
                </div>


                <div className="space" />

                <div className="button-size">
                    <button className="button-style" onClick={this.handleClick}>Sign Up</button>
                </div>

                <div className="space" />
                <div className="space" />

                <div className="button-size">
                
                <button onClick={this.goLogIn} className="goButton-style">
                    Already have an account?
                    <br /> 
                    Sign In
                    
                </button>

                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { signUp })(Signup);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}