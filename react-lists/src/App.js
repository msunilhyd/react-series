
import React, { Component } from 'react';
import './App.css';
import User from './components/User'
import UniqueId from 'react-html-id'

class App extends Component {


  constructor() {
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      users: [
        { id: this.nextUniqueId(), name: 'John', age: 20, address: 1.45 },
        { id: this.nextUniqueId(), name: 'Peter', age: 30, address: 2.56 },
        { id: this.nextUniqueId(), name: 'Jill', age: 40, address: 3.05 }
      ]
    }
  }

  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({
      users: users
    })
  }


  changeUserName = (id, e) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === id
    })


    const user = Object.assign({}, this.state.users[index]);
    user.name = e.target.value;

    const users = Object.assign([], this.state.users);
    users[index] = user;

    this.setState({
      users: users
    })
  }

  render() {
    return (
      <div className="App" >
        <ul>
          {
            this.state.users.map((user, index) => {
              return (
                <User changeUserName={this.changeUserName.bind(this, user.id)} delEvent={this.deleteUser.bind(this, index)} key={user.id} age={user.age}> {user.name}</User>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
export default App;
