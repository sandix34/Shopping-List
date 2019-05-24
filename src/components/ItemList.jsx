import React from 'react';
import Article from './Article';

const ItemList = ({articles}) => {
    return ( 
        <div>
            {articles.map(article => <Article data={article} key={article.id}/> )}
        </div>
     );
}
 
export default ItemList;