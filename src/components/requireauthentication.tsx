import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { IState } from "../reducers/index";
import { Component } from "react";

interface Props {
    authenticated: boolean;    
}

export default function(ComposedComponent: any) {
    
    class Authentication extends React.Component<Props, {}> {   
        render() {                
            if (this.props.authenticated) {
                return <ComposedComponent {...this.props} />;
            } else {
                return <Redirect to="/" />;
            }
        }
    }

    function mapStateToProps(state: IState) {    
        return { authenticated: state.authenticated }
    }

    return connect(mapStateToProps)(Authentication);
}