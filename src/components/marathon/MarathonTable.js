import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getListOfMarathons, deleteMarathon} from "./MarathonAction.js"
import PropTypes from 'prop-types';
import Loading from "../navigation/Loading";
import { Table, Button, Segment, Icon, Container } from 'semantic-ui-react'
import {Link} from "react-router-dom"


class MarathonTable extends Component {

    componentDidMount() {
        this.props.getListOfMarathons()
    }

    tableRow = () => {
        let number = 1
        return (
            this.props.marathons.map(marathon => (
                <Table.Row key={marathon.id}>
                    <Table.Cell collapsing={true}>{number++}</Table.Cell>
                    <Table.Cell collapsing={true}>{marathon.id}</Table.Cell>
                    <Table.Cell>{marathon.title}</Table.Cell>
                    <Table.Cell collapsing={true}>
                        <Button as={Link} to={`/sprint/${marathon.id}`}>Go To Sprints</Button>
                    </Table.Cell>
                    <Table.Cell collapsing={true}> <Button>Go To Users</Button></Table.Cell>
                    <Table.Cell collapsing={true}>
                        <Button as={Link} to={`/marathon/update/${marathon.id}`}>Update</Button>
                        <Button onClick={() => this.props.deleteMarathon(marathon.id)}>Delete</Button>
                    </Table.Cell>
                </Table.Row>
            ))
        )
    }

    render() {
         if (this.props.marathons.length === undefined)
             return (<Loading/>)
         else return (
             <Segment>
                 <Container>
                     <Table color={"brown"} compact celled definition sortable>
                         <Table.Header>
                             <Table.Row>
                                 <Table.HeaderCell>Number</Table.HeaderCell>
                                 <Table.HeaderCell>Index</Table.HeaderCell>
                                 <Table.HeaderCell>Title</Table.HeaderCell>
                                 <Table.HeaderCell>Sprints</Table.HeaderCell>
                                 <Table.HeaderCell>Users</Table.HeaderCell>
                                 <Table.HeaderCell>Actions</Table.HeaderCell>
                             </Table.Row>
                         </Table.Header>
                         <Table.Body>
                             {this.tableRow()}
                         </Table.Body>
                         <Table.Footer fullWidth>
                             <Table.Row>
                                 <Table.HeaderCell />
                                 <Table.HeaderCell colSpan="5">
                                     <Button
                                         as={Link}
                                         to={"/marathon/save"}
                                         floated="right"
                                         icon labelPosition="left"
                                         primary
                                         size="small">
                                         <Icon name="table" />
                                         Create New Marathon
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

MarathonTable.propTypes = {
    marathons: PropTypes.array
};

const mapStateToProps = state => ({
    marathons: state.MarathonReducer.marathons
})

export default connect( mapStateToProps,
    {getListOfMarathons, deleteMarathon})
(MarathonTable);

