import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp, addUserBlockchainAccount } from "../../actions";
import PropTypes from "prop-types";
import DisJS from "@dispatchlabs/disnode-sdk";

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
            this.context.router.history.push("/legalname");
            this.props.addUserBlockchainAccount('aa5dec08b40dbf2f5c1873d13cbe5962d5793b79', '1b42a7a6ad1b842a59ac51c25eb4c81835f58e4a14b16fc614e5714dda1df1e1');
        }
    }

    handleClick(){
        this.props.signUp(this.state.username, this.state.password);
        // Create an account using an object
        let account = new DisJS.Account({
            name: this.state.username,
            address: 'aa5dec08b40dbf2f5c1873d13cbe5962d5793b79',
            privateKey: '1b42a7a6ad1b842a59ac51c25eb4c81835f58e4a14b16fc614e5714dda1df1e1'
        });

        console.log(account);

        /**
         * randomly generate an account
         
        let account = new DisJS.Account();
        account.init();
        console.log(account);

        account.refresh()
        .then(() => {
            console.log(account);
        })
        .catch((err) => {
            console.error(err);
        });
         */



        
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

export default connect(mapStateToProps, { signUp, addUserBlockchainAccount })(Signup);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}