import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addStreet } from "../../actions";
import PropTypes from "prop-types";

class Street extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { 
            street: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);

    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
/*
    componentWillUpdate(nextProps) {
        if (nextProps.auth) {
            this.context.router.history.push("/home");
        }
    }
*/

    handleClick(){
        this.props.addStreet(this.state.street);
        this.context.router.history.push("/city");
    }

    render() {
        return (
            <div className="fullname-fullname-8">
                <div className="fullname-0" />
                <div className="fullname-1">
                    <div className="fullname-please_confirm_your_first_and_last_name_-5">
                        What is your <br></br>street address?
              </div>
                </div>
                <div className="fullname-2" />
                <div className="fullname-3">
                    <input type="text" onChange={this.onChange} name="street" placeholder="Street Address" className="fullname-fullname-7" />
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

export default connect(mapStateToProps, { addStreet })(Street);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}