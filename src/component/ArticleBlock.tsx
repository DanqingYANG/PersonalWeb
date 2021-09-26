import React, { FC } from 'react';
import Article from './pages/Article';
// import ArticleList from './pages/ArticleList';

const text = `articlearticlearticlearticlearticlearticlearticlearticlearticle`;

const ArticleBlock: FC = () => (
    <>
        <p>
            <Article></Article>
            {/* <ArticleList></ArticleList> */}
            <a>end of article</a>
        </p>
    </>
  );
  
  export default ArticleBlock;