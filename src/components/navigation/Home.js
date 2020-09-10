import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Card, Icon, Image, Segment, Container, CardContent, CardHeader} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getListOfMarathons } from "../../actions/MarathonAction"
import { getListOfUsers } from "../../actions/UserAction"

class Home extends Component {

    componentDidMount() {
        console.log("home mount")
    }

    render() {
        return (
            <Segment>
                <Container>
                    <Card.Group centered doubling itemsPerRow={2} stackable textAlign={"center"}>
                        <Card>
                            <CardContent>
                                <CardHeader
                                    as={Link}
                                    to={"/marathon/list"}>
                                    All Marathons
                                </CardHeader>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <CardHeader
                                    as={Link}
                                    to={"/user/list"}>
                                    All Users
                                </CardHeader>
                            </CardContent>
                        </Card>
                    </Card.Group>
                </Container>
            </Segment>
        );
    }
}

Home.propTypes = {};

export default connect(null, {
    getListOfMarathons, getListOfUsers
})(Home);