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
        this.goTransactions = this.goTransactions.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    goSend(){
        this.context.router.history.push("/send");
    };

    goTransactions(){
        this.context.router.history.push("/transactions");
    };



    render() {

        
        return (
            <div className="success-success-5">
                <div className="success-0" />
                <div className="success-1">
                    <div className="success-1-0" />
                    <div className="success-zip-9">Save The Water</div>
                    <div className="success-1-2" />
                </div>
                <div className="success-2" />
                <div className="success-3">
                    <img src="https://ucarecdn.com/89d8c931-6cd2-45a1-8d63-ddfe7aed2fdb/" className="success-image_4" />
                </div>
                <div className="success-4" />
                <div className="success-5">
                    <div className="success-zip-3">
                        {"World Water Day, marked each year on March 22, is an opportunity to celebrate the immense progress made to improve access to clean water: between 1990 and 2015, 2.3 billion people gained access to a better, safer source of water is being Processed"}
                    </div>
                </div>
                <div className="success-6" />
                <div className="success-7">
                    <div className="success-line_2" />
                </div>
                <div className="success-8" />
                <div className="success-9">
                    <div className="success-zip-0">Average Impact Rating </div>
                </div>
                <div className="success-10" />
                <div className="success-11">
                    <div className="success-oval_3">
                        <div className="success-11-0-0">
                            <div className="success-80">{"80%"}</div>
                        </div>
                    </div>
                </div>
                <div className="success-12" />
                <div className="success-13">
                    <div className="success-13-0" />
                    <div className="success-rectangle-8">
                        <div className="success-13-1-0">
                            <div className="success-sign_in-9">Donate</div>
                        </div>
                    </div>
                    <div className="success-13-2" />
                </div>
                <div className="success-14" />
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