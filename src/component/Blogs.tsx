import React, { FC } from 'react';
import { Collapse, Row, Col } from 'antd';
import Article from '../component/pages/Article';
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
                <div className="sidebar">
                        {/* <Collapse defaultActiveKey={['1']} onChange={callback}> */}
                        <Collapse defaultActiveKey={['1']}>
                            <Panel header="This is panel header 1" key="1">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </div>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <Article>
                </Article>
                {/* <h1> Blogs </h1> */}
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 2 }}>
                Col
            </Col>
        </Row>
    </>
  );
  
  export default Blogs;
