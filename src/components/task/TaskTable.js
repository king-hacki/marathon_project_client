import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loading from "../navigation/Loading";
import PropTypes from 'prop-types';
import {Button, Container, Icon, Segment, Table} from "semantic-ui-react";
import {getListOfTasks, deleteTask} from "./TaskAction.js"
import {Link} from "react-router-dom"


class TaskTable extends Component {

    componentDidMount() {
        this.props.getListOfTasks(this.props.match.params.sprintId)
    }

    tableRow = () => {
        let number = 1
        let sprintId = this.props.match.params.sprintId
        return (
            this.props.tasks.map(task => (
                <Table.Row key={task.id}>
                    <Table.Cell collapsing={true}>{number++}</Table.Cell>
                    <Table.Cell collapsing={true}>{task.id}</Table.Cell>
                    <Table.Cell>{task.title}</Table.Cell>
                    <Table.Cell>{task.statusName}</Table.Cell>
                    <Table.Cell collapsing={true}>
                        <Button as={Link} to={`/progress/${task.id}`}>Go To Progresses</Button>
                    </Table.Cell>
                    <Table.Cell collapsing={true}>
                        <Button as={Link} to={`/task/${sprintId}/update/${task.id}`} >Update</Button>
                        <Button onClick={() => this.props.deleteTask(task.id, sprintId)}>Delete</Button>
                    </Table.Cell>
                </Table.Row>
            ))
        )
    }

    render() {
        if (this.props.tasks === undefined)
            return (<Loading/>)
        else return (
            <Segment>
                <Container>
                    <Table color={"blue"} compact celled definition sortable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Number</Table.HeaderCell>
                                <Table.HeaderCell>Index</Table.HeaderCell>
                                <Table.HeaderCell>Title</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell>Progresses</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.tableRow()}
                        </Table.Body>
                        <Table.Footer fullWidth>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell colSpan={"5"}>
                                    <Button
                                        as={Link}
                                        to={`/task/save/${this.props.match.params.sprintId}`}
                                        floated="right"
                                        icon labelPosition="left"
                                        primary
                                        size="small">
                                        <Icon name="print" />
                                        Create New Task
                                    </Button>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Container>
            </Segment>
        )
    }
}

TaskTable.propTypes = {};

const mapStateToProps = state => ({
    tasks: state.TaskReducer.tasks
})

export default connect(mapStateToProps, {
    getListOfTasks, deleteTask
})(TaskTable);