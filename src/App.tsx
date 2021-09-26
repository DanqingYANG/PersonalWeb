import React, { FC } from 'react';
import './App.less';
import Header from './component/Header';
import Blogs from './component/Blogs';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AboutMe from './AboutMe';
import Home from './Home';
import Projects from './Projects';

const App: FC = () => (
  <div className="App">
    <Header></Header>
    <Blogs></Blogs>
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