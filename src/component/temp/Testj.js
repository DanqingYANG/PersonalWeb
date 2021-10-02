import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

const Testj = () => (
    <>
        <p> test.js </p>
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
    </>
  );
  
  export default Testj;