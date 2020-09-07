import 'fomantic-ui-css/semantic.css';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Header, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <header>
                <Menu>
                    <Menu.Item name='home' as={Link} to='/home'>
                        <Header as={"h1"}>Awesome Study Platform</Header>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item >
                            <Header as={"h4"}>Name</Header>
                        </Menu.Item>
                        <Menu.Item >
                            <Header as={"h4"}>Role</Header>
                        </Menu.Item>
                        <Menu.Item >
                            <Icon name={"user secret"} size={"big"}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </header>
        )
    }
}
export default connect(null)(Navbar)