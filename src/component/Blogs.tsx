import React, { FC } from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key:string) {
  console.log(key);
}

const text = `test`;
const Blogs: FC = () => (
    <>
        <div className="sidebar">
            {/* <Collapse defaultActiveKey={['1']} onChange={callback}> */}
            <Collapse defaultActiveKey={['1']}>
            <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
            </Panel>
            </Collapse>
        </div>
    </>
  );
  
  export default Blogs;