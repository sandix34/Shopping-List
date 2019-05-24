import React, { Component } from 'react';
import Form from './Form';
import ItemList from './ItemList';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  /*
  addArticle = (article) => {
    //on récupère l'état courrant
    let oldArticles = this.state.articles;
    // on crée un id avec Date.now
    article.id = Date.now();
    // on utilise le spread opérator pour ajouter un article et générer un nouveau tableau
    let newArticles = [...oldArticles, article ];
    // on modifie l'état
    this.setState({ articles: newArticles })
    
  }
  */

  addArticle = (article) => {
    this.props.dispatch({
      type: 'ADD_ARTICLE',
      payload: article
    });
  }

  render() {
    return (
      <div>
        <h3>Liste de courses</h3>
        <Form formTitle="Ajouter un article" addArticle={this.addArticle}/>
        <ItemList articles={this.props.articles}/>
      </div>
    );
  }
} //end class

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

//export default App;
export default connect(mapStateToProps)(App);