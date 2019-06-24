
import React, { Component } from 'react';
import User from './Users';

class Users extends Component {
    render() {
        return (
            <div>
                <User John />
                <User Peter />
                <User Jill />
            </div>
        )
    }
}

export default Users;