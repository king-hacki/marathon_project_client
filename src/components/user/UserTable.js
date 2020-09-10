import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loading from "../navigation/Loading";
import PropTypes from 'prop-types';
import {Button, Container, Icon, Segment, Table} from "semantic-ui-react";
import {Link} from "react-router-dom"
import {getListOfUsers, deleteUser, getUsersByMarathonId} from "../../actions/UserAction";


class UserTable extends Component {

    componentDidMount() {
        let params = this.props.match.params
        if (params.marathonId !== undefined)
            this.props.getUsersByMarathonId(params.marathonId)
        else this.props.getListOfUsers()
    }

    tableRow = () => {
        let number = 1
        return (
            this.props.users.map(user => (
                <Table.Row key={user.id}>
                    <Table.Cell collapsing={true}>{number++}</Table.Cell>
                    <Table.Cell collapsing={true}>{user.id}</Table.Cell>
                    <Table.Cell>{user.firstName}</Table.Cell>
                    <Table.Cell>{user.lastName}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell collapsing={true}>
                        <Button
                            as={Link}
                            to={`/progress/user/${user.id}`}>
                            Go To Progresses
                        </Button>
                    </Table.Cell>
                    <Table.Cell collapsing={true}>
                        <Button onClick={() => this.props.deleteUser(user.id)}>Delete</Button>
                    </Table.Cell>
                </Table.Row>
            ))
        )
    }

    render() {
        if (this.props.users === undefined)
            return (<Loading/>)
        else return (
            <Segment>
                <Container>
                    <Table color={"blue"} compact celled definition sortable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Number</Table.HeaderCell>
                                <Table.HeaderCell>Index</Table.HeaderCell>
                                <Table.HeaderCell>First Name</Table.HeaderCell>
                                <Table.HeaderCell>Second Name</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>Progresses</Table.HeaderCell>
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

UserTable.propTypes = {};

const mapStateToProps = state => ({
    users: state.UserReducer.users
})

export default connect(mapStateToProps, {
    getListOfUsers, deleteUser, getUsersByMarathonId
})(UserTable);