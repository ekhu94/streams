import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <div className="ui container">
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/show" exact component={StreamShow} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                </div>
            </Router>
        </div>
    );
};

export default App;