import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, Container, Segment, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom"
import {updateSprint} from "../../actions/SprintAction"

class SprintUpdate extends Component {

    state = {
        title: "",
        startDate: "",
        finishDate: "",
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value})
    onSubmit = () => this.props.updateSprint(
        this.state.title,
        this.state.startDate,
        this.state.finishDate,
        this.props.match.params.marathonId,
        this.props.match.params.sprintId)

    render() {
        let params = this.props.match.params
        return (
            <Segment>
                <Container>
                    <Form>
                        <Form.Field onChange={this.onChange} width={6}>
                            <label>ID</label>
                            <input name={"id"} value={params.sprintId} disabled/>
                        </Form.Field>
                        <Form.Field onChange={this.onChange} width={6}>
                            <label>Title</label>
                            <input name={"title"} placeholder={"Give me marathon Title"} />
                        </Form.Field>
                        <Form.Field onChange={this.onChange} width={6}>
                            <label>Start Date</label>
                            <input type={"date"} name={"startDate"} placeholder={"Give me start Date"} />
                        </Form.Field>
                        <Form.Field onChange={this.onChange} width={6}>
                            <label>Finish Date</label>
                            <input type={"date"} name={"finishDate"} placeholder={"Give me Finish Date"} />
                        </Form.Field>
                        <Button
                            as={Link}
                            to={`/sprint/${params.marathonId}`}
                            onClick={this.onSubmit}
                            content="Update Sprint"
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

export default connect(null,
    {updateSprint})
(SprintUpdate);