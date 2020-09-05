import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, Container, Segment, Icon} from "semantic-ui-react";
import {addMarathon, getListOfMarathons} from "./MarathonAction"
import {Link} from "react-router-dom"

class MarathonAdd extends Component {

    state = {
        title: ""
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value})
    onSubmit = () => this.props.addMarathon(this.state.title)

    render() {
        return (
            <Segment>
                <Container>
                    <Form>
                        <Form.Field onChange={this.onChange} width={6}>
                            <label>Title</label>
                            <input name={"title"} placeholder={"Give me marathon Title"} />
                        </Form.Field>
                        <Button
                            as={Link}
                            to={"/marathon/list"}
                            onClick={this.onSubmit}
                            content="Create Marathon"
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

export default connect(null, {addMarathon})(MarathonAdd);