import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addBankName } from "../../actions";
import PropTypes from "prop-types";

class Bank extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { 
            bankName: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClick(){
        this.props.addBankName(this.state.bankName);
        this.context.router.history.push("/home");

        
    }

    render() {
        return (
            <div className="fullname-fullname-8">
                <div className="fullname-0" />
                <div className="fullname-1">
                    <div className="fullname-please_confirm_your_first_and_last_name_-5">
                        Connect your bank account <br></br> to track your impact
              </div>
                </div>
                <div className="fullname-2" />
                <div className="fullname-3">
                    <input type="text" onChange={this.onChange} name="bankName" placeholder="Your bank name" className="fullname-fullname-7" />
                </div>
                <div className="fullname-4" />
                <div className="fullname-5">
                
                <div className="button-size">
                    <button className="button-style" onClick={this.handleClick}>Add</button>
                </div>


                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { addBankName })(Bank);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}