import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import PropTypes from "prop-types";
import userpic from '../../images/userPic.png'
import _ from "lodash";
import { db } from "../../config/firebase";

class Home extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);

        const { auth } = this.props;


        //console.log(userTag);
        this.state = {
            displayName: auth.displayName,
            userTag: " "

        };
        
        /**
         *         const { auth } = this.props;
        var userTag = db.ref('users/' + auth.uid + "/description").once("value")
            .then(function (snapshot) {
                snapshot.forEach(function (childData) {
                    if (childData.key === "userTag") {
                        console.log(childData.val());
                    }

                });
            });
         */



        this.goSend = this.goSend.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    goSend(){
        this.context.router.history.push("/send");
    };



    render() {

        
        return (
            <div className="background2">
                <div className="image-center">
                    <div className="image-grow" />
                    <img src={userpic} className="image-style" />
                </div>
                <div className="name-space">
                    <div className="display-name-position" />
                    <div className="display-name-style">
                        {this.state.displayName}
                    </div>
                </div>

                <div>
                    <div className="display-name-position" />
                    <div className="userTag-style">$impactWhit</div>
                </div>
                <div className="name-space"></div>
                <div className="name-space"></div>
                <div className="button-size">
                    <button className="pbutton-style">
                            Profile
                    </button>
                </div>

                <div className="name-space"></div>
                <div className="name-space"></div>

                <div className="button-size">
                    <button className="pbutton-style">
                        Wallet
                    </button>
                </div>


                <div className="name-space"></div>
                <div className="name-space"></div>

                <div className="button-size">
                    <button className="pbutton-style">
                        Activity
                    </button>
                </div>


                <div className="name-space"></div>
                <div className="name-space"></div>

                <div className="button-size">
                    <button className="pbutton-style">
                        Settings
                    </button>
                </div>

                <div className="name-space"></div>
                <div className="name-space"></div>

                <div className="button-size">
                    <button onClick={this.props.signOut} className="pbutton-style">
                        Sign out
                    </button>
                </div>


                <div className="name-space"></div>
                <div className="name-space"></div>

                <div className="button-size">
                    <button onClick={this.goSend} className="button-style">
                        Send Money Now
                    </button>
                </div>


            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(Home);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}