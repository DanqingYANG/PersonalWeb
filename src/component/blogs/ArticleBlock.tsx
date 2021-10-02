import React, { FC } from 'react';
import Article from './Article';
import Test from './Test';
// import ArticleList from './pages/ArticleList';

const text = `articlearticlearticlearticlearticlearticlearticlearticlearticle`;

const ArticleBlock: FC = () => (
    <>
        <p>
            {/* <Test/> */}
            <Article></Article>
            <a>...End of ArticleBlock</a>
        </p>
    </>
  );
  
export default ArticleBlock;
