import React from 'react';

const ItemList = ({articles}) => {
    return ( 
        <div>
            {articles.map(article => <div key={article.id}>{article.quantity } {article.name}</div> )}
        </div>
     );
}
 
export default ItemList;