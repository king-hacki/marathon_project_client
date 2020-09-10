import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Button, Container, Form, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {registration} from "../../actions/UserAction";

class Registration extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value})
    registration = () => {
        console.log("test")
        this.props.registration(this.state.firstName, this.state.lastName, this.state.email, this.state.password)
    }


    render() {
        return (
            <Segment>
                <Container>
                    <Form>
                        <Form.Field width={6}>
                            <Form.Input name="firstName" onChange={this.onChange} label='Enter First Name' inverted/>
                            <Form.Input name="lastName" onChange={this.onChange} label='Enter Last Name'  inverted/>
                            <Form.Input name="email" onChange={this.onChange} label='Enter Email' inverted/>
                            <Form.Input name="password" onChange={this.onChange} label='Enter Password' type='password' inverted/>
                        </Form.Field>
                        <Button onClick={this.registration} as={Link} to={"/login"}>
                            Registration
                        </Button>
                    </Form>
                </Container>
            </Segment>
        );
    }
}

Registration.propTypes = {};

export default connect(null, {
    registration
})(Registration);