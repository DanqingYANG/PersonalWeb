import React, { FC } from 'react';
import { Breadcrumb, Button } from 'antd';
import './App.less';
import Header from './component/Header'
import Blogs from './component/Blogs';

const App: FC = () => (
  <div className="App">
    <Header></Header>
    <Blogs></Blogs>
  </div>
);

export default App;