import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from 'semantic-ui-react'


class Loading extends Component {
    render() {
        return (
            <Loader indeterminate>Loading</Loader>
        );
    }
}

export default connect(null)(Loading);
