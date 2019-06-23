import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'techsith'
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeNameFromInput = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="App" >
        <br /> <br />
        <button onClick={() => this.changeName('awesome Linus')}>Change state with Anonymouse function</button>
        <button onClick={this.changeName.bind(this, 'Awesome TechSith')}>Change state with bind</button>
        <br /> <br />
        <input type="text" onChange={this.changeNameFromInput} value={this.state.name} />
        <br /> <br />
        <div>{this.state.name}</div>
      </div >
    );
  }
}

export default App;
