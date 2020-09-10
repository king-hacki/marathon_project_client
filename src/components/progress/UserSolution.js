import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getTaskById} from "../../actions/TaskAction";
import Loading from "../navigation/Loading";
import {Container, Form, FormField, Header, Segment} from "semantic-ui-react";
import {createProgress, progressByUserIdAndTaskId, updateProgress} from "../../actions/ProgressAction";

class UserSolution extends Component {

    state = {
        solution: ""
    }

    componentDidMount() {
        this.props.getTaskById(this.props.match.params.taskId)
        this.props.progressByUserIdAndTaskId(this.props.userId, this.props.match.params.taskId)
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value})
    onCreate = () => {
        this.props.createProgress(this.props.match.params.taskId, this.props.userId, this.state.solution)
        window.location.reload()
    }
    onUpdate = () => {
        this.props.updateProgress(this.props.match.params.taskId, this.props.userId, this.state.solution)
        window.location.reload()
    }


            render() {
        if (this.props.userSolution === undefined && this.props.taskId === undefined)
            return (<Loading/>)
        else
            return (
                <Segment>
                    <Container>
                        <Segment>
                            <Header as={"h2"}>Task Description</Header>
                            <Header as={"h4"}>{this.props.taskById.taskDescription}</Header>
                        </Segment>
                        {
                            this.props.userSolution !== "" ?
                                <Container>
                                    <Segment>
                                        <Header as={"h2"}>Your solution</Header>
                                        <Header as={"h4"}>{this.props.userSolution}</Header>
                                    </Segment>
                                    <Form>
                                        <Form.TextArea
                                            onChange={this.onChange}
                                            name={"solution"}
                                            label='Update Solution'
                                            placeholder='Give us new solution...'
                                        />
                                        <Form.Button onClick={this.onUpdate}>Update Solution</Form.Button>
                                    </Form>
                                </Container>
                            :
                                <Container>
                                    <Form>
                                        <Form.TextArea
                                            onChange={this.onChange}
                                            name={"solution"}
                                            label='Give Solution'
                                            placeholder='Give us solution...'
                                        />
                                        <Form.Button onClick={this.onCreate}>Create Solution</Form.Button>
                                    </Form>
                                </Container>
                        }
                    </Container>
                </Segment>
            );
    }
}

const mapStateToProps = state => ({
    userSolution: state.ProgressReducer.userSolution,
    taskById: state.TaskReducer.taskById,
    userId: state.UserReducer.id
})

export default connect(mapStateToProps, {
    getTaskById, progressByUserIdAndTaskId, createProgress, updateProgress
})(UserSolution);