import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addGoal} from "../../actions";
import PropTypes from "prop-types";
import DisNodeSDK from "@dispatchlabs/disnode-sdk";
//import {db} from "../../config/firebase";

class Goal extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        const { auth } = this.props;
    
        this.state = { 
            impact: '',
            op: '',
            uid: auth.uid
        };


        

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    handleClick(){
        this.props.addGoal(this.state.impact, this.state.op);

        let account = new DisNodeSDK.Account({
            address: 'aa5dec08b40dbf2f5c1873d13cbe5962d5793b79',
            privateKey: '1b42a7a6ad1b842a59ac51c25eb4c81835f58e4a14b16fc614e5714dda1df1e1'
        });
/*
        let compiled = DisNodeSDK.Transaction.compileSource('contract GoalSet {address owner; struct  goal { uint impactMinGoal; uint operationalMaxGoal; string nonprofit;} goal myGoal; constructor() public { owner = msg.sender; myGoal.impactMinGoal = 80; myGoal.operationalMaxGoal = 20;}function returnImpactGoal() public view returns(uint){return myGoal.impactMinGoal;}function returnOpGoal() public view returns(uint){return myGoal.operationalMaxGoal;}}');
        let contract = account.createContract(compiled.contracts[0].bytecode, compiled.contracts[0].abi, 5);
        contract.whenStatusEquals('Ok')
            .then(() => {
                account.executeContract(contract, 'g', [], compiled.contracts[0].abi, 5);
            })
            .catch((err) => {
                console.error(err);
            });
        //Execute contract
*/
        /**
         pragma solidity >=0.4.22 <0.6.0;
contract GoalSet {

    address owner;

    struct  goal {
    uint impactMinGoal;
    uint operationalMaxGoal;
    string nonprofit;
    }

    goal myGoal;


    constructor() public {
    owner = msg.sender;


    myGoal.impactMinGoal = 80;
    myGoal.operationalMaxGoal = 20;



    }

    function returnImpactGoal() public view returns(uint){
        return myGoal.impactMinGoal;
    }

    function returnOpGoal() public view returns(uint){
        return myGoal.operationalMaxGoal;
    }

} 
         */
        this.context.router.history.push("/bank");
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