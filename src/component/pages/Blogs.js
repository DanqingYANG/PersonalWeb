import React from 'react'
import Article from './Article'
// import Articles from './Articles'
// import '../../App.css'
import './Blogs.css'
import Footer from '../../Footer'
import ArticleList from './ArticleList'
import {Button} from 'antd'
// import { Button } from '@material-ui/core'

function Blogs() {
    return ( 
      <>
        
        <div className='blog-body'>
          <div className='left-side-bar'></div>

          <div  className='article'>
            <div className="pre-nxt-btn">
              <Button className='pre-btn'>Previous</Button>
              <Button className='nxt-btn'>Next</Button>
            </div>  
            <Article/>
            <div className="pre-nxt-btn">
              <Button className='pre-btn'>Previous</Button>
              <Button className='nxt-btn'>Next</Button>
            </div> 
            <div className='comment'></div>
          </div>
          
          <div className='right-side-bar'>
            <ArticleList className='articleList'/>
          </div>
        </div>
        <Footer></Footer>
      </>
    )
}

export default Blogs