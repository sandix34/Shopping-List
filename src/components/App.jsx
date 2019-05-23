import React, { Component } from 'react';
import Form from './Form';
import ItemList from './ItemList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  addArticle = (article) => {
    console.log('article vu par le parent app', article);
    
  }

  render() {
    return (
      <div>
        <h3>Liste de courses</h3>
        <Form formTitle="Ajouter un article" addArticle={this.addArticle}/>
        <ItemList />
      </div>
    );
  }
}

export default App;