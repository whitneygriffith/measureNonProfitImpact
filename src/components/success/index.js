import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../../actions";
import PropTypes from "prop-types";

class Success extends Component {
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
            <div className="success-success-4">
                <div className="success-0" />
                <div className="success-1">
                    <div className="success-zip-2">Success</div>
                </div>
                <div className="success-2" />
                <div className="success-3">
                    <div className="success-zip-3">
                        Payment is being Processed
              </div>
                </div>
                <div className="success-4" />

                <div className="subutton-size">
                    <button onClick={this.handleClick} className="subutton-style">Dashboard</button>
                </div>

                <div className="success-6" />
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { addTransaction })(Success);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}