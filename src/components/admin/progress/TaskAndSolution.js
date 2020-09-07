import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTaskAndSolutionByProgressId} from "./ProgressAction";
import {Segment, Container, Header} from "semantic-ui-react";
import Loading from "../navigation/Loading";

class TaskAndSolution extends Component {

    componentDidMount() {
        console.log("mount")
        this.props.getTaskAndSolutionByProgressId(this.props.match.params.progressId);
    }

    render() {
        if (this.props.taskAndSolution === undefined)
            return (<Loading/>)
        else
            return (
                <Segment>
                    <Container>
                        <Header as={"h2"}>{this.props.taskAndSolution.task}</Header>
                        <Header as={"h2"}>{this.props.taskAndSolution.solution}</Header>
                    </Container>
                </Segment>
            );
    }
}

TaskAndSolution.propTypes = {};

const mapStateToProps = state => ({
    taskAndSolution: state.ProgressReducer.taskAndSolution
})

export default connect(mapStateToProps, {
    getTaskAndSolutionByProgressId
})(TaskAndSolution);