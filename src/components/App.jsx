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
    //this.props.dispatch({type: 'ADD_ARTICLE',payload: article});
    this.props.addArticle(article);

  }

  render() {
    return (
      <div>
        <h3>Liste de courses</h3>
        <Form formTitle="Ajouter un article" addArticle={this.addArticle}/>
        <ItemList articles={this.props.articles} editArticle={this.props.editArticle} />
      </div>
    );
  }
} //end class



const addArticleActionCreator = (article) => {
  return {
    type: 'ADD_ARTICLE',
    payload: article
  }
}

const editArticleActionCreator = (article) => {
  return {
    type: 'EDIT_ARTICLE',
    payload: article
  }
}


const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => {
      dispatch(addArticleActionCreator(article));
    },
    editArticle: (article) => {
      dispatch(editArticleActionCreator(article));
  }
}
}

//export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);