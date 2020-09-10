import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from "react-redux";

const AdminRoute = ({component: Component, isAuthenticated, role, ...rest }) => (
    <Route
        {...rest}
        render={ props => {
            if (role.length !== 0) {
                if (isAuthenticated && role.includes("ROLE_ADMIN")) {
                    console.log("here_2")
                    return <Component {...props} />
                }
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

export default connect(mapStateToProps)(AdminRoute);

