import React, { FC } from 'react';
import Article from './pages/Article';
// import ArticleList from './pages/ArticleList';

const text = `articlearticlearticlearticlearticlearticlearticlearticlearticle`;

const ArticleBlock: FC = () => (
    <>
        <p>
            <a>...End of ArticleBlock</a>
            <Article/>
        </p>
    </>
  );
  
  export default ArticleBlock;