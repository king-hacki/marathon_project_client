import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTaskAndSolutionByProgressId} from "../../actions/ProgressAction";
import {Segment, Container, Header} from "semantic-ui-react";
import Loading from "../navigation/Loading";

class TaskAndSolution extends Component {

    componentDidMount() {
        this.props.getTaskAndSolutionByProgressId(this.props.match.params.progressId);
    }

    render() {
        if (this.props.taskAndSolution === undefined)
            return (<Loading/>)
        else
            return (
                <Segment>
                    <Container>
                        <Segment>
                            <Header as={"h2"}>Task Description: </Header>
                            <Header as={"h4"}>{this.props.taskAndSolution.task}</Header>
                        </Segment>
                        <Segment>
                            <Header as={"h2"}>User Answer: </Header>
                            <Header as={"h4"}>{this.props.taskAndSolution.solution}</Header>
                        </Segment>
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