import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserTag } from "../../actions";
import PropTypes from "prop-types";

class Usertag extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { 
            userTag: ''
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

    handleClick(){
        this.props.addUserTag(this.state.userTag);
        this.context.router.history.push("/home");
    }

    render() {
        return (
            <div className="component_1-component_1">
                <div className="component_1-0" />
                <div className="component_1-1">
                    <div className="component_1-choose_a_seamtag_your_unique_name_for_getting_paid_by_anyone_-7">
                        Choose a SeamTag, your unique name for getting paid by anyone
              </div>
                </div>
                <div className="component_1-2" />
                <div className="component_1-3">
                    <input type="text" name="userTag" onChange={this.onChange} placeholder="seampay.me/$" className="component_1-seamtag-6" />
                </div>
                <div className="component_1-4" />
                <div className="component_1-5">

                    <div className="button-size">
                        <button className="button-style" onClick={this.handleClick}>Next</button>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { addUserTag })(Usertag);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}