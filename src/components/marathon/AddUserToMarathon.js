import React, {Component} from 'react';
import {connect} from "react-redux";
import {getListOfUsers} from "../../actions/UserAction";
import {Button, Container, Form, Header, Segment} from "semantic-ui-react";
import {addUserToMarathon} from "../../actions/MarathonAction";
import Loading from "../navigation/Loading";
import {Link} from "react-router-dom";

class AddUserToMarathon extends Component {

    state = {
        email: "",
    }

    componentDidMount() {
        this.props.getListOfUsers()
    }

    handleSelectChange = (e, {value}) => this.setState({ email: value })
    onSubmit = () => this.props.addUserToMarathon(this.state.email, this.props.match.params.marathonId)

    render() {
        if (this.props.users === undefined || this.props.marathons === undefined) {
            return (<Loading/>)
        } else {
            let options = []
            let i = 1
            for (const user of this.props.users) {
                options.push({
                    key: i,
                    text: user.email,
                    value: user.email
                })
                i++
            }
            return (
                <Segment>
                    <Container>
                        <Form>
                            <Form.Select fluid width={6}
                                 label={"Email"}
                                 options={options}
                                 placeholder={"Give me Email"}
                                 onChange={this.handleSelectChange}/>
                            <Button
                                as={Link}
                                to={"/marathon/list"}
                                onClick={this.onSubmit}
                                content="Add User"
                                labelPosition="left"
                                icon="idea"
                                primary
                            />
                        </Form>
                    </Container>
                </Segment>
            );
        }
    }
}

const mapStateToProps = state => ({
    users: state.UserReducer.users,
    marathons: state.MarathonReducer.marathons,
})

export default connect(mapStateToProps, {
    getListOfUsers, addUserToMarathon
})(AddUserToMarathon);