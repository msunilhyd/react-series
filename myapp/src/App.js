import React, { Component } from 'react';
import Ninjas from './Ninjas';

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
  render() {
    return (
      <div className="App" >
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
