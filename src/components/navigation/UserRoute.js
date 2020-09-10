import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from "react-redux";

const UserRoute = ({component: Component, isAuthenticated, role, ...rest }) => (
    <Route
        {...rest}
        render={ props => {
            if (role.length !== 0) {
                if (isAuthenticated)
                    return <Component {...props} />
                else
                    return <Redirect to="/login"/>
            }
        }
        }
    />
)

const mapStateToProps = state => ({
    isAuthenticated : state.UserReducer.isAuthenticated,
    role: state.UserReducer.role
});

export default connect(mapStateToProps)(UserRoute);

