import React, { Component } from 'react'
import SingleUser from './SingleUser';

class Users extends Component {

    state = {
        name: 'Sunil'
    };

    changeName = (newName) => {
        this.setState({
            name = newName
        })
    }

    makeMeYounger = () => {
        const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser
        })
        this.setState({
            newState
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.makeMeYounger}>Make me 10 Years younger</button>
                <button onClick={this.changeName('Linus')}></button>
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user) => {
                        return <SingleUser name={user.name} age={user.age} />
                    })
                }
            </div>
        );
    }
}
export default Users;