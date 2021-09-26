import { Breadcrumb } from 'antd';
import React, { FC } from 'react';

const Header: FC = () => (
    <div className="App">
       <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Projects</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Blogs</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                About Danqing
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
  );
  
  export default Header;