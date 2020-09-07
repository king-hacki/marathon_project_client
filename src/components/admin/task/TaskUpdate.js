import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, Container, Segment, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom"
import {updateTask} from "./TaskAction";

class TaskUpdate extends Component {

    state = {
        title: "",
        taskDescription: "",
        statusName: "",
    }

    handleSelectChange = (e, {value}) => this.setState({ statusName: value })
    onChange = e => this.setState({ [e.target.name] : e.target.value})
    onSubmit = () => this.props.updateTask(
        this.state.title,
        this.state.taskDescription,
        this.state.statusName,
        this.props.match.params.sprintId,
        this.props.match.params.taskId)

    render() {
        const params = this.props.match.params
        const options = [
            { key: 1, text: "NOT_STARTED", value: "NOT_STARTED" },
            { key: 2, text: "IN_PROGRESS", value: "IN_PROGRESS" },
            { key: 3, text: "END", value: "END" }
        ]
        return (
            <Segment>
                <Container>
                    <Form>
                        <Form.Field onChange={this.onChange} width={6}>
                            <label>ID</label>
                            <input name={"id"} value={params.taskId} disabled/>
                        </Form.Field>
                        <Form.Field onChange={this.onChange} width={6} >
                            <label>Title</label>
                            <input name={"title"} type={"text"} placeholder={"Give me task Title"} />
                        </Form.Field>
                        <Form.Select fluid width={6}
                             label={"Status Name"}
                             options={options}
                             placeholder={"Give me Status"}
                             value={"Task Status"}
                             onChange={this.handleSelectChange}/>
                        <Form.Field onChange={this.onChange} width={10}>
                            <label>Task Description</label>
                            <Form.TextArea name={"taskDescription"} placeholede={"Give me task Description"} rows={8}/>
                        </Form.Field>
                        <Button
                            as={Link}
                            to={`/task/${params.sprintId}`}
                            onClick={this.onSubmit}
                            content="Update Task"
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

export default connect(null, {
    updateTask
})(TaskUpdate);