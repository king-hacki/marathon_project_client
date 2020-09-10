import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Container, Form, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {signIn} from "../../actions/UserAction";
import {Link, Redirect} from "react-router-dom";

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value})
    onSignIn = () => this.props.signIn(this.state.email, this.state.password)

    render() {
        if (this.props.isAuthenticated) {
            console.log(this.props.role)
            console.log(this.props.role.includes("ROLE_ADMIN"))
            if (this.props.role.includes("ROLE_ADMIN")) {
                console.log("home")
                return (<Redirect to="/home"/>)
            }
            else {
                console.log("user_page")
                return (<Redirect to="/user_page"/>)
            }
        }
        return (
            <Segment>
                <Container>
                    <Form>
                        <Form.Field width={6}>
                            <Form.Input name="email" onChange={this.onChange} label='Enter Login' inverted/>
                            <Form.Input name="password" onChange={this.onChange} label='Enter Password' type='password' inverted/>
                        </Form.Field>
                        <Button onClick={this.onSignIn}>
                            Sign In
                        </Button>
                        <Button as={Link} to={"/registration"}>
                            Registration
                        </Button>
                    </Form>
                </Container>
            </Segment>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.UserReducer.isAuthenticated,
    role: state.UserReducer.role,
})

export default connect(mapStateToProps, {
    signIn
})(Login);