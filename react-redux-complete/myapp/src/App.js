import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  state = {
    ninjas: [
      {
        name: 'sunil', age: 27, belt: 'black', id: 1
      },
      {
        name: 'praveen', age: 28, belt: 'white', id: 2
      },
      {
        name: 'latha', age: 30, belt: 'green', id: 3
      }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id != id;
    });
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App" >
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja}></AddNinja>
      </div>
    );
  }
}

export default App;
