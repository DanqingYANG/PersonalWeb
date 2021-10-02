import { Breadcrumb } from 'antd';
import React, { FC } from 'react';
import  './header.css';

const Header: FC = () => (
    <div className="hd">
       <Breadcrumb>
            <Breadcrumb.Item>
                <a href="/home">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/projects">Projects</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/blogs">Blogs</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/about-danqing">About Danqing</a>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
  );
  
  export default Header;