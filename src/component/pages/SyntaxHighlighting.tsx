import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import markdownFiles from './MarkdownFiles'

export function SyntaxHightlighting()
{
    let [ content, setContent] = useState({md: ""});
    let AppMarkdown = markdownFiles[0];

    useEffect(()=> {
        fetch(AppMarkdown)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, []);

    return (
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content.md}</ReactMarkdown>
    );
}