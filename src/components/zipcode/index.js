import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addZipcode  } from "../../actions";
import PropTypes from "prop-types";

class Zipcode extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { 
            zipcode: ''
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
        this.props.addZipcode (this.state.zipcode);
        this.context.router.history.push("/country");
    }

    render() {
        return (
            <div className="component_2-component_2">
                <div className="component_2-0" />
                <div className="component_2-1">
                    <div className="component_2-1-0" />
                    <div className="component_2-zip-3">
                        <div>Please enter your Zip Code</div>
                        <br />
                    </div>
                    <div className="component_2-1-2" />
                </div>
                <div className="component_2-2" />
                <div className="component_2-3">
                    <input type="text" name="zipcode" onChange={this.onChange} placeholder="ZIP Code" className="component_2-zipcode-6" />
                </div>
                <div className="component_2-4" />
                <div className="component_2-5">
                    <div className="button-size">
                        <button className="button-style" onClick={this.handleClick}>Confirm</button>
                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { addZipcode })(Zipcode);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}