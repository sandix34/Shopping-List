import React, { Component } from 'react';
import Form from './Form';
import ItemList from './ItemList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h3>Liste de courses</h3>
        <Form />
        <ItemList />
      </div>
    );
  }
}

export default App;