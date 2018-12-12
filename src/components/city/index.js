import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addCity } from "../../actions";
import PropTypes from "prop-types";

class City extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { 
            city: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.goNext = this.goNext.bind(this);

    }

    goNext() {
        this.context.router.history.push("/");
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClick(){
        this.props.addCity(this.state.city);
        this.context.router.history.push("/state");
    }

    render() {
        return (
            <div className="fullname-fullname-8">
                <div className="fullname-0" />
                <div className="fullname-1">
                    <div className="fullname-please_confirm_your_first_and_last_name_-5">
                        What city are you <br></br>located in?
              </div>
                </div>
                <div className="fullname-2" />
                <div className="fullname-3">
                    <input type="text" onChange={this.onChange} name="city" placeholder="Your City" className="fullname-fullname-7" />
                </div>
                <div className="fullname-4" />
                <div className="fullname-5">
                
                <div className="button-size">
                    <button className="button-style" onClick={this.handleClick}>Save</button>
                </div>


                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { addCity })(City);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}