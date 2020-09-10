import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Grid, GridColumn, Header, List, ListContent, ListHeader, ListIcon, ListItem, Segment} from "semantic-ui-react";
import {getMarathonsByUserId} from "../../actions/MarathonAction";
import Loading from "../navigation/Loading";
import {Link} from "react-router-dom";

class UserPage extends Component {

    componentDidMount() {
        if (this.props.marathons.length === 0 && this.props.userId !== null)
            this.props.getMarathonsByUserId(this.props.userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userId !== prevProps.userId)
            this.props.getMarathonsByUserId(this.props.userId)

    }

    render() {
        if (this.props.marathons.length === 0)
            return (<Loading/>)
        else
            return (
                <Segment>
                    <Grid celled>
                        <GridColumn width={12}>
                            <Header as={"h2"}>
                                Hello, {this.props.firstName} {this.props.lastName}.
                                Welcome to Study Platform
                            </Header>
                        </GridColumn>
                        <GridColumn width={4}>
                            <List>
                            {
                                this.props.marathons.map(marathon => (
                                    <ListItem key={marathon.id} >
                                        <ListIcon name="bookmark"/>
                                        <ListContent>
                                            <ListHeader as={Link} to={`/user_page/${marathon.id}`}>
                                                {marathon.title}
                                            </ListHeader>
                                        </ListContent>
                                    </ListItem>
                                ))
                            }
                            </List>
                        </GridColumn>

                    </Grid>
                </Segment>
            );
    }
}

UserPage.propTypes = {};

const mapStateToProps = state => ({
    userId: state.UserReducer.id,
    email: state.UserReducer.email,
    firstName: state.UserReducer.firstName,
    lastName: state.UserReducer.lastName,
    marathons: state.MarathonReducer.marathons
})

export default connect(mapStateToProps, {
    getMarathonsByUserId
})(UserPage);