import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../../actions";
import PropTypes from "prop-types";

class Send extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            to: '',
            for: ''
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

    handleClick() {
        this.props.addTransaction(this.state.amount, this.state.to, this.state.for);
        this.context.router.history.push("/success");
    }

    render() {
        return (
            <div className="send-send-9">
                <div className="send-0">
                    <div className="send-send_up_to_-6">Send up to </div>
                </div>
                <div className="send-1" />
                <div className="send-2">
                    <div className="send-2-0" />
                    <input type="text" name="amount" onChange={this.onChange} placeholder="99,999" className="send-amount-5" />
                    <div className="send-2-2" />
                </div>
                <div className="send-3" />
                <div className="send-4">
                    <div className="send-in_any_transaction_-1">
                        in any transaction
              </div>
                </div>
                <div className="send-5" />
                <div className="send-6">
                    <div className="send-6-0" />
                    <div className="send-6-1">
                        <div className="send-6-1-0">
                            <div className="send-to_-9">{"To:"}</div>
                        </div>
                    </div>
                    <div className="send-6-2" />
                    <input type="text" name="to" onChange={this.onChange} placeholder="Name,  $SeamTag, SMS, Email" className="send-zipcode-5" />
                    <div className="send-6-4" />
                </div>
                <div className="send-7" />
                <div className="send-8">
                    <div className="send-8-0" />
                    <div className="send-8-1">
                        <div className="send-8-1-0">
                            <div className="send-for_-7">{"For:"}</div>
                        </div>
                    </div>
                    <div className="send-8-2" />
                    <input type="text" name="for" onChange={this.onChange} placeholder="Dinner, Rent, Business, etc. " className="send-zipcode-9" />
                    <div className="send-8-4" />
                </div>
                <div className="send-9" />
                <div className="button-size">
                    <button onClick={this.handleClick} className="sbutton-style">Send</button>
                </div>

                <div className="send-11" />
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { addTransaction })(Send);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}