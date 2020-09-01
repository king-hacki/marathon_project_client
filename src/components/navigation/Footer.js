import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Grid, Header, List, Icon, Container, Segment} from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return (
            <Segment vertical>
                <Container textAlign={"center"}>
                    <Grid divided  stackable columns={"3"}>
                        <Grid.Column>
                            <Header as={"h4"} content={"Callback"}/>
                            <List link >
                                <List.Item icon={"mail"} as={"a"} content={"zakharkostyshyn@gmail.com"}/>
                                <List.Item icon={"skype"} as={"a"} content={"zakharkostyshyn"}/>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as={"h4"} content={"Github project"} />
                            <Icon name={"github"} size={"big"} />
                            <List link >
                                <List.Item as={"a"} content={"Server side"}/>
                                <List.Item as={"a"} content={"Client size"}/>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as={"h4"} content={"Description"}/>
                            <p>Awesome Studying Platform</p>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}

export default  connect(null)(Footer)