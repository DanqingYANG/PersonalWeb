import React, { FC } from 'react';
import './App.less';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Blogs from './component/blogs/Blogs';
import AboutMe from './component/about_danqing/AboutMe';
import Home from './component/home/Home';
import Projects from './component/projects/Projects';
import Header from './component/header/Header';

const App: FC = () => (
  <div className="App">
    <Header></Header>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/home" exact component={Home}/> 
        <Route path="/projects" exact component={Projects}/> 
        <Route path="/blogs" exact component={Blogs}/> 
        <Route path="/about-danqing" exact component={AboutMe}/> 
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
