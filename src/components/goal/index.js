import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addGoal} from "../../actions";
import PropTypes from "prop-types";

class Goal extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { 
            impact: '',
            op: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    handleClick(){
        this.props.addGoal(this.state.impact, this.state.op);

        //Execute smart contract for this non profit



        


        this.context.router.history.push("/website");
    }

    render() {
        return (
            <div className="login-login-7">
                <div className="login-0" />
                <div className="login-1">
                    <div className="login-1-0" />
                    <div className="login-sign_in_to_seampay_-5">
                        What is your Impact Goals?
                        <br/>
                        <br/>
                        <em> Enter a number </em>
                        <br />
                    </div>
                    <div className="login-1-2" />
                </div>
                <div className="login-2" />
                <div className="login-3">
                    <input onChange={this.onChange} type="number" placeholder="Minimum Impact % Goal" name="impact" className="login-username-2" />
                </div>
                <div className="login-4" />
                <div className="login-5">
                    <input type="number" onChange={this.onChange} placeholder="Maximum Operation Cost % Goal" name="op" className="login-password-3" />
                </div>
                <div className="login-6" />
                <div className="button-size">
                    <button className="button-style" onClick={this.handleClick}>Execute Smart Contract</button>
                </div>               
                <div className="login-8" />
                <div className="login-10" />
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { addGoal })(Goal);

//onClick={this.props.signIn}