import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import markdownFiles from '../blogs/MarkdownFiles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './ArticleList.css'
import Article from '../blogs/Article';

// function component, foreach
const Articles = (props) => (
    <div>
        {props.info.map(x => <Display{...x}/>)}
    </div>
);

// class instance to show each ListItem
class Display extends React.Component {
    render() {
    //'/static/media/text.2e958399.md'
    let input = this.props.default;
    let len = input.length;
    let name = input.slice(14,len-12);
    return (
        <>
        <Router>
            <Switch>
            <Route path='/' exact component={Article} />
            </Switch>
        </Router>
        <Route>
            <Link to= {name} className='nav-links'>
                <div className='dsp'>
                    <div>{name}</div>
                </div>
            </Link>
        </Route>
        </>
    );
  }
}

class ArticleList extends React.Component
{
    //const[info, setInfo] = useState(test);
    state = {
        info: markdownFiles,
    };

    render() {
        return (
            <>
            <div className='articlelist'>
                <Articles info={this.state.info}/>
            </div>
            </>
        );
    }
}

export default ArticleList