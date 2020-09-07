import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loading from "../navigation/Loading";
import PropTypes from 'prop-types';
import {Button, Container, Header, Icon, Segment, Table} from "semantic-ui-react";
import {Link} from "react-router-dom"
import { deleteProgress, getProgressesByTask, getProgressesByUser } from "./ProgressAction"

class ProgressTable extends Component {

    componentDidMount() {
        let params = this.props.match.params
        if (params.userId === undefined)
            this.props.getProgressesByTask(params.taskId)
        else
            this.props.getProgressesByUser(params.userId)
    }

    tableRow = () => {
        let number = 1
        return (
            this.props.progresses.map(progress => (
                <Table.Row key={progress.id} >
                    <Table.Cell collapsing>{number++}</Table.Cell>
                    <Table.Cell collapsing>{progress.id}</Table.Cell>
                    <Table.Cell>{progress.taskId}</Table.Cell>
                    <Table.Cell>{progress.userMail}</Table.Cell>
                    <Table.Cell collapsing>
                        <Button as={Link} to={`/solution/${progress.id}`}>Go To Solution</Button>
                    </Table.Cell>
                    <Table.Cell collapsing={true}>
                        <Button onClick={() => this.props.deleteProgress(progress.id)}>Delete</Button>
                    </Table.Cell>
                </Table.Row>
            ))
        )
    }

    render() {
        if (this.props.progresses === undefined)
            return (<Loading/>)
        else return (
            <Segment>
                <Container>
                    <Table color={"blue"} compact celled definition sortable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Number</Table.HeaderCell>
                                <Table.HeaderCell>Index</Table.HeaderCell>
                                <Table.HeaderCell>Task Id</Table.HeaderCell>
                                <Table.HeaderCell>User email</Table.HeaderCell>
                                <Table.HeaderCell>Solution</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.tableRow()}
                        </Table.Body>
                    </Table>
                </Container>
            </Segment>
        )
    }
}

ProgressTable.propTypes = {};

const mapStateToProps = state => ({
    progresses: state.ProgressReducer.progresses
})

export default connect(mapStateToProps, {
    deleteProgress, getProgressesByTask, getProgressesByUser
})(ProgressTable);