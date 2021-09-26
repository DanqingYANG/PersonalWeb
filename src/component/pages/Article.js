import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import AppMarkdown from './posts/app - image.md'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vs} from 'react-syntax-highlighter/dist/esm/styles/prism'
// import './Diary.css'

/*
/*Display md files
*/ 

const ImageBlock = (props) => { return <img {...props} style={{maxWidth:'100%'}}/>}

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={vs} language={language} children={value} />
    
  }, 
  image: ImageBlock
}


class Article extends Component {
    constructor() {
      super();
      this.state = { markdown: '' };
    }
  
    
    componentWillMount() {
      // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
      fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
      //const amd = AppMarkdown;
    }
  
    render() {
      const { markdown } = this.state;
      return (
        <>
          <ReactMarkdown className='diary' 
          renderers={renderers}
          plugins={[gfm]}
          source={markdown} 
          transformImageUri={uri =>
          uri.startsWith("http") ? uri : `${process.env.REACT_IMAGE_BASE_URL}${uri}`
        }/>
      </>);
    }
  }
export default Article