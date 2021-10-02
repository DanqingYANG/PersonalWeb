import React, { FC } from 'react';
import { Collapse, Row, Col } from 'antd';
import Article from '../component/pages/Article';
import ArticleBlock from './ArticleBlock';
const { Panel } = Collapse;

function callback(key:string) {
  console.log(key);
}
const text = `test`;
const articles = [];

const Blogs: FC = () => (
    <>
        <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }}>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <ArticleBlock/>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 2 }}>
            </Col>
        </Row>
    </>
  );
  
  export default Blogs;
