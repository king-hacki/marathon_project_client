import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loading from "../navigation/Loading";
import {Button, Container, Table, Segment, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom"
import {getListOfSprints, deleteSprint} from "./SprintAction.js"


class SprintTable extends Component {

    componentDidMount() {
        this.props.getListOfSprints(this.props.match.params.marathonId)
    }

    tableRow = () => {
        let number = 1
        let marathonId = this.props.match.params.marathonId
        return (
            this.props.sprints.map(sprint => (
                <Table.Row key={sprint.id}>
                    <Table.Cell collapsing={true}>{number++}</Table.Cell>
                    <Table.Cell collapsing={true}>{sprint.id}</Table.Cell>
                    <Table.Cell>{sprint.title}</Table.Cell>
                    <Table.Cell>{sprint.startDate}</Table.Cell>
                    <Table.Cell>{sprint.finishDate}</Table.Cell>
                    <Table.Cell collapsing={true}>
                        <Button as={Link} to={`/task/${sprint.id}`}>Go To Tasks</Button>
                    </Table.Cell>
                    <Table.Cell collapsing={true}>
                        <Button as={Link} to={`/sprint/${marathonId}/update/${sprint.id}`}>Update</Button>
                        <Button onClick={() => this.props.deleteSprint(sprint.id, marathonId)}>Delete</Button>
                    </Table.Cell>
                </Table.Row>
            ))
        )
    }

    render() {
        if (this.props.sprints === undefined)
            return (<Loading/>)
        else return (
            <Segment>
                <Container>
                    <Table color={"green"} compact celled definition sortable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Number</Table.HeaderCell>
                                <Table.HeaderCell>Index</Table.HeaderCell>
                                <Table.HeaderCell>Title</Table.HeaderCell>
                                <Table.HeaderCell>Start Date</Table.HeaderCell>
                                <Table.HeaderCell>Finish Date</Table.HeaderCell>
                                <Table.HeaderCell>Tasks</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.tableRow()}
                        </Table.Body>
                        <Table.Footer fullWidth>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell colSpan="6">
                                    <Button
                                        as={Link}
                                        to={`/sprint/save/${this.props.match.params.marathonId}`}
                                        floated="right"
                                        icon labelPosition="left"
                                        primary
                                        size="small">
                                        <Icon name="print" />
                                        Create New Sprint
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

SprintTable.propTypes = {
    sprints: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
    sprints: state.SprintReducer.sprints
})

export default connect( mapStateToProps, {
    getListOfSprints, deleteSprint
})(SprintTable);