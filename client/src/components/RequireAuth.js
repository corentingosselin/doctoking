import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {

    class RequireAuth extends Component {

        componentWillMount() {
            if(!this.props.auth.isLoggedIn) {
                this.props.history.push('/login');
            }
        };

        componentWillUpdate(nextProps) {
            if(!nextProps.auth.isLoggedIn) {
                this.props.history.push('/login');
            }
        };

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

   const mapStateToProps = (state) => {
    return {
        auth: state.authState
    };
};

    return connect(mapStateToProps)(RequireAuth);
}