import 'fomantic-ui-css/semantic.css';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Header, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {logout} from "../../actions/UserAction";

class Navbar extends Component {

    logoutButton = () => this.props.logout()

    render() {
        return (
            <header>
                <Menu>
                    <Menu.Item name='home' as={Link} to='/login'>
                        <Header as={"h1"}>Study Platform</Header>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to='/login' onClick={this.logoutButton}>
                            <Icon name={"sign out"} size={"big"}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </header>
        )
    }
}

export default connect(null, {
    logout
})(Navbar)