import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserCountry } from "../../actions";
import PropTypes from "prop-types";
import TT from '../../images/TT.png';
import USA from '../../images//usa.png';

class UserCountry extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { 
            country: '',
            USAColor: 'white',
            TTColor: 'white'
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
   }

    handleSelect(e) {
        if (e.target.id === "TT") {
            this.setState({ TTColor: '#fc8f46' });

            //turn back USA to default setting
            this.setState({ USAColor: 'white' })
            this.setState({ country: e.target.id });
        }

        else if (e.target.id === "USA") {
            this.setState({ USAColor: '#fc8f46' });

            //turn back TT to default setting
            this.setState({ TTColor: 'white' })
            this.setState({ country: e.target.id });
        }


    }

/*
    componentWillUpdate(nextProps) {
        if (nextProps.auth) {
            this.context.router.history.push("/home");
        }
    }
*/

    handleClick(){
        this.props.addUserCountry(this.state.country);
        if(this.state.country === "USA"){
            this.context.router.history.push("/zipcode");
        }
        else{
            this.context.router.history.push("/usertag");
        }        
    }


    render() {
        return (
            <div className="background">
                <div className="center-page" />
                <div className="heading-position">
                    <div className="heading-style">
                        Confirm your country
                     </div>
                </div>
                <div className="heading-space-input" />
                <div className="country-position">
                    <div style={{ backgroundColor: this.state.USAColor }} className="country-rectangle" id="USA" onClick={this.handleSelect}>
                        <div className="country-padding" id="USA">
                            <img src={USA} alt="USA" id="USA" className="country-flag" />
                            <div className="country-spacing" id="USA">
                                United States
                            </div>
                        </div>
                    </div>
                </div>

                <div className="country-position">
                    <div style={{ backgroundColor: this.state.TTColor }} className="country-rectangle" id="TT" onClick={this.handleSelect}>
                        <div className="country-padding" id="TT">
                            <img src={TT} alt="TT" id="TT" className="country-flag" />
                            <div id="TT" className="country-spacing">
                                <div id="TT" className="country-font">
                                    Trinidad and Tobago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading-space-input" />
                <div className="country-position">
                    <a href='/home' className="country-help-font">

                        I don't see my country
                    </a>
                </div>
                <div className="heading-space-input" />
                <div className="button-size">
                    <button className="button-style" onClick={this.handleClick}>Continue</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { addUserCountry })(UserCountry);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}