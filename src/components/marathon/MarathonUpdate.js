import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, Container, Segment, Icon} from "semantic-ui-react";
import {updateMarathon, getListOfMarathons} from "../../actions/MarathonAction"
import {Link} from "react-router-dom"

class MarathonUpdate extends Component {

    state = {
        title: ""
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value})
    onSubmit = () => this.props.updateMarathon(this.state.title, this.props.match.params.marathonId)

    render() {
        return (
            <Segment>
                <Container>
                    <Form>
                        <Form.Field onChange={this.onChange} width={6}>
                            <label>ID</label>
                            <input name={"id"} value={this.props.match.params.marathonId} disabled={true}/>
                            <label>Title</label>
                            <input name={"title"} placeholder={"Give me marathon Title"} />
                        </Form.Field>
                        <Button
                            as={Link}
                            to={"/marathon/list"}
                            onClick={this.onSubmit}
                            content="Update Marathon"
                            labelPosition="left"
                            icon="idea"
                            primary
                        />
                    </Form>
                </Container>
            </Segment>
        );
    }
}

export default connect(null,
    {updateMarathon})
(MarathonUpdate);