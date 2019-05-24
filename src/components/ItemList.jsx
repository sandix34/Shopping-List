import React from 'react';
import Article from './Article';

// TODO: corriger ==> Uncaught TypeError: Cannot read property 'id' of undefined

const ItemList = (props) => {
    return ( 
        <div>
            {props.articles.map(article => <Article data={article} key={article.id} editArticle={props.editArticle}/> )}
        </div>
     );
}
 
export default ItemList;