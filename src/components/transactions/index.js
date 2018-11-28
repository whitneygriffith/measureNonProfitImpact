import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../../actions";
import PropTypes from "prop-types";

class Transactions extends Component {
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
        this.context.router.history.push("/home");
    }

    render() {
        return (
            <div className="transactions-transactions-2">
                <div className="transactions-0" />
                <div className="transactions-1">
                    <div className="transactions-zip-1">Transactions</div>
                </div>
                <div className="transactions-2" />
                <div className="transactions-3">
                    <div className="transactions-3-0" />
                    <img src="https://ucarecdn.com/7d4ed4e2-2d0e-4ac3-8696-9a558d9b03de/" className="transactions-image_3" />
                    <div className="transactions-3-2" />
                </div>
                <div className="transactions-4">
                    <div className="transactions-4-0" />
                    <div className="transactions-whitney_griffith_-7">
                        Whitney Griffith
              </div>
                    <div className="transactions-4-2" />
                </div>
                <div className="transactions-5">
                    <div className="transactions-5-0" />
                    <div className="transactions-_impactwhit_-8">
                        $impactWhit
              </div>
                    <div className="transactions-5-2" />
                </div>
                 <div className="transactions-7">
                    <div className="transactions-7-0" />
                    <div className="transactions-transaction-history-21">
                        <div className="transactions-7-1-0">
                            <img src="https://ucarecdn.com/7d4ed4e2-2d0e-4ac3-8696-9a558d9b03de/" className="transactions-image_3-1" />
                            <div className="transactions-7-1-0-1" />
                            <div className="transactions-7-1-0-2">
                                <div className="transactions-7-1-0-2-0">
                                    <div className="transactions-whitney_griffith_-0">
                                        Whitney Griffith
                              </div>
                                </div>
                            </div>
                            <div className="transactions-7-1-0-3" />
                            <div className="transactions-7-1-0-4">
                                <div className="transactions-7-1-0-4-0">
                                    <div className="transactions-7-1-0-4-0-0">
                                        <div className="transactions-description_-9">
                                            Description
                                  </div>
                                        <div className="transactions-rectangle_2-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="transactions-7-1-0-5" />
                            <div className="transactions-7-1-0-6">
                                <div className="transactions-7-1-0-6-0">
                                    <div className="transactions-today_-7">Today</div>
                                </div>
                            </div>
                            <div className="transactions-7-1-0-7" />
                            <div className="transactions-7-1-0-8">
                                <div className="transactions-7-1-0-8-0">
                                    <div className="transactions-_3"> $10</div>
                                </div>
                            </div>
                            <div className="transactions-7-1-0-9" />
                        </div>
                    </div>
                    <div className="transactions-7-2" />
                </div>
                <div className="transactions-8" />

                <div className="tbutton-size">
                    <button onClick={this.handleClick} className="tbutton-style">Dashboard</button>
                </div>
  
                <div className="transactions-10" />
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { addTransaction })(Transactions);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}