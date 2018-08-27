import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App1 from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './containers/Login';

const App = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/data" exact component={App1}/>
    </Switch>
    </BrowserRouter>
)



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
