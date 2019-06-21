import React from 'react';
import './App.css';
import Users from './components/Users';

function sayHello() {
  return <h1> Hello Linus</h1>
}

function App() {
  return (
    // sayHello()
    <Users />
  );
}

export default App;
