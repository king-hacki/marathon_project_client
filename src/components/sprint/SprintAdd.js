import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, Container, Segment, Icon} from "semantic-ui-react";
import {addSprint} from "../../actions/SprintAction.js"
import {Link} from "react-router-dom"

class SprintAdd extends Component {

    state = {
        title: "",
        startDate: "",
        finishDate: "",
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value})
    onSubmit = () => this.props.addSprint(
        this.state.title, this.state.startDate, this.state.startDate, this.props.match.params.marathonId)

    render() {
        return (
            <Segment>
                <Container>
                    <Form>
                        <Form.Field onChange={this.onChange} width={6}>
                            <label>Title</label>
                            <input type={"text"} name={"title"} placeholder={"Give me sprint Title"} />
                            <label>StartDate</label>
                            <input type={"date"} name={"startDate"}/>
                            <label>FinishDate</label>
                            <input type={"date"} name={"finishDate"}/>
                        </Form.Field>
                        <Button
                            as={Link}
                            to={`/sprint/${this.props.match.params.marathonId}`}
                            onClick={this.onSubmit}
                            content="Create Sprint"
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

export default connect(null, {addSprint})(SprintAdd);