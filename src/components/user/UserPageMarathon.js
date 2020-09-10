import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Loading from "../navigation/Loading";
import {
    Grid,
    GridColumn,
    List,
    ListContent,
    ListHeader,
    ListIcon,
    ListItem,
    Segment,
    ListDescription,
    ListList
} from "semantic-ui-react";
import {getListOfSprints} from "../../actions/SprintAction";
import {Link} from "react-router-dom";
import {getMarathonsByUserId} from "../../actions/MarathonAction";
import {getListOfTasks} from "../../actions/TaskAction";
import {progressByUserIdAndTaskId} from "../../actions/ProgressAction";


class UserPageMarathon extends Component {

    state = {
        sprintId: undefined
    }

    componentDidMount() {
        this.props.getListOfSprints(this.props.match.params.marathonId);
        if (this.props.marathons.length === 0 && this.props.userId !== null)
            this.props.getMarathonsByUserId(this.props.userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userId !== prevProps.userId)
            this.props.getMarathonsByUserId(this.props.userId)
    }

    getSprints = sprintId => {
        this.setState({
            sprintId: sprintId
        })
        this.props.getListOfTasks(sprintId);
    }

    getProgressByUserIdAndTaskId = taskId => this.props.progressByUserIdAndTaskId(this.props.userId, taskId)

    render() {
        if (this.props.marathons.length === 0 || this.props.sprints.length === 0)
            return (<Loading/>)
        else
            return (
                <Segment>
                    <Grid celled>
                        <GridColumn width={12}>
                            <List>
                                {
                                    this.props.sprints.map(sprint => (
                                        <ListItem key={sprint.id} as={"a"} onClick={() => this.getSprints(sprint.id)}>
                                            {
                                                this.state.sprintId === sprint.id ?
                                                    <ListIcon verticalAlign={"middle"} name={"caret down"} size={"big"}/>
                                                    :
                                                    <ListIcon verticalAlign={"middle"} name={"caret right"} size={"big"}/>
                                            }
                                            <ListContent>
                                                <ListHeader as={"h3"}>{sprint.title}</ListHeader>
                                                <ListDescription>
                                                    {sprint.startDate} —— {sprint.finishDate}
                                                </ListDescription>
                                            </ListContent>
                                            {
                                                this.state.sprintId === sprint.id && this.props.tasks.length !== 0 ?
                                                    <ListList>
                                                        {
                                                            this.props.tasks.map(task => (
                                                                <ListItem
                                                                    key={task.id}
                                                                    as={Link}
                                                                    to={`/solution/user/${task.id}`}
                                                                    onClick={() => this.getProgressByUserIdAndTaskId(task.id)}
                                                                >
                                                                    <ListIcon verticalAlign={"middle"} name={"caret right"} size={"big"}/>
                                                                    <ListContent>
                                                                        <ListHeader as={"h3"}>{task.title}</ListHeader>
                                                                        <ListDescription>
                                                                           Status: {task.status}
                                                                        </ListDescription>
                                                                    </ListContent>
                                                                </ListItem>
                                                            ))
                                                        }
                                                    </ListList>
                                                :
                                                    ""
                                            }
                                        </ListItem>
                                    ))
                                }
                            </List>
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

UserPageMarathon.propTypes = {};

const mapStateToProps = state => ({
    marathons: state.MarathonReducer.marathons,
    userId: state.UserReducer.id,
    sprints: state.SprintReducer.sprints,
    tasks: state.TaskReducer.tasks
})

export default connect(mapStateToProps, {
    getListOfSprints, getMarathonsByUserId, getListOfTasks, progressByUserIdAndTaskId
})(UserPageMarathon);