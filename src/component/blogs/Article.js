import React, { useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vs} from 'react-syntax-highlighter/dist/esm/styles/prism'

// import ApMarkdown from './AppMarkdown'
import AppMarkdown from '../../posts/image.md'

// import rehypeHighlight from 'rehype-highlight'

 const Article = () => {
    const [a, seta] = useState({md: ''});

    // eslint-disable-next-line jsx-a11y/alt-text
    const ImageBlock = (props) => { return <img {...props} style={{maxWidth:'100%'}}/>}
    const renderers = {
        code: ({language, value}) => {
          return <SyntaxHighlighter style={vs} language={language} children={value} />
        }, 
        image: ImageBlock
    }
    console.log(AppMarkdown.md);
    useEffect(() => {
      const handleSession = async () => {
        try {
          // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
          fetch(AppMarkdown).then(res => res.text()).then(text => seta({ md: text }));
        
        } catch (error) {
          console.log("error", error);
        }
      };
      handleSession();
    }, []);
    
    return (
        <>
            <ReactMarkdown className='diary' 
            // components={{
              // Map `h1` (`# heading`) to use `h2`s.
              // h1: 'h1',
              // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
              // em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />
            // }}
            renderers={renderers}
            plugins={[gfm]} 
            children={a.md} 
            transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${process.env.REACT_IMAGE_BASE_URL}${uri}`
            }/>
            {/* <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{a.md}</ReactMarkdown>, */}
        </>
    );
}

export default Article;
